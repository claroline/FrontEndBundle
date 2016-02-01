# Angular UI Resource Picker

(Bower repository for production use)

Provides interaction with Claroline Resource Picker (which is not written in Angular)

## Usage

* Include the js file :

```
<script type="text/javascript" src="/bower_components/angular-ui-resource-picker-bower/angular-resource-picker.js"></script>
```

* Register module into your application :

```
angular.module('MY_APP', [ 'ui.resourcePicker' ]);
```

* Use the `directive` :

```
<btn-resource-picker data-parameters="{Object}"></btn-resource-picker>
```

The directive has a property `parameters` which contains an object representing the Claroline Resource Picker options.