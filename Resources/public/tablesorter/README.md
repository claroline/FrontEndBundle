tablesorter (FORK) is a jQuery plugin for turning a standard HTML table with THEAD and TBODY tags into a sortable table without page refreshes. tablesorter can successfully parse and sort many types of data including linked data in a cell. This forked version adds lots of new enhancements including: alphanumeric sorting, pager callback functons, multiple widgets providing column styling, ui theme application, sticky headers, column filters and resizer, as well as extended documentation with a lot more demos.

[![Bower Version][bower-image]][bower-url] [![NPM Version][npm-image]][npm-url] [![devDependency Status][david-dev-image]][david-dev-url] [![zenhub-image]][zenhub-url]

### Notice!

* Because of the change to the internal cache, the tablesorter v2.16+ core, filter widget and pager (both plugin &amp; widget) will only work with the same version or newer files.

### [Documentation](//mottie.github.io/tablesorter/docs/)

* See the [full documentation](//mottie.github.io/tablesorter/docs/).
* All of the [original document pages](//tablesorter.com/docs/) have been included.
* Information from my blog post on [undocumented options](//wowmotty.blogspot.com/2011/06/jquery-tablesorter-missing-docs.html) and lots of new demos have also been included.
* Change log moved from included text file into the [wiki documentation](//github.com/Mottie/tablesorter/wiki/Changes).

### Demos

* [Basic alpha-numeric sort Demo](//mottie.github.com/tablesorter/).
* Links to demo pages can be found within the main [documentation](//mottie.github.io/tablesorter/docs/).
* More demos & playgrounds - updated in the [wiki pages](//github.com/Mottie/tablesorter/wiki).

### Features

* Multi-column alphanumeric sorting and filtering.
* Multi-tbody sorting - see the [options](//mottie.github.io/tablesorter/docs/index.html#options) table on the main document page.
* Supports [Bootstrap v2 and 3](//mottie.github.io/tablesorter/docs/example-widget-bootstrap-theme.html)
* Parsers for sorting text, alphanumeric text, URIs, integers, currency, floats, IP addresses, dates (ISO, long and short formats) &amp; time. [Add your own easily](//mottie.github.io/tablesorter/docs/example-parsers.html).
* Inline editing - see [demo](//mottie.github.io/tablesorter/docs/example-widget-editable.html)
* Support for ROWSPAN and COLSPAN on TH elements.
* Support secondary "hidden" sorting (e.g., maintain alphabetical sort when sorting on other criteria).
* Extensibility via [widget system](//mottie.github.io/tablesorter/docs/example-widgets.html).
* Cross-browser: IE 6.0+, FF 2+, Safari 2.0+, Opera 9.0+, Chrome 5.0+.
* Small code size, starting at 25K minified
* Works with jQuery 1.2.6+ (jQuery 1.4.1+ needed with some widgets).
* Works with jQuery 1.9+ (`$.browser.msie` was removed; needed in the original version).

### Licensing

* Copyright (c) 2007 Christian Bach.
* Original examples and docs at: [http://tablesorter.com](//tablesorter.com).
* Dual licensed under the [MIT](//www.opensource.org/licenses/mit-license.php) and [GPL](//www.gnu.org/licenses/gpl.html) licenses.

### Download

* Get all files: [zip](//github.com/Mottie/tablesorter/archive/master.zip) or [tar.gz](//github.com/Mottie/tablesorter/archive/master.tar.gz)
* Use [bower](http://bower.io/): `bower install jquery.tablesorter`
* Use [node.js](http://nodejs.org/): `npm install tablesorter`
* CDNJS: [https://cdnjs.com/libraries/jquery.tablesorter](https://cdnjs.com/libraries/jquery.tablesorter)

### Related Projects

* [Plugin for Rails](//github.com/themilkman/jquery-tablesorter-rails). Maintained by [themilkman](//github.com/themilkman).
* [UserFrosting](//github.com/alexweissman/UserFrosting) (A secure, modern user management system for PHP that uses tablesorter) by [alexweissman](//github.com/alexweissman).

### Contributing

If you would like to contribute, please...

1. Fork.
2. Make changes in a branch & add unit tests.
3. Run `grunt test` (if qunit fails, run it again - it's fickle).
4. Create a pull request.

### Special Thanks

* Big shout-out to [Nick Craver](//github.com/NickCraver) for getting rid of the `eval()` function that was previously needed for multi-column sorting.
* Big thanks to [thezoggy](//github.com/thezoggy) for helping with code, themes and providing valuable feedback.
* Big thanks to [ThsSin-](//github.com/TheSin-) for taking over for a while and also providing valuable feedback.
* Thanks to [prijutme4ty](https://github.com/prijutme4ty) for numerous contributions!
* Also extra thanks to [christhomas](//github.com/christhomas) and [Lynesth](//github.com/Lynesth) for help with code.
* And, of course thanks to everyone else that has contributed, and continues to contribute to this forked project!

### Questions?

* Check the [FAQ](//github.com/Mottie/tablesorter/wiki/FAQ) page.
* Search the [main documentation](//mottie.github.io/tablesorter/docs/) (click the menu button in the upper left corner).
* Search the [issues](//github.com/Mottie/tablesorter/issues) to see if the question or problem has been brought up before, and hopefully resolved.
* If someone is available, ask your question in the `#tablesorter` IRC channel at freenode.net.
* Ask your question at [Stackoverflow](//stackoverflow.com/questions/tagged/tablesorter) using a tablesorter tag.
* Please don't open a [new issue](//github.com/Mottie/tablesorter/issues) unless it really is an issue with the plugin, or a feature request. Thanks!

[npm-url]: https://npmjs.org/package/tablesorter
[npm-image]: https://img.shields.io/npm/v/tablesorter.svg
[david-dev-url]: https://david-dm.org/Mottie/tablesorter#info=devDependencies
[david-dev-image]: https://img.shields.io/david/dev/Mottie/tablesorter.svg
[bower-url]: http://bower.io/search/?q=jquery.tablesorter
[bower-image]: https://img.shields.io/bower/v/jquery.tablesorter.svg
[zenhub-url]: https://zenhub.io
[zenhub-image]: https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png

### Recent Changes

View the [complete change log here](//github.com/Mottie/tablesorter/wiki/Changes).

#### <a name="v2.25.1">Version 2.25.1</a> (1/10/2016)

* Docs:
  * Update to jQuery v1.12.0.
  * Fix HTML hint issues.
* Core:
  * Fix time parser detection. See [issue #1107](https://github.com/Mottie/tablesorter/issues/1107).
  * Add multiple widgets from table class. Fixes [issue #1109](https://github.com/Mottie/tablesorter/issues/1109).
  * Fix extra header class name updating. See [issue #1116](https://github.com/Mottie/tablesorter/issues/1116).
  * Fix typo in comments.
* ColumnSelector:
  * Prevent remove widget js error. Fixes [issue #1106](https://github.com/Mottie/tablesorter/issues/1106).
  * Add `tbody` colspan support. See [issue #1120](https://github.com/Mottie/tablesorter/issues/1120).
  * Add child row colspan support. See [issue #1120](https://github.com/Mottie/tablesorter/issues/1120).
* Filter:
  * Use replacement character instead of null (for IE).
  * Fix "or" test regex. Fixes [issue #1117](https://github.com/Mottie/tablesorter/issues/1117).
  * Restore `return false` to fix unit tests.
  * Functions now get exact data, ignoring parsed flag. Fixes [issue #1107](https://github.com/Mottie/tablesorter/issues/1107).
  * Parsed flag now all set `true` if `filter_useParsedData` is `true` &amp; stop using `config.$headers`.
* Output:
  * `output_callback` can now return modified data. See [issue #1121](https://github.com/Mottie/tablesorter/issues/1121).
* Grunt:
  * Add HTML hint.

#### <a name="v2.25.0">Version 2.25.0</a> (12/13/2015)

* Global
  * Use `triggerHandler` instead of `trigger` to prevent event bubble to any outer table. See [issue #1090](https://github.com/Mottie/tablesorter/issues/1090).
* Core
  * Add `duplicateSpan` option (default is `true`) with unit tests ([demo](http://mottie.github.io/tablesorter/docs/example-colspan.html)).
  * Add triggered "removeWidget" method & update docs.
  * `applyWidgetId` now properly initializes a widget, if needed.
  * `applyWidgetId` now adds widget name to `widgets` option.
  * Show parsed data in debug log. See [issue #1084](https://github.com/Mottie/tablesorter/issues/1084).
  * Prevent js error - calling "applyWidgetId" on non-existant widget.
  * Prevent js error - trying to apply a non-existent widget.
  * Fix "updateCell" issue. If "updateCell" is triggered on a `thead` cell, or bubbles to an outer table, tablesorter no longer gets stuck in an "isUpdating" loop.
  * Ensure table has initialized before allowing use of "updateCell". See [issue #1099](https://github.com/Mottie/tablesorter/issues/1099).
  * Fix cache debug log for multiple tbodies.
  * After init, `computeColumnIndex` now only adds "data-column" attribute to mismatched indexes - lessens DOM interaction on tbody (e.g. math widget).
  * Add "sortBeforeEnd" event for internal widget binding.
  * Renamed `$.tablesorter.formatSortingOrder` to `$.tablesorter.getOrder`.
  * Include `table` in console.error if an issue is encountered during initialization.
  * Clean up warning when no parser is found for given data.
  * Fix `config.sortVars` js error for non-existent header cells (makes second column of [this demo](http://mottie.github.io/tablesorter/docs/example-colspan.html) sortable using "sorton").
* Docs
  * Add reference to datejs parser. See [issue #1084](https://github.com/Mottie/tablesorter/issues/1084).
  * Add note that reflow widget only works with HTML5.
  * Add note in filter localization about escaping special characters in regular expressions. See [issue #1101](https://github.com/Mottie/tablesorter/issues/1101).
  * Update &amp; add all options in math widget demo.
  * Fix search tooltip not hiding on side menu close.
  * Update to Bootstrap v3.3.6.
* Editable
  * Ensure table has initialized before allowing use of "updateCell". See [issue #1099](https://github.com/Mottie/tablesorter/issues/1099).
* Filter
  * Prevent js error when `columnFilters` are `false`. Fixes [issue #1091](https://github.com/Mottie/tablesorter/issues/1091).
  * Restore column specific default filters. Fixes [issue #1088](https://github.com/Mottie/tablesorter/issues/1088).
  * Prevent `insideRange` filter type (`widget-filter-type-insideRange.js`) searches on "all" columns.
  * Prevent edge case js error.
  * Add "filterBeforeEnd" event for internal widget binding.
  * Filters that span multiple columns now have the correct "data-column" value set.
  * Consolidated code that parsed "data-column" ranges into a `findRange` function (e.g. external filters with `data-column="1-3,4-6,8"`).
* Math
  * Add `"data-math-filter"` cell override of `math_rowFilter` option. See [issue #1083](https://github.com/Mottie/tablesorter/issues/1083).
  * Limit tbody cell processing &amp; use `cellIndex` whenever possible. See [issue #1048](https://github.com/Mottie/tablesorter/issues/1048).
  * Use core `textExtraction` on cells. See [issue #1098](https://github.com/Mottie/tablesorter/issues/1098).
  * Initial calculation performed once - changed binding to either "filterEnd" or "pagerComplete", not both.
  * Added change flag so a cache update is only performed when cell content inside of a sortable tbody was modified.
  * Fix "data-math-filter" on "all" cell calculation with fixes to getRow & getColumn functions so that filters get priority over the "filtered" row check. See [issue #1083](https://github.com/Mottie/tablesorter/issues/1083).
  * Another "data-math-filter" fix and change flag fix. See [issue #1083](https://github.com/Mottie/tablesorter/issues/1083); thanks to [@lindonb](https://github.com/lindonb) for all the feedback!
  * `math_none` can now be set to an empty string.
* Print
  * Popup made resizable & scrollable. See [issue #1081](https://github.com/Mottie/tablesorter/issues/1081).
* Parsers
  * Checkbox row class &amp; header now work with `sorter-false` set. See [issue #1090](https://github.com/Mottie/tablesorter/issues/1090).
  * Return `true` for header checkbox to work in IE8. See [issue #1090](https://github.com/Mottie/tablesorter/issues/1090).
* Misc
  * gitignore file - ignore "idea" demos used for testing.

#### <a name="v2.24.6">Version 2.24.6</a> (11/22/2015)

* Core
  * Prevent "tablesorter-ready" event from firing multiple times in a row.
  * While detecting parsers, use `cssIgnoreRow` &amp; stop after 50 rows.
* Docs
  * Update utility options section.
* Math
  * Add `math_rowFilter` option. See [issue #1083](https://github.com/Mottie/tablesorter/issues/1083).
  * Spelling corrections to `math_rowFilter` option.
  * Ensure internal updating flag gets cleared. Fixes [issue #1083](https://github.com/Mottie/tablesorter/issues/1083).
* Pager
  * Initial page no longer ignored (no filter widget). Fixes [issue #1085](https://github.com/Mottie/tablesorter/issues/1085).
  * Fix other page set issues (no filter widget). Fixes [issue #1085](https://github.com/Mottie/tablesorter/issues/1085).
  * Fix page set issues (with filter widget). Fixes [issue #1085](https://github.com/Mottie/tablesorter/issues/1085).
  * Clean up pager widget code.
* Print
  * Add `print_now` option. See [issue #1081](https://github.com/Mottie/tablesorter/issues/1081).
  * Fix print &amp; close button actions.
* SortTbodies
  * Use config parameter for numeric sorting. See [issue #1082](https://github.com/Mottie/tablesorter/issues/1082).
* Parsers:
  * Update `parser-input-select.js`. See [issue #971](https://github.com/Mottie/tablesorter/issues/971).
  * `parser-date-month.js` no longer removes other language data.
  * Add alternate date range parser &amp; update filter insideRange filter type.
  * Don't use `$.extend` for simple additions.
* Misc
  * Update grunt dependencies.
