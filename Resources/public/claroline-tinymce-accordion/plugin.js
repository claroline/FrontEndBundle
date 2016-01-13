;(function (tinymce, $) {
    'use strict';

    tinymce.PluginManager.requireLangPack('accordion', 'en,es,fr_FR');
    tinymce.PluginManager.add('accordion', function(editor) {
        // Add a button that opens a window
        function showDialog() {
            // Open window
            var selection = editor.selection;
            var selectedElm = selection.getNode();
            var accordionElm = editor.dom.getParent(selectedElm, 'div[data-mce-type=accordion]');
            var accordionTitle = "", accordionText="";
            if (accordionElm != null) {
                accordionTitle = $(accordionElm).find('h4.panel-title a').html();
                accordionText = $(accordionElm).find('div.panel-body').html();
            }
            editor.windowManager.open({
                title: 'Insert accordion',
                body: [
                    {type: 'textbox', name: 'title', label: 'Title', size: 40, value : accordionTitle},
                    {type: 'textbox', multiline: true, name: 'text', label: 'Content', size: 40, minHeight: 150, value : accordionText}
                ],
                onsubmit: function(e) {
                    // Insert content when the window form is submitted
                    if (accordionElm != null) {
                        $(accordionElm).find('h4.panel-title a').html(e.data.title);
                        $(accordionElm).find('div.panel-body').html(e.data.text);
                    } else {
                        var id= 'collapse-'+(new Date()).getTime();
                        var htmlAccordion = '<div data-mce-type="accordion" class="tiny-accordion panel-group" id="accordion">' +
                            '<div class="panel panel-default">' +
                            '<div class="panel-heading">' +
                            '<h4 class="panel-title">' +
                            '<a data-toggle="collapse" data-parent="#accordion" href="#' + id + '">' +
                            e.data.title +
                            '</a>' +
                            '</h4>' +
                            '</div>' +
                            '<div id="' + id + '" class="panel-collapse collapse">' +
                            '<div class="panel-body">' +
                            e.data.text +
                            '</div>'+
                        '</div>'+
                        '</div>'+
                        '</div>';

                        editor.insertContent(htmlAccordion);
                        var panelElt = editor.dom.get(id);
                        var accordionElt = editor.dom.getParent(panelElt, 'div[data-mce-type=accordion]');
                        var nextElt = editor.dom.getNext(accordionElt, '*');

                        if(nextElt==null) {
                            editor.dom.add(editor.getBody(), 'p','','&nbsp;');
                            nextElt = editor.dom.getNext(accordionElt, '*');
                        }
                        var range = document.createRange();
                        range.setStart(nextElt, 0);
                        range.setEnd(nextElt, 0);
                        selection.setRng(range);
                    }
                }
            });
        }
        editor.addButton('accordion', {
            tooltip: 'Insert accordion',
            icon: 'fa fa-list-alt',
            stateSelector: 'div[data-mce-type=accordion]',
            onclick: showDialog
        });
    });
})(tinymce, jQuery);