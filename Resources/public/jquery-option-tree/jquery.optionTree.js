/*
 * jQuery optionTree Plugin
 * version: 1.3
 * @requires jQuery v1.3 or later
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * @version $Id$
 * @author  Krzysztof Kotowicz <kkotowicz at gmail dot com>
 * @see http://code.google.com/p/jquery-option-tree/
 * @see http://blog.kotowicz.net/search/label/option
 */

/**
 * Converts passed JSON option tree into dynamically created <select> elements allowing you to
 * choose nested options.
 *
 * @param String tree options tree
 * @param array options additional options (optional)
 */
(function($){
$.fn.optionTree = function(tree, options) {

    options = $.extend({
        choose: 'Choose...', // string with text or function that will be passed current level and returns a string
        show_multiple: false, // show multiple values (if true takes number of items as size, or number (eg. 12) to show fixed size)
        preselect: {},
        loading_image: '', // show an ajax loading graphics (animated gif) while loading ajax (eg. /ajax-loader.gif)
        select_class: '',
        leaf_class: 'final',
        empty_value: '', // what value to set the input to if no valid option was selected
        on_each_change: false, // URL to lazy load (JSON, 'id' parameter will be added) or function. See default_lazy_load
        set_value_on: 'leaf', // leaf - sets input value only when choosing leaf node. 'each' - sets value on each level change.
                              // makes sense only then indexed=true
        indexed: false,
        preselect_only_once: false, // if true, once preselected items will be chosen, the preselect list is cleared. This is to allow
                                    // changing the higher level options without automatically changing lower levels when a whole subtree is in preselect list
        get_parent_value_if_empty: false, //if true, if the last selected option is 'choose level x',then it will try to find parent's select value
        attr: 'name' // default attribute name to use for tracking the nested values. You can use e.g. 'id' if you don'tw ant to populate your form submissions  with additional inputs
    }, options || {});

    var cleanName = function (name) {
        return name.replace(/_*$/, '');
    };

    var removeNested = function (name) {
        $("select[" + options.attr + "^='"+ name + "']").remove();
    };

    var parentName = function (name) {
        return name.replace(/_$/, '');
    };

    var setValue = function(name, value) {
        $("input[" + options.attr + "='" + cleanName(name) + "']").val(value).change();
    };

    var getParentValue = function(name) {
        var value = '',
            $parent;

        if (name !== cleanName(name)) {
            $parent = $("select[" + options.attr + "='" + parentName(name) + "']");
            if ($parent.length > 0) {
                return $parent.val();
            }
        }

        return options.empty_value;
    };

    // default lazy loading function
    var default_lazy_load = function(value) {
        var input = this;
        if ( options.loading_image !== '' ) {
          // show loading animation
          $("<img>")
            .attr('src', options.loading_image)
            .attr('class', 'optionTree-loader')
            .insertAfter(input);
        }

        $.getJSON(options.lazy_load, {id: value}, function(tree) {
            $('.optionTree-loader').remove();
            var prop;
            for (prop in tree) {
                if (tree.hasOwnProperty(prop)) { // tree not empty
                    $(input).optionTree(tree, options);
                    return;
                }
            }
            // tree empty, call value switch
            $(input).optionTree(value, options);
        });
    };

    if (typeof options.on_each_change === 'string') { // URL given as an onchange
        options.lazy_load = options.on_each_change;
        options.on_each_change = default_lazy_load;
    }

    var isPreselectedFor = function(clean, v) {
      if (!options.preselect || !options.preselect[clean]) {
        return false;
      }

      if ($.isArray(options.preselect[clean])) {
        return $.inArray(v, options.preselect[clean]) !== -1;
      }

      return (options.preselect[clean] === v);
    };

    return this.each(function() {
        var name = $(this).attr(options.attr) + "_";

        // remove all dynamic options of lower levels
        removeNested(name);

        if (typeof tree === "object") { // many options exists for current nesting level

            // create select element with all the options
            // and bind onchange event to recursively call this function

            var $select = $("<select>").attr(options.attr,name)
            .change(function() {
                if (this.options[this.selectedIndex].value !== '') {
                    if ($.isFunction(options.on_each_change)) {
                        removeNested(name + '_');
                        options.on_each_change.apply(this, [this.options[this.selectedIndex].value, tree]);
                    } else {
                        // call with value as a first parameter
                        $(this).optionTree(tree[this.options[this.selectedIndex].value], options);
                    }
                    if (options.set_value_on === 'each') {
                      setValue(name, this.options[this.selectedIndex].value);
                    }
                } else { // empty value was selected
                    removeNested(name + '_');

                    var fallback = options.empty_value;

                    if (options.get_parent_value_if_empty) {
                        fallback = getParentValue(name);
                    }
                    setValue(name, fallback);
                }
            });

            var text_to_choose = '';

            if (jQuery.isFunction(options.choose)) {
                var level = $(this).siblings().andSelf().filter('select').length;
                text_to_choose = options.choose.apply(this, [level]);
            } else if ( options.choose !== '' ) {
                text_to_choose = options.choose;
            }

            // if show multiple -> show open select
            var count_tree_objects = 0;
            if ( text_to_choose !== '' ) {
              // we have a default value
              count_tree_objects++;
            }
            if (options.show_multiple > 1) {
                count_tree_objects = options.show_multiple;
            } else if (options.show_multiple === true) {
                $.each(tree, function() {
                    count_tree_objects++;
                });
            }
            if ( count_tree_objects > 1 ){
                $select.attr('size', count_tree_objects);
            }

            if ($(this).is('input')) {
                $select.insertBefore(this);
            } else {
                $select.insertAfter(this);
            }

            if (options.select_class) {
                $select.addClass(options.select_class);
            }

            if ( text_to_choose !== '' ) {
                $("<option>").html(text_to_choose).val('').appendTo($select);
            }

            var foundPreselect = false;
            $.each(tree, function(k, v) {
                var label, value;
                if (options.indexed) {
                    label = v;
                    value = k;
                } else {
                    label = value = k;
                }
                var o = $("<option>").html(label)
                    .attr('value', value);
                var clean = cleanName(name);
                if (options.leaf_class && typeof value !== 'object') { // this option is a leaf node
                    o.addClass(options.leaf_class);
                }

                o.appendTo($select);
                if (isPreselectedFor(clean, value)) {
                    o.get(0).selected = true;
                    foundPreselect = true;
                }
            });

            if (foundPreselect) {
                $select.change();
            }

            if (!foundPreselect && options.preselect_only_once) { // clear preselect on first not-found level
                options.preselect[cleanName(name)] = null;
            }

        } else if (options.set_value_on === 'leaf') { // single option is selected by the user (function called via onchange event())
            if (options.indexed) {
                setValue(name, this.options[this.selectedIndex].value);
            } else {
                setValue(name, tree);
            }
        }
    });

};
}(jQuery));
