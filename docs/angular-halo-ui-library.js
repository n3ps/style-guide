var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-action-menu
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Action menu. Menu which can show main and secondary actions in menu.
     *
     * <br>
     * Design version: 1.2<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-813">HALO-813</a> <br>
     *
     *    <v-action-menu class="v-ActionMenu_Link" data="exampleController.dataLink"></v-action-menu>
     *
     *    <v-action-menu class="v-ActionMenu_Link v-ActionMenu_Icon" data="exampleController.dataWithIcons"></v-action-menu>
* @example
    <example module="vActionMenuExample" deps="" animate="false">
    <file name="index.html">
        <div ng-controller="ExampleController as exampleController">
            <h3>Simple example:</h3><br/>
            <v-action-menu data="exampleController.data"></v-action-menu>
            <br>
            <br>

            <h3>Simple example disabled main and extra actions:</h3><br/>
            <v-action-menu ng-disabled="true" data="exampleController.data"></v-action-menu>
            <br>
            <br>

            <h3>Simple example only main action:</h3><br/>
            <v-action-menu data="exampleController.dataOnlyMainAction"></v-action-menu>
            <br>
            <br>

            <h3>Simple example without main action:</h3><br/>
            <v-action-menu data="exampleController.dataWithoutMainAction"></v-action-menu>
            <br>
            <br>

            <h3>Simple example without main action and disabled:</h3><br/>
            <v-action-menu data="exampleController.dataWithoutMainAction" ng-disabled="true"></v-action-menu>
            <br>
            <br>

            <h3>Simple example disabled main action:</h3><br/>
            <v-action-menu data="exampleController.dataDisabledMainAction"></v-action-menu>
            <br>
            <br>

            <h3>Simple example disabled extra actions:</h3><br/>
            <v-action-menu data="exampleController.dataDisabledExtraActions"></v-action-menu>
            <br>
            <br>

            <h3>Simple example disabled one extra action:</h3><br/>
            <v-action-menu data="exampleController.dataDisabledOneExtraAction"></v-action-menu>
            <br>
            <br>

            <h3>Simple example with two main actions:</h3><br/>
            <v-action-menu data="exampleController.dataMultiMainActions1"></v-action-menu>
            <br>
            <br>

            <h3>Simple example with three main actions:</h3><br/>
            <v-action-menu data="exampleController.dataMultiMainActions2"></v-action-menu>
            <br>
            <br>

            <h3>With specified main action and state changes:</h3>
            <div layout="row" layout-align="end center">
                 <div flex="20" layout="row"  layout-align="end center">
                    <v-action-menu ng-disabled="isSpecifiedDisabled" data="exampleController.dataSpecifiedMain"></v-action-menu>
                 </div>
                <div flex="80" style="min-width: 80%"><p style="padding:0 10px;">Other content</p></div>
            </div>
            <br/>
            <br/>
            <div>
                <v-button ng-click="exampleController.setAnotherMainAction()">Set another Main action</v-button>
                <v-button ng-click="exampleController.toggleDisableMainAction()">Toggle disable Main action</v-button>
                <v-button ng-click="isSpecifiedDisabled =! isSpecifiedDisabled">Toggle disable All component</v-button>
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>

        </div>
    </file>
    <file name="script.js">
        angular.module('vActionMenuExample', ['ngHaloUiLibrary']).controller('ExampleController', function () {
            this.data = [
                {text: 'First Main Action', action: function() { console.log('First Main action');}, main: true},
                {text: 'Action 1', action: function() { console.log('Action 1'); } },
                {text: 'Action 2', action: function() { console.log('Action 2'); } }
            ];

            this.dataOnlyMainAction = [
                {text: 'First Main Action', action: function() { console.log('First Main action');}, main: true}
            ];

            this.dataWithoutMainAction = [
                {text: 'Action 1', action: function() { console.log('Action 1'); } },
                {text: 'Action 2', action: function() { console.log('Action 2'); } }
            ];

            this.dataDisabledMainAction = [
                {text: 'First Main Action', action: function() { console.log('First Main action');}, main: true, disabled: true},
                {text: 'Action 1', action: function() { console.log('Action 1'); } },
                {text: 'Action 2', action: function() { console.log('Action 2'); } }
            ];

            this.dataDisabledExtraActions = [
                {text: 'First Main Action', action: function() { console.log('First Main action');}, main: true},
                {text: 'Action 1', action: function() { console.log('Action 1'); }, disabled: true},
                {text: 'Action 2', action: function() { console.log('Action 2'); }, disabled: true}
            ];

            this.dataDisabledOneExtraAction = [
                {text: 'First Main Action', action: function() { console.log('First Main action');}, main: true},
                {text: 'Action 1', action: function() { console.log('Action 1'); }, disabled: true},
                {text: 'Action 2', action: function() { console.log('Action 2'); }}
            ];

            this.dataMultiMainActions1 = [
                {text: 'First Main Action', action: function() { alert('First Main action');}, main: true },
                {text: 'Second Main Action', action: function() { console.log('Second Main action'); }, main: true },
                {text: 'Action 1', action: function() { console.log('Action 1'); } },
                {text: 'Action 2', action: function() { console.log('Action 2'); } }
            ];

            this.dataMultiMainActions2 = [
                {text: 'First Main Action', action: function() { console.log('First Main action');}, main: true },
                {text: 'Second Main Action', action: function() { console.log('Second Main action'); }, main: true },
                {text: 'Third Main Action', action: function() { console.log('Third Main action'); }, main: true },
                {text: 'Action 1', action: function() { console.log('Action 1'); } },
                {text: 'Action 2', action: function() { console.log('Action 2'); } }
            ];

            this.dataDisabled = [
                {text: 'First Main Action', action: function() { alert('First Main action'); }},
                {text: 'Action 1', action: function() { console.log('Action 1'); } },
                {text: 'Action 2', action: function() { console.log('Action 2'); } }
            ];

            this.dataLink = [
                {text: 'First Main Action', action: function() { alert('First Main action'); }},
                {text: 'Action 1', action: function() { console.log('Action 1'); } },
                {text: 'Action 2', action: function() { console.log('Action 2'); } }
            ];

            this.dataSpecifiedMain = [
                {text: 'Action 1', action: function() { console.log('Action 1'); } },
                {text: 'Specified Main Action', action: function() { console.log('Specified Main Action'); }, main: true},
                {text: 'Action 2', action: function() { console.log('Action 2'); } }
            ];

            this.dataWithIcons = [
                {text: 'First Main Action', action: function() { console.log('First Main action'); }, icon: 'cross'},
                {text: 'Action 1', action: function() { console.log('Action 1'); }, icon: 'cross' },
                {text: 'Action 2', action: function() { console.log('Action 2'); }, icon: 'cross' }
            ];

            this.setAnotherMainAction = function () {
                var self = this;
                var currentIndex = this.dataSpecifiedMain.indexOf(this.dataSpecifiedMain.filter(function(i){return i.main})[0]);
                var getNewIndex = function () {
                    var newIndex = Math.floor(Math.random()*self.dataSpecifiedMain.length);
                    return newIndex !== currentIndex ? newIndex : getNewIndex();
                };
                this.dataSpecifiedMain[currentIndex].main = false;
                this.dataSpecifiedMain[getNewIndex()].main = true;
            };

            this.toggleDisableMainAction = function () {
                var currentIndex = this.dataSpecifiedMain.indexOf(this.dataSpecifiedMain.filter(function(i){return i.main})[0]);
                this.dataSpecifiedMain[currentIndex].disabled = !this.dataSpecifiedMain[currentIndex].disabled;
            };

        });
    </file>
    </example>
     *
     **/
    var VActionMenu = (function () {
        function VActionMenu() {
            this.restrict = 'E';
            this.templateUrl = 'components/vActionMenu/vActionMenu.html';
            this.controller = NgHaloUiLibrary.VActionMenuController;
            this.controllerAs = 'actionMenuVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                data: '=',
                ngDisabled: '=?',
                context: '=?'
            };
        }
        VActionMenu.factory = function () {
            return function () { return new VActionMenu(); };
        };
        return VActionMenu;
    }());
    NgHaloUiLibrary.VActionMenu = VActionMenu;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VActionMenuController = (function () {
        function VActionMenuController() {
        }
        VActionMenuController.prototype.getMainActions = function () {
            var actions = this.data.filter(function (i) { return i.main; });
            return actions.length > 0 ? actions : [];
        };
        VActionMenuController.prototype.getMenuActions = function () {
            var self = this;
            self.disabledMenu = true;
            var actions = this.data.filter(function (i) {
                if (!i.main && (i.disabled === undefined || i.disabled !== true)) {
                    self.disabledMenu = false;
                }
                return !i.main;
            });
            return actions;
        };
        return VActionMenuController;
    }());
    NgHaloUiLibrary.VActionMenuController = VActionMenuController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-autocomplete
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard autocomplete.
     * Extended from angular-material <a href="https://material.angularjs.org/latest/demo/autocomplete">md-autocomplete</a>.
     *
     * <br>
     * Design version: 1.1<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-673">HALO-673</a><br>
     *
     * @example
     <example module="vAutocompleteExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController">

     Model: {{exampleController.model}}<br>

     <h5>Autocomplete with label and placeholder and min-length 0.</h5>
     <v-autocomplete
     model="exampleController.model1"
     search-method="exampleController.search1"
     label="{{exampleController.label1}}"
     min-length="exampleController.minLength1"
     placeholder="{{exampleController.placeholder1}}"></v-autocomplete>

     <h5>Autocomplete with placeholder. Please, type "sug"</h5>
     <v-autocomplete
     model="exampleController.model2"
     search-method="exampleController.search2"
     placeholder="{{exampleController.placeholder2}}"></v-autocomplete>

     <h5>Autocomplete with label</h5>
     <v-autocomplete
     model="exampleController.model3"
     search-method="exampleController.search3"
     label="{{exampleController.label3}}"></v-autocomplete>

     <h5>Autocomplete with custom template, please, type "name"</h5>
     <v-autocomplete
     model="exampleController.model4"
     search-method="exampleController.search4">
         <v-autocomplete-template>
            <v-icon icon="clock"></v-icon> <strong>{{item}}</strong>
         </v-autocomplete-template>
     </v-autocomplete>

     <h5>Autocomplete with custom not-found template, please, type "name"</h5>
     <v-autocomplete
     model="exampleController.model4"
     search-method="exampleController.search4">
         <v-autocomplete-not-found>
           <span>"{{autocompleteVm.searchText}}" not found</span>
         </v-autocomplete-not-found>
     </v-autocomplete>


     <h5>Please, type "sug" minimum 3 symbols</h5>
     <v-autocomplete
     model="exampleController.model5"
     search-method="exampleController.search5"
     min-length="exampleController.minLength5">
     </v-autocomplete>

     <h5>Disabled autocomplete</h5>
     <v-autocomplete
     model="exampleController.model6"
     search-method="exampleController.search6"
     ng-disabled="exampleController.disabled"></v-autocomplete>

     <h5>Disabled autocomplete with label</h5>
     <v-autocomplete
     model="exampleController.model6"
     search-method="exampleController.search6"
     ng-disabled="exampleController.disabled"
     label="{{exampleController.label1}}"></v-autocomplete>
     <br />
     <br />
     <br />
     <br />
     <br />
     </div>
     </file>
     <file name="script.js">
     angular.module('vAutocompleteExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($filter, $scope) {
        $scope.model = null;

        $scope.model1 = null;
        $scope.model2 = null;
        $scope.model3 = null;
        $scope.model4 = null;
        $scope.model5 = null;
        $scope.model6 = null;

        var autocompleteData = ['Suggestion 1', 'Suggestion 2', 'Text 1', 'Text 2'];
        var autocompleteData2 = ['Name1', 'Name2', 'Name3'];

        this.label1 ='Label';
        this.label2 ='Label';
        this.label3 ='Label';
        this.label4 ='Label';
        this.label5 ='Label';
        this.label6 ='Label';

        this.placeholder2 ='Placeholder';

        this.disabled = true;


        this.minLength1 = 0;
        this.minLength5 = 3;

        this.search1 = function (input) {
            return $filter('filter')(autocompleteData, input);
        };
        this.search2 = function (input) {
            return $filter('filter')(autocompleteData, input);
        };
        this.search3 = function (input) {
            return $filter('filter')(autocompleteData, input);
        };
        this.search4 = function (input) {
            return $filter('filter')(autocompleteData2, input);
        };
        this.search5 = function (input) {
            return $filter('filter')(autocompleteData, input);
        };
        this.search6 = function (input) {
            return $filter('filter')(autocompleteData, input);
        };
     });
     </file>
     </example>
     *
     **/
    var VAutocomplete = (function () {
        function VAutocomplete() {
            var _this = this;
            this.restrict = 'E';
            this.controller = NgHaloUiLibrary.VAutocompleteController;
            this.controllerAs = 'autocompleteVm';
            this.bindToController = true;
            this.scope = {
                searchMethod: '=',
                searchText: '=?',
                model: '=?',
                placeholder: '@?',
                label: '@?',
                selectedChange: '=?',
                minLength: '=?',
                selectOnMatch: '=?',
                noCache: '=?',
                menuClass: '@?',
                ngDisabled: '@?',
                highlightFlags: '@?',
                autoSelect: '=?',
                onBlur: '=?',
                onFocus: '=?',
                delay: '@?'
            };
            this.templateUrl = function (element) {
                if (element.find('v-autocomplete-template').html()) {
                    element.attr('template', element.find('v-autocomplete-template').html());
                }
                if (element.find('v-autocomplete-not-found').html()) {
                    element.attr('not-found', element.find('v-autocomplete-not-found').html());
                }
                return 'components/vAutocomplete/vAutocomplete.html';
            };
            this.compile = function ($element) {
                if ($element.attr('not-found')) {
                    $element.find('md-autocomplete').append('<md-not-found>' + $element.attr('not-found') + '</md-not-found>');
                }
                if ($element.attr('template')) {
                    var html = $element.attr('template');
                    $element.find('md-autocomplete').append('<md-item-template>' + html + '</md-item-template>');
                }
                else {
                    $element.find('md-autocomplete').append('<md-item-template><span md-highlight-text="autocompleteVm.searchText" md-highlight-flags="{{autocompleteVm.highlightFlags}}">{{item}}</span></md-item-template>');
                }
                return _this;
            };
        }
        VAutocomplete.factory = function () {
            return function () { return new VAutocomplete(); };
        };
        ;
        return VAutocomplete;
    }());
    NgHaloUiLibrary.VAutocomplete = VAutocomplete;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VAutocompleteController = (function () {
        function VAutocompleteController($scope, $element, $timeout) {
            var _this = this;
            if (this.label === undefined) {
                this.labelStatus = 'no-label';
                this.label = this.placeholder || ' ';
            }
            else {
                this.labelStatus = 'label';
            }
            $timeout(function () {
                var input = $element.find('input')[0];
                input.addEventListener('blur', function () { return $scope.$eval(_this.onBlur); });
                input.addEventListener('focus', function () { return $scope.$eval(_this.onFocus); });
            });
        }
        return VAutocompleteController;
    }());
    NgHaloUiLibrary.VAutocompleteController = VAutocompleteController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-button
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard button.
     * Extended from angular-material <a href="https://material.angularjs.org/latest/demo/button">md-button</a>.<br>
     * Button can contain icon with a label and icon without a label.
     * Please use v-icon component and v-Icon_ButtonWithText class for this.
     *
     * <br>
     * Design version: 1.1<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-672">HALO-672</a> <br>
     *
     * @example
    <example module="vButtonExample" deps="" animate="false">
    <file name="index.html">
     <div ng-controller="ExampleController as exampleController">
        <h3>Standard v-button example:</h3>
        <div>
            <v-button>Default</v-button> <v-button ng-disabled="true">Inactive</v-button> <v-button class="v-Button_Selected">Selected</v-button>
        </div>
        <br>
        <br>

        <div>
            <v-button>Rollover</v-button>
            <v-button class="v-Button_Icon"><v-icon icon="cross" class="v-Example-Icon"></v-icon></v-button>
        </div>
        <br>
        <br>
         <h3>Flat v-button example:</h3>
         <div>
            <v-checkbox model="exampleController.disableState">Disable state: {{exampleController.disableState}}</v-checkbox><br />
            <v-button class="v-Button-Flat">Flat button</v-button>
            <v-button class="v-Button-Flat" ng-disabled="exampleController.disableState" ng-click="exampleController.clickAction()">Inactive flat button</v-button>
            <v-button class="v-Button-Flat v-Button-Flat_Large">Large flat button</v-button>
         </div>
         <br>
         <br>
         <br>
         <br>
     </div>
    </file>
    <file name="script.js">
        angular.module('vButtonExample', ['ngHaloUiLibrary']).controller('ExampleController', function () {
            this.disableState=true;
            this.clickAction=function(){
                alert('Click');
            };
        });
    </file>
     <file name="style.css">
     .v-Button-Button .v-Example-Icon>svg {
        stroke: white;
        display: block;
        width: 16px;
     }
     .v-Button-Button .v-Example-Icon{
        margin-top: -2px;
        margin-bottom: -2px;
     }
     .v-Button-Button .v-Icon_ButtonWithText.v-Example-Icon>svg{
        width: 13px;
     }
     </file>
    </example>
     *
     **/
    var VButton = (function () {
        function VButton() {
            this.restrict = 'E';
            this.templateUrl = 'components/vButton/vButton.html';
            this.controller = NgHaloUiLibrary.VButtonController;
            this.controllerAs = 'buttonVm';
            this.bindToController = true;
            this.transclude = true;
        }
        VButton.factory = function () {
            return function () { return new VButton(); };
        };
        return VButton;
    }());
    NgHaloUiLibrary.VButton = VButton;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VButtonController = (function () {
        function VButtonController($element) {
            $element.on('click', function (e) {
                if (!!$element.attr('disabled')) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            });
        }
        return VButtonController;
    }());
    NgHaloUiLibrary.VButtonController = VButtonController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VCalendarMonth = (function () {
        function VCalendarMonth() {
            this.restrict = 'A';
            this.require = ['^^vCalendar', 'vCalendarMonth'];
            this.controller = NgHaloUiLibrary.VCalendarMonthController;
            this.controllerAs = 'calendarMonthVm';
            this.bindToController = true;
            this.scope = {
                vCalendarMonth: '='
            };
        }
        VCalendarMonth.factory = function () {
            return function () { return new VCalendarMonth(); };
        };
        VCalendarMonth.prototype.link = function (scope, element, attrs, controllers) {
            var calendarCtrl = controllers[0];
            var monthCtrl = controllers[1];
            monthCtrl.calendarController = calendarCtrl;
            monthCtrl.generateContent();
            scope.$watch(function () { return monthCtrl.vCalendarMonth; }, function (month, oldMonth) {
                if (month !== oldMonth) {
                    monthCtrl.generateContent();
                }
            });
            scope.$on('vCalendar:minDate', function () { return monthCtrl.applyDisabled(); });
            scope.$on('vCalendar:maxDate', function () { return monthCtrl.applyDisabled(); });
            scope.$on('vCalendar:markers', function () { return monthCtrl.applyMarkers(); });
        };
        return VCalendarMonth;
    }());
    NgHaloUiLibrary.VCalendarMonth = VCalendarMonth;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VCalendarMonthController = (function () {
        function VCalendarMonthController($element, $filter) {
            this.$element = $element;
            this.$filter = $filter;
        }
        VCalendarMonthController.prototype.generateContent = function () {
            this.$element.empty();
            this.$element.append(this.buildCalendarForMonth());
            this.applyDisabled();
            this.applyMarkers();
        };
        VCalendarMonthController.prototype.applyMarkers = function () {
            var _this = this;
            var tds = this.$element.find('[data-date]');
            tds.find("." + VCalendarMonthController.CLASS_VCALENDAR_MARKER).remove();
            if (this.calendarController.markers) {
                var _loop_1 = function(key) {
                    /* istanbul ignore else  */
                    if (this_1.calendarController.markers.hasOwnProperty(key)) {
                        var tdForMarker = tds.filter("[data-date='" + key + "']");
                        /* istanbul ignore else  */
                        if (tdForMarker) {
                            var marker = this_1.createCalendarMarker();
                            if (this_1.calendarController.markers[key].action) {
                                var localDate_1 = new Date(key);
                                marker.addEventListener('click', function (event) {
                                    _this.calendarController.markers[key].action(localDate_1, event);
                                    event.stopPropagation();
                                });
                            }
                            tdForMarker
                                .find("." + VCalendarMonthController.CLASS_VCALENDAR_DAY)
                                .append(marker);
                        }
                    }
                };
                var this_1 = this;
                for (var key in this.calendarController.markers) {
                    _loop_1(key);
                }
            }
        };
        VCalendarMonthController.prototype.applyDisabled = function () {
            if (this.calendarController.minDate || this.calendarController.maxDate) {
                this.$element
                    .find("." + VCalendarMonthController.CLASS_VCALENDAR_DAY)
                    .removeClass(VCalendarMonthController.CLASS_VCALENDAR_DAY_DISABLED);
                var tds = this.$element.find('[data-date]');
                if (this.calendarController.minDate) {
                    if ((this.vCalendarMonth.getFullYear() < this.calendarController.minDate.getFullYear()) ||
                        (this.vCalendarMonth.getFullYear() === this.calendarController.minDate.getFullYear() &&
                            this.vCalendarMonth.getMonth() < this.calendarController.minDate.getMonth())) {
                        tds.find("." + VCalendarMonthController.CLASS_VCALENDAR_DAY)
                            .addClass(VCalendarMonthController.CLASS_VCALENDAR_DAY_DISABLED);
                    }
                    else {
                        var minTd = tds
                            .filter("[data-date='" + this.calendarController.minDate.toDateString() + "']");
                        var index = tds.index(minTd);
                        /* istanbul ignore else  */
                        if (index !== -1) {
                            tds.slice(0, index)
                                .find("." + VCalendarMonthController.CLASS_VCALENDAR_DAY)
                                .addClass(VCalendarMonthController.CLASS_VCALENDAR_DAY_DISABLED);
                        }
                    }
                }
                if (this.calendarController.maxDate) {
                    if ((this.vCalendarMonth.getFullYear() > this.calendarController.maxDate.getFullYear()) ||
                        (this.vCalendarMonth.getFullYear() === this.calendarController.maxDate.getFullYear() &&
                            this.vCalendarMonth.getMonth() > this.calendarController.maxDate.getMonth())) {
                        tds.find("." + VCalendarMonthController.CLASS_VCALENDAR_DAY)
                            .addClass(VCalendarMonthController.CLASS_VCALENDAR_DAY_DISABLED);
                    }
                    else {
                        var maxTd = tds
                            .filter("[data-date='" + this.calendarController.maxDate.toDateString() + "']");
                        var index = tds.index(maxTd);
                        /* istanbul ignore else  */
                        if (index !== -1) {
                            tds.slice(index + 1, tds.length)
                                .find("." + VCalendarMonthController.CLASS_VCALENDAR_DAY)
                                .addClass(VCalendarMonthController.CLASS_VCALENDAR_DAY_DISABLED);
                        }
                    }
                }
            }
        };
        VCalendarMonthController.prototype.buildCalendarForMonth = function () {
            var thisMonthDate = new Date(this.vCalendarMonth.getTime());
            var daysInMonth = new Date(thisMonthDate.getFullYear(), thisMonthDate.getMonth() + 1, 0).getDate();
            var startDaysOffset = (7 + thisMonthDate.getDay() - NgHaloUiLibrary.VCalendarController.FIRST_DAY_OF_WEEK) % 7;
            var endDaysOffset = 7 - (startDaysOffset + daysInMonth) % 7;
            var weeksCountToRender = (startDaysOffset + daysInMonth + endDaysOffset) / 7;
            var weeksRendered = 0;
            var monthBody = document.createDocumentFragment();
            var monthTable = this.createTable();
            monthBody.appendChild(monthTable);
            monthTable.appendChild(this.buildHeaderTr(thisMonthDate, startDaysOffset));
            monthTable.appendChild(this.buildWeekTr(thisMonthDate, startDaysOffset, 0));
            thisMonthDate.setDate(thisMonthDate.getDate() + 7 - startDaysOffset);
            weeksRendered++;
            while (weeksRendered < weeksCountToRender - 1) {
                monthTable.appendChild(this.buildWeekTr(thisMonthDate));
                thisMonthDate.setDate(thisMonthDate.getDate() + 7);
                weeksRendered++;
            }
            monthTable.appendChild(this.buildWeekTr(thisMonthDate, 0, endDaysOffset));
            return monthBody;
        };
        VCalendarMonthController.prototype.buildHeaderTr = function (date, offset) {
            var tr = this.createTr();
            var td = this.createTd();
            var tdInner = this.createTdInner();
            tdInner.textContent = this.$filter.call(this.$filter, 'date')(date, 'MMM');
            tdInner.classList.add(VCalendarMonthController.CLASS_VCALENDAR_MONTH_TITLE);
            /* istanbul ignore else  */
            if (offset !== 0) {
                var spacerTd = this.createTd();
                spacerTd.setAttribute('colspan', "" + offset);
                tr.appendChild(spacerTd);
            }
            td.setAttribute('colspan', "" + (7 - offset));
            td.appendChild(tdInner);
            tr.appendChild(td);
            return tr;
        };
        VCalendarMonthController.prototype.buildWeekTr = function (date, startOffset, endOffset) {
            if (startOffset === void 0) { startOffset = 0; }
            if (endOffset === void 0) { endOffset = 0; }
            var thisWeekDate = new Date(date.getTime());
            var tr = this.createTr();
            if (startOffset !== 0) {
                var spacerTd = this.createTd();
                spacerTd.setAttribute('colspan', "" + startOffset);
                tr.appendChild(spacerTd);
            }
            for (var j = startOffset; j < 7 - endOffset; j++) {
                tr.appendChild(this.buildDayTd(thisWeekDate));
                thisWeekDate.setDate(thisWeekDate.getDate() + 1);
            }
            if (endOffset !== 0) {
                var spacerTd = this.createTd();
                spacerTd.setAttribute('colspan', "" + endOffset);
                tr.appendChild(spacerTd);
            }
            return tr;
        };
        VCalendarMonthController.prototype.buildDayTd = function (date) {
            var _this = this;
            var dayDate = new Date(date.getTime());
            var td = this.createTd();
            var tdInner = this.createTdInner();
            var dayTitle = this.createDayTitle();
            dayTitle.textContent = "" + dayDate.getDate();
            tdInner.appendChild(dayTitle);
            td.appendChild(tdInner);
            td.setAttribute('data-date', date.toDateString());
            tdInner.classList.add(VCalendarMonthController.CLASS_VCALENDAR_DAY);
            if (this.calendarController.model && dayDate.toDateString() === this.calendarController.model.toDateString()) {
                tdInner.classList.add(VCalendarMonthController.CLASS_VCALENDAR_DAY_SELECTED);
            }
            tdInner.addEventListener('click', function (event) {
                if (!tdInner.classList.contains(VCalendarMonthController.CLASS_VCALENDAR_DAY_DISABLED)) {
                    _this.calendarController.dayClickHandler(dayDate, event);
                    tdInner.classList.add(VCalendarMonthController.CLASS_VCALENDAR_DAY_SELECTED);
                }
            });
            return td;
        };
        VCalendarMonthController.prototype.createTable = function () {
            var el = document.createElement('table');
            el.classList.add(VCalendarMonthController.CLASS_VCALENDAR_TABLE);
            return el;
        };
        VCalendarMonthController.prototype.createTr = function () {
            var el = document.createElement('tr');
            el.classList.add(VCalendarMonthController.CLASS_VCALENDAR_TR);
            return el;
        };
        VCalendarMonthController.prototype.createTd = function () {
            var el = document.createElement('td');
            el.classList.add(VCalendarMonthController.CLASS_VCALENDAR_TD);
            return el;
        };
        VCalendarMonthController.prototype.createTdInner = function () {
            var el = document.createElement('div');
            el.classList.add(VCalendarMonthController.CLASS_VCALENDAR_TD_INNER);
            return el;
        };
        VCalendarMonthController.prototype.createDayTitle = function () {
            var el = document.createElement('div');
            el.classList.add(VCalendarMonthController.CLASS_VCALENDAR_DAY_TITLE);
            return el;
        };
        VCalendarMonthController.prototype.createCalendarMarker = function () {
            var el = document.createElement('span');
            el.classList.add(VCalendarMonthController.CLASS_VCALENDAR_MARKER);
            return el;
        };
        VCalendarMonthController.CLASS_VCALENDAR_TABLE = 'v-Calendar-Table';
        VCalendarMonthController.CLASS_VCALENDAR_TR = 'v-Calendar-Tr';
        VCalendarMonthController.CLASS_VCALENDAR_TD = 'v-Calendar-Td';
        VCalendarMonthController.CLASS_VCALENDAR_TD_INNER = 'v-Calendar-TdInner';
        VCalendarMonthController.CLASS_VCALENDAR_DAY = 'v-Calendar-Day';
        VCalendarMonthController.CLASS_VCALENDAR_DAY_DISABLED = 'v-Calendar-Day_Disabled';
        VCalendarMonthController.CLASS_VCALENDAR_DAY_SELECTED = 'v-Calendar-Day_Selected';
        VCalendarMonthController.CLASS_VCALENDAR_DAY_TITLE = 'v-Calendar-DayTitle';
        VCalendarMonthController.CLASS_VCALENDAR_MONTH_TITLE = 'v-Calendar-MonthTitle';
        VCalendarMonthController.CLASS_VCALENDAR_MARKER = 'v-Calendar-Marker';
        return VCalendarMonthController;
    }());
    NgHaloUiLibrary.VCalendarMonthController = VCalendarMonthController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-calendar
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard calendar.
     *
     * <br>
     * Design version: 1.1<br>
     *
     * @example
     <example module="vCalendarExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController">

         Component model: {{exampleController.model}}
         <br/>
         Min date: {{exampleController.minDate}}
         <br/>
         Max date: {{exampleController.maxDate}}
         <br/>
         <div>
            <h5>Markers:</h5>
            <ul class="example-markers-list">
                <li ng-repeat="(key, marker) in exampleController.markers">
                    {{key}} <span ng-click="exampleController.deleteMarker(key)">X</span>
                </li>
            </ul>
         </div>
         <div layout="row">
            <div flex>
                <h4>Min Date:</h4>
                <v-calendar model="exampleController.minDate"></v-calendar>
            </div>
            <div flex>
                <h4>Model:</h4>
                <v-calendar model="exampleController.model"
                    min-date="exampleController.minDate"
                    max-date="exampleController.maxDate"
                    markers="exampleController.markers"></v-calendar>
            </div>
            <div flex>
                <h4>Max Date:</h4>
                <v-calendar model="exampleController.maxDate"></v-calendar>
            </div>
         </div>
         <h3>Example with external years offset "2" (default is "20")</h3>
         <div>
            Model: {{offsetExampleModel}}
         </div>
         <div>
            Display date: {{offsetExampleDisplayDate}}
         </div>
         <div layout="row">
             <div flex>
                <v-calendar
                    model="offsetExampleModel"
                    display-date="offsetExampleDisplayDate"
                    years-offset="2"></v-calendar>
             </div>
         </div>

     </div>

     </file>
     <file name="script.js">

     angular.module('vCalendarExample', ['ngHaloUiLibrary']).controller('ExampleController', function (vDatePrecision) {
        this.model = new Date();
        this.markers = {};

        this.deleteMarker = function(key) {
            delete this.markers[key];
        };

        var markersDate = new Date(this.model.getTime()),
            markersAction = function(date) {
                alert("Maker with date  " + date.toDateString());
            };

        for (var i = 0; i < 5; i++) {
            var markerKeyDate = markersDate.toDateString();
            this.markers[markerKeyDate] = {};
            if (i%2) {
                this.markers[markerKeyDate].action = markersAction;
            }
            markersDate.setDate(markersDate.getDate() + i+5);
        }
     });

     </file>
     <file name="style.css">
        .example-markers-list {
            overflow: hidden;
            padding: 0;
            margin: 0;
            font-size: 12px;
        }
        .example-markers-list li {
            list-style: none;
            float: left;
            background-color: #f5f5f5;
            border-radius: 10px;
            padding: 5px;
            margin: 0 5px 5px 0;
        }
         .example-markers-list li span {
            padding: 3px 6px;
            border-radius: 50%;
            background-color: #f5f5f5;
            cursor: pointer;
            font-size: 8px;
            vertical-align: middle;
            margin-top: -4px;
            display: inline-block;
            color: #394a59;
         }
        .example-markers-list li span:hover{
            background-color: #cfd9de;
        }
     </file>
     </example>
     *
     **/
    var VCalendar = (function () {
        function VCalendar() {
            this.restrict = 'E';
            this.templateUrl = 'components/vCalendar/vCalendar.html';
            this.controller = NgHaloUiLibrary.VCalendarController;
            this.controllerAs = 'calendarVm';
            this.bindToController = true;
            this.scope = {
                model: '=?',
                minDate: '=?',
                maxDate: '=?',
                markers: '=?',
                displayDate: '=?',
                yearsOffset: '=?'
            };
        }
        VCalendar.factory = function () {
            return function () { return new VCalendar(); };
        };
        return VCalendar;
    }());
    NgHaloUiLibrary.VCalendar = VCalendar;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VCalendarController = (function () {
        function VCalendarController($scope, $element) {
            var _this = this;
            this.WEEKDAYS = [
                'ngHaloUiLibrary.vCalendarWeekDaySunday',
                'ngHaloUiLibrary.vCalendarWeekDayMonday',
                'ngHaloUiLibrary.vCalendarWeekDayTuesdays',
                'ngHaloUiLibrary.vCalendarWeekDayWednesday',
                'ngHaloUiLibrary.vCalendarWeekDayThursday',
                'ngHaloUiLibrary.vCalendarWeekDayFriday',
                'ngHaloUiLibrary.vCalendarWeekDaySaturday'
            ];
            this.months = [];
            this.today = new Date();
            this.$element = $element;
            this.$scope = $scope;
            this.displayDate = this.displayDate || new Date((this.model || this.today).getTime());
            this.weekDays = this.getWeekDays();
            this.renderStartDate = new Date(this.displayDate.getTime());
            this.renderStartDate.setFullYear(this.renderStartDate.getFullYear() -
                (this.yearsOffset || VCalendarController.SCROLL_YEARS_OFFSET));
            this.renderStartDate.setMonth(0);
            this.renderStartDate.setDate(1);
            this.renderEndDate = new Date(this.displayDate.getTime());
            this.renderEndDate.setFullYear(this.renderEndDate.getFullYear() +
                (this.yearsOffset || VCalendarController.SCROLL_YEARS_OFFSET));
            this.renderEndDate.setMonth(11);
            this.renderEndDate.setDate(31);
            this.populateMonths();
            this.startMonthIndex = this.getMonthDistance(this.displayDate);
            this.calendarScroller = $element[0].querySelector(VCalendarController.SCROLLER_SELECTOR);
            this.calendarScroller.addEventListener('scroll', function () { return _this.scrollHandler(); }, true);
            this.$scope.$watch(function () { return _this.model; }, function () {
                return _this.model ? _this.displayDate = new Date(_this.model.getTime()) : true;
            });
            this.$scope.$watch(function () { return _this.displayDate; }, function () {
                if (!_this.silentDisplayDateChange && _this.displayDate) {
                    _this.scrollToDate(_this.displayDate);
                }
                _this.silentDisplayDateChange = false;
            });
            this.$scope.$watch(function () { return _this.minDate; }, function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    _this.$scope.$broadcast('vCalendar:minDate', _this.minDate);
                    if (_this.displayDate < _this.minDate) {
                        _this.displayDate = new Date(_this.minDate.getTime());
                    }
                }
            });
            this.$scope.$watch(function () { return _this.maxDate; }, function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    _this.$scope.$broadcast('vCalendar:maxDate', _this.maxDate);
                    if (_this.displayDate > _this.maxDate) {
                        _this.displayDate = new Date(_this.maxDate.getTime());
                    }
                }
            });
            this.$scope.$watch(function () { return _this.markers; }, function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    _this.$scope.$broadcast('vCalendar:markers', _this.markers);
                }
            }, true);
        }
        VCalendarController.prototype.dayClickHandler = function (date, event) {
            var _this = this;
            this.$element.find("." + NgHaloUiLibrary.VCalendarMonthController.CLASS_VCALENDAR_DAY_SELECTED)
                .removeClass(NgHaloUiLibrary.VCalendarMonthController.CLASS_VCALENDAR_DAY_SELECTED);
            this.$scope.$apply(function () { return _this.model = date; });
        };
        VCalendarController.prototype.scrollHandler = function () {
            var _this = this;
            var scrollDirection = this.calendarScroller.scrollTop - this.getLastScrollTop() > 0 ? 'max' : 'min';
            var currentDate = new Date(this.displayDate.getTime());
            currentDate.setFullYear(this.renderStartDate.getFullYear());
            currentDate.setMonth(this.renderStartDate.getMonth() +
                Math.floor((this.calendarScroller.scrollTop + (VCalendarController.MONTH_ITEM_HEIGHT / 6))
                    / VCalendarController.MONTH_ITEM_HEIGHT));
            if (this.minDate && scrollDirection === 'min' &&
                (currentDate.getFullYear() < this.minDate.getFullYear() ||
                    (currentDate.getFullYear() === this.minDate.getFullYear() &&
                        currentDate.getMonth() <= this.minDate.getMonth()))) {
                currentDate = this.minDate;
                this.scrollToDate(this.minDate);
            }
            else if (this.maxDate && scrollDirection === 'max' &&
                (currentDate.getFullYear() > this.maxDate.getFullYear() ||
                    (currentDate.getFullYear() === this.maxDate.getFullYear() &&
                        currentDate.getMonth() >= this.maxDate.getMonth()))) {
                currentDate = this.maxDate;
                this.scrollToDate(this.maxDate);
            }
            /* istanbul ignore else  */
            if (currentDate.toString() !== this.displayDate.toString()) {
                this.$scope.$apply(function () {
                    _this.silentDisplayDateChange = true;
                    _this.displayDate = currentDate;
                });
            }
            this.lastScrollTop = this.calendarScroller.scrollTop;
        };
        VCalendarController.prototype.getLastScrollTop = function () {
            return this.lastScrollTop;
        };
        VCalendarController.prototype.getMonthDistance = function (date) {
            return (12 * (date.getFullYear() - this.renderStartDate.getFullYear())) +
                (date.getMonth() - this.renderStartDate.getMonth());
        };
        VCalendarController.prototype.scrollToDate = function (date) {
            this.calendarScroller.scrollTop = this.getMonthDistance(date) * VCalendarController.MONTH_ITEM_HEIGHT +
                VCalendarController.MONTH_TITLE_HEIGHT;
        };
        VCalendarController.prototype.populateMonths = function () {
            var populateDate = new Date(this.renderStartDate.getTime());
            var index = 0;
            populateDate.setDate(1);
            populateDate.setHours(0);
            populateDate.setMinutes(0);
            populateDate.setSeconds(0);
            populateDate.setMilliseconds(0);
            while (populateDate < this.renderEndDate) {
                this.months.push(new Date(populateDate.getTime()));
                populateDate.setMonth(populateDate.getMonth() + 1);
                index++;
            }
        };
        VCalendarController.prototype.getWeekDays = function () {
            var weekDays = [];
            for (var i = 0; i < 7; i++) {
                weekDays.push((i + VCalendarController.FIRST_DAY_OF_WEEK) % 7);
            }
            return weekDays;
        };
        VCalendarController.SCROLL_YEARS_OFFSET = 20;
        VCalendarController.FIRST_DAY_OF_WEEK = 0;
        VCalendarController.MONTH_ITEM_HEIGHT = 260;
        VCalendarController.MONTH_TITLE_HEIGHT = 20;
        VCalendarController.SCROLLER_SELECTOR = '.md-virtual-repeat-scroller';
        return VCalendarController;
    }());
    NgHaloUiLibrary.VCalendarController = VCalendarController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-card
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard card.
     *
     * <br>
     * Design version: 1.1<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-780">HALO-780</a><br>
     * <br>
     * Full demo you can see on the second example or go <a href="/examples/example-example5/index.html" target="_blank">here</a> to view in new tab.
     *
     * @example
     <example module="vCardExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController">

         <h3>Basic v-card with minimal mode and urgent set to true:</h3>
         <div>
             <v-card header-info="exampleController.headerInfo"
                 person="exampleController.person"
                 actions="exampleController.actions"
                 status="exampleController.status"
                 mode="'Minimal'"
                 urgent="true">
                <span ng-bind-html="exampleController.body"></span>
             </v-card>
         </div>
         <br/>

         <h3>Basic v-card with minimal mode and long body content:</h3>
         <div>
             <v-card header-info="exampleController.headerInfo"
                 person="exampleController.person"
                 actions="exampleController.actions"
                 status="exampleController.status"
                 mode="'Minimal'">
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec maximus dolor. In et pharetra erat. Duis luctus ipsum orci, sit amet laoreet lectus iaculis ut. Maecenas a quam elit. Sed lobortis nisl vitae pretium ullamcorper. In at fermentum nisl. Donec convallis risus vitae eros interdum venenatis. Maecenas id ipsum vel urna fermentum malesuada. Aenean ut quam eget arcu luctus blandit. Suspendisse id sapien id diam elementum accumsan sagittis commodo est. Pellentesque sagittis vitae urna et dictum.

                    </p><p>Praesent varius, ante non volutpat pharetra, massa erat accumsan lectus, vel convallis nunc nibh sed dolor. Ut maximus arcu quis dolor tempor vulputate. Vivamus nec augue sit amet ante interdum vehicula. Nullam elementum mauris et felis vulputate, sed ornare enim varius. Suspendisse congue eros sed ante rutrum semper in sed metus. Cras ac dui in odio feugiat sodales. Donec vulputate vulputate pellentesque. Ut viverra arcu vel nibh lobortis finibus. Sed non auctor enim. Suspendisse non quam posuere, cursus mauris nec, placerat purus. Nulla et ultricies tellus. Fusce mi est, accumsan at malesuada eget, accumsan eu mi.

                    </p><p>Vestibulum cursus dolor non viverra maximus. Cras euismod sem sed nunc cursus, vitae tempus tortor molestie. Duis tincidunt erat non placerat tempus. Nulla vitae diam magna. Phasellus vitae fermentum neque. Aliquam imperdiet dui sed aliquam malesuada. Sed ornare imperdiet ex, id gravida sapien dapibus sed.

                    </p><p>Fusce vehicula dui eu elit maximus tempor. Ut ultrices, purus elementum rutrum euismod, velit justo mollis nulla, bibendum ornare risus lacus eu ipsum. Aliquam in ultricies metus. Ut facilisis turpis a nisl dapibus, blandit tempus orci mattis. Cras quis tortor tristique, placerat nulla eget, feugiat massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed magna orci, feugiat in justo id, dignissim accumsan ipsum. Duis egestas sit amet arcu quis iaculis. Praesent ante augue, aliquam id mi at, consequat rhoncus metus. In consectetur accumsan euismod.

                    </p><p>Sed dignissim pretium nisl. Cras non volutpat neque, et ullamcorper lacus. Curabitur vitae purus vitae tellus congue sodales in eget massa. Aliquam erat volutpat. Nam quis ultricies arcu, congue dictum ipsum. In a iaculis ipsum, eget viverra tellus. In hac habitasse platea dictumst. Phasellus ullamcorper lacus vitae nibh ultricies, eget facilisis nisi sodales. Maecenas nec iaculis metus. Maecenas pellentesque ipsum erat, id varius metus ultrices in.</p>
                </div>
             </v-card>
         </div>
         <br/>

     <h3>Basic v-card with minimal mode and date:</h3>
     <div>
         <v-card header-info="exampleController.headerInfo"
             person="exampleController.person"
             actions="exampleController.actions"
             status="exampleController.status"
             date="exampleController.date"
             mode="'Minimal'"
             urgent="true">
             <span ng-bind-html="exampleController.body"></span>
         </v-card>
     </div>
     <br/>

         <h3>Pinned v-card with add person and personlicked function:</h3>
         <div>
             <v-card header-info="exampleController.headerInfo"
                 person="exampleController.personForSearchExample"
                 person-clicked="exampleController.personClicked()"
                 add-person="exampleController.addPerson"
                 actions="exampleController.actions"
                 mode="'Minimal'"
                 pinned="true">
                 <span ng-bind-html="exampleController.body"></span>
             </v-card>
         </div>
         <br/>

         <h3>Basic v-card without status:</h3>
         <div>
             <v-card header-info="exampleController.headerInfo"
             person="exampleController.person"
             actions="exampleController.actions">
             <span ng-bind-html="exampleController.body"></span>
             </v-card>
         </div>
         <br/>

         <h3>Basic v-card without status and long main action:</h3>
         <div>
         <v-card header-info="exampleController.headerInfo"
             person="exampleController.person"
             actions="exampleController.actionsWithLongMain">
             <span ng-bind-html="exampleController.body"></span>
         </v-card>
         </div>
         <br/>


         <h3>Basic v-card with date:</h3>
         <div>
             <v-card header-info="exampleController.headerInfo"
                 person="exampleController.person"
                 actions="exampleController.actions"
                 status="exampleController.status"
                 date="exampleController.date">
                 <span ng-bind-html="exampleController.body"></span>
             </v-card>
         </div>
         <br/>

         <h3>Basic v-card with yesterday date:</h3>
         <div>
             <v-card header-info="exampleController.headerInfo"
                 person="exampleController.person"
                 actions="exampleController.actions"
                 status="exampleController.status"
                 date="exampleController.dateYesterday">
                 <span ng-bind-html="exampleController.body"></span>
             </v-card>
         </div>
         <br/>

         <h3>Basic v-card with future date:</h3>
         <div>
             <v-card header-info="exampleController.headerInfo"
                 person="exampleController.person"
                 actions="exampleController.actions"
                 status="exampleController.status"
                 date="exampleController.dateFuture">
                 <span ng-bind-html="exampleController.body"></span>
             </v-card>
         </div>
         <br/>

        <h3>Basic v-card with dateString:</h3>
        <div>
             <v-card header-info="exampleController.headerInfo"
                 person="exampleController.person"
                 actions="exampleController.actions"
                 status="exampleController.status"
                 date="exampleController.dateString">
                <span ng-bind-html="exampleController.body"></span>
             </v-card>
        </div>
        <br/>

        <h3>Basic v-card with date and text:</h3>
        <div>
             <v-card header-info="exampleController.headerInfo"
                 person="exampleController.person"
                 actions="exampleController.actions"
                 status="exampleController.status"
                 date="exampleController.dateAndText">
                <span ng-bind-html="exampleController.body"></span>
             </v-card>
        </div>
        <br/>

        <h3>Basic v-card with horizontal expansion:</h3>
        <div>
            <v-card header-info="exampleController.headerInfo"
                person="exampleController.person"
                actions="exampleController.actions"
                status="exampleController.status"
                expand-horizontal="true">
                <span ng-bind-html="exampleController.body"></span>
            </v-card>
        </div>
        <br/>

        <h3>Appointment v-card with minimal mode:</h3>
        <div>
             <v-card
                 person="exampleController.person"
                 actions="exampleController.actions"
                 status="exampleController.status"
                 appointment="exampleController.appointment"
                 mode="'Minimal'">
                <span ng-bind-html="exampleController.body"></span>
             </v-card>
        </div>
        <br/>

         <h3>Appointment v-card with minimal mode and date:</h3>
         <div>
             <v-card
             person="exampleController.person"
             actions="exampleController.actions"
             status="exampleController.status"
             appointment="exampleController.appointment"
             date="exampleController.dateString"
             mode="'Minimal'">
             <span ng-bind-html="exampleController.body"></span>
             </v-card>
         </div>
         <br/>

        <h3>Appointment v-card:</h3>
        <div>
             <v-card
                 person="exampleController.person"
                 actions="exampleController.actions"
                 status="exampleController.status"
                 appointment="exampleController.appointment">
                <span ng-bind-html="exampleController.body"></span>
             </v-card>
        </div>
        <br/>

         <h3>Appointment v-card with date:</h3>
         <div>
             <v-card
                 person="exampleController.person"
                 actions="exampleController.actions"
                 status="exampleController.status"
                 appointment="exampleController.appointment"
                 date="exampleController.date">
                 <span ng-bind-html="exampleController.body"></span>
             </v-card>
         </div>
         <br/>

        <h3>Appointment v-card with horizontal expansion:</h3>
        <div>
             <v-card
                 person="exampleController.person"
                 actions="exampleController.actions"
                 status="exampleController.status"
                 appointment="exampleController.appointment"
                 expand-horizontal="true">
                <span ng-bind-html="exampleController.body"></span>
             </v-card>
        </div>



     </div>
     </file>
     <file name="script.js">
     angular.module('vCardExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($scope, $filter, $timeout) {

        var that = this;
        var autocompleteData = [
            {givenName: 'Hariette', familyName: 'Blank', photo: ''},
            {givenName: 'Hazel', familyName: 'Tailor', photo: ''}
        ];

        this.date = {
            value: new Date(),
            format: 'MMM dd'
        }

        this.dateAndText = {
            value: new Date(),
            format: 'MMM dd',
            text: 'Pending text'
        }

        var dateYesterday = new Date();
        dateYesterday.setDate(dateYesterday.getDate() - 1);

        this.dateYesterday = {
            value: dateYesterday,
            format: 'MMM dd'
        }

        var dateFuture = new Date();
        dateFuture.setDate(dateFuture.getDate() + 5);

        this.dateFuture = {
            value: dateFuture,
            format: 'MMM dd'
        }

        this.dateString = {
            text: 'Pending string'
        }

        this.headerInfo = {
            icon: 'medications',
            title: 'CBS title',
            description: '3 values out long description',
            date: new Date(),
            dateFormat: 'MMM dd',
            dateString: 'Pending string'
        };

        this.person = {givenName: 'Long Patient', familyName: 'Name', photo: ''};
        this.personClicked = function() {
            alert(this.personForSearchExample.givenName + ' clicked');
        };
        this.personForSearchExample = undefined;
        this.addPerson = {
            searchMethod: function(input) {
                var result =  ($filter('filter')(autocompleteData, function(item) {
                    var lowerInput = input.toLowerCase();
                    return item.givenName.toLowerCase().indexOf(lowerInput) !== -1 ||
                        item.familyName.toLowerCase().indexOf(lowerInput) !== -1;
                }));
                return result;
            },
            selectMethod: function(patient) {
                if (patient) {
                    $timeout(function() {
                        that.personForSearchExample = patient;
                    });
                }
            }
        }
        this.body = '<h1>Some Header</h1> <p>Secondary attributes go int this area including patient photo if it doesn’t fit next to the action button.</p>';
        this.actions = [
            {text: 'Action 1', action: function() { alert('Action 1'); }, main: true },
            {text: 'Action 2', action: function() { alert('Action 2'); } }
        ];
        this.actionsWithLongMain = [
            {text: 'Long Action 1', action: function() { alert('Long Action 1'); }, main: true },
            {text: 'Action 2', action: function() { alert('Action 2'); } }
        ];
        this.status = 'status';
        this.appointment = {startTime: new Date(), duration: 1000*60*60, room: 'Room 555 From another', purpose: 'Purpose 37 formanother'};
     });
     </file>
     </example>
     *
     * @example
     <example module="vCardExampleDemo" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController" class="demo-v-card" layout="column" layout-fill>

         <div layout="row" layout-align="center center" class="demo-v-card-header">
            <h2>V-Card Demo</h2>
            <div class="demo-v-card-actions">
                <v-button ng-click="exampleController.reset()">Reset</v-button>
                <v-button ng-click="exampleController.expandAll()">Expand All</v-button>
                <v-button ng-click="exampleController.collapseAll()">Collapse All</v-button>
            </div>
         </div>
         <div flex class="demo-v-card-scroll">
            <div layout="row" class="demo-v-card-layout">
                 <div class="demo-v-card-column"  dnd-list="exampleController.lists.list1" dnd-drop="exampleController.dragDrop(index, item, 'list1')">
                     <v-card ng-repeat='i in exampleController.lists.list1'
                         header-info="i.headerInfo"
                         person="i.person"
                         actions="i.actions"
                         status="i.status"
                         expand-horizontal="i.expandHorizontal"
                         mode="i.mode"
                         appointment="i.appointment"

                         dnd-draggable="{index: $index, list: 'list1'}"
                         dnd-effect-allowed="move">
                        <span ng-bind-html="i.body"></span>
                     </v-card>
                 </div>
                 <div class="demo-v-card-column" dnd-list="exampleController.lists.list2" dnd-drop="exampleController.dragDrop(index, item, 'list2')">
                     <v-card ng-repeat='i in exampleController.lists.list2'
                         header-info="i.headerInfo"
                         person="i.person"
                         actions="i.actions"
                         status="i.status"
                         expand-horizontal="i.expandHorizontal"
                         mode="i.mode"
                         appointment="i.appointment"

                         dnd-draggable="{index: $index, list: 'list2'}"
                         dnd-effect-allowed="move">
                         <span ng-bind-html="i.body"></span>
                     </v-card>
                 </div>
                 <div class="demo-v-card-column" dnd-list="exampleController.lists.list3" dnd-drop="exampleController.dragDrop(index, item, 'list3')">
                     <v-card ng-repeat='i in exampleController.lists.list3'
                         header-info="i.headerInfo"
                         person="i.person"
                         actions="i.actions"
                         status="i.status"
                         expand-horizontal="i.expandHorizontal"
                         mode="i.mode"
                         appointment="i.appointment"

                         dnd-draggable="{index: $index, list: 'list3'}"
                         dnd-effect-allowed="move">
                        <span ng-bind-html="i.body"></span>
                     </v-card>
                 </div>
                 <div flex="100"></div>
                 <div flex="100"></div>
                 <div flex="100"></div>
            </div>

         </div>


     </div>
     </file>
     <file name="style.css">
        .demo-v-card {
            background-color: #F5F5F5;
        }
        .demo-v-card-header {
            position: relative;
            background-color: #fff;
        }
        .demo-v-card-actions {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            padding: 25px;
        }
        .demo-v-card-scroll {
            overflow: auto;
        }
        .demo-v-card-layout {
            min-height: 100%;
        }
        .demo-v-card-column {
            padding: 10px;
        }
        .demo-v-card-column:nth-child(2n) {
            background-color: #EDEDED;
        }
        .demo-v-card-column:first-child {
            border-left: 0 none;
        }
        .demo-v-card-column[dnd-list],
        .demo-v-card-column[dnd-list] > v-card {
            position: relative;
        }
        .demo-v-card-column[dnd-list] > v-card.ng-leave {
            display: none;
        }
        .demo-v-card-column[dnd-list] .dndDraggingSource {
            display: none;
        }
        .demo-v-card-column[dnd-list] .dndPlaceholder {
            display: block;
            background-color: #fbfbfb;
            margin: 10px 15px;
            min-height: 42px;
        }
        .demo-v-card-column[dnd-list] .dndDragging {
            opacity: 0.8;
        }
     </file>
     <file name="script.js">
     angular.module('vCardExampleDemo', ['ngHaloUiLibrary', 'dndLists']).controller('ExampleController', function ($scope) {
        this.expandAll = function() {
             $scope.$broadcast('VCard:expand');
        };
        this.collapseAll = function() {
             $scope.$broadcast('VCard:collapse');
        };

        this.dragDrop = function (dropIndex, dropData, listName) {
            var movedItem = this.lists[dropData.list][dropData.index],
                fromList = this.lists[dropData.list];
            fromList.splice(dropData.index, 1); // Remove dragged item
            this.lists[listName].splice(dropIndex, 0, movedItem);
            return true;
        };

        var animationProcessing = false,
            scrollParent = jQuery('.demo-v-card-scroll');
        $scope.$on('VCard:toggle', function(e, el, toggle) {
            if (!animationProcessing && toggle === true) {
                animationProcessing = true;
                var animationEl = el.find('.v-Card-Wrapper .v-Card-Body')[0],
                    scrollToElement = function() {
                        var elOffset = el.offset(),
                            parentOffset = scrollParent.offset(),
                            parentHeight = scrollParent.height(),
                            parentWidth = scrollParent.width(),
                            parentScrollTop = scrollParent.scrollTop(),
                            parentScrollLeft = scrollParent.scrollLeft(),
                            leftCornerPositionY = elOffset.top - parentOffset.top,
                            leftCornerPositionX = elOffset.left - parentOffset.left,
                            rightCornerPositionY = leftCornerPositionY + el.height(),
                            rightCornerPositionX = leftCornerPositionX + el.width(),
                            gap = 20,
                            animateOptions = {
                                scrollTop: parentScrollTop,
                                scrollLeft: parentScrollLeft
                            },
                            isAnimationNeeded = false;

                        if (rightCornerPositionY > parentHeight) {
                            animateOptions.scrollTop += rightCornerPositionY - parentHeight + gap;
                            isAnimationNeeded = true;
                        }
                        if (rightCornerPositionX > parentWidth) {
                            animateOptions.scrollLeft += rightCornerPositionX - parentWidth + gap;
                            isAnimationNeeded = true;
                        }
                        if (leftCornerPositionY < 0) {
                            animateOptions.scrollTop += leftCornerPositionY - gap;
                            isAnimationNeeded = true;
                        }
                        if (leftCornerPositionX < 0) {
                            animateOptions.scrollLeft += leftCornerPositionX - gap;
                            isAnimationNeeded = true;
                        }

                        if (isAnimationNeeded) {
                          console.log(isAnimationNeeded);
                          scrollParent.animate(animateOptions);
                        }

                    },
                    animationEnd = function () {
                        scrollToElement();
                        animationEl.removeEventListener("transitionend", animationEnd, false);
                        animationProcessing = false;
                    };

                animationEl.addEventListener("transitionend", animationEnd, false);
            }
        });

        this.reset = function () {
            this.lists = {"list1": [], "list2": [], "list3": []};

            for (var i=0; i < 5; i++) {
                this.lists.list1.push({
                    headerInfo: {icon: 'medications', title: 'CBS ' + i, description: '3 values out of range'},
                    person: {givenName: 'Long Patient', familyName: 'Name', photo: ''},
                    body: '<h2>CARD In Minimal Mode ' + i + '</h2><p>Card body ' + i + '</p>',
                    actions: [
                        {text: 'Action 1', action: function() { alert('Action 1'); }, main: true},
                        {text: 'Action 2', action: function() { alert('Action 2'); } }
                    ],
                    status: 'Status ' + i ,
                    mode: 'Minimal',
                    expandHorizontal: true
                });
            };

            for (var i=0; i < 6; i++) {
                this.lists.list2.push({
                    headerInfo: {icon: 'medications', title: 'CBS ' + i, description: '3 values out of range'},
                    person: {givenName: 'Long Patient', familyName: 'Name', photo: ''},
                    body: '<h2>Simple CARD ' + i + '</h2><p>Card body ' + i + '</p>',
                    actions: [
                        {text: 'Action 1', action: function() { alert('Action 1'); }, main: true },
                        {text: 'Action 2', action: function() { alert('Action 2'); } }
                    ],
                    status: 'Status ' + i
                });
            };

            for (var i=0; i < 7; i++) {
                this.lists.list3.push({
                    person: {givenName: 'Long Patient', familyName: 'Name', photo: ''},
                    body: '<h2>Appointment CARD ' + i + '</h2><p>Card body ' + i + '</p>',
                    actions: [
                        {text: 'Action 1', action: function() { alert('Action 1'); }, main: true },
                        {text: 'Action 2', action: function() { alert('Action 2'); } }
                    ],
                    status: 'Status ' + i,
                    appointment: {startTime: new Date(), duration: 1000*60*60, room: 'Room ' + i, purpose: 'Purpose ' + i},
                    expandHorizontal: true
                });
            };
        };

        this.reset();

     });
     </file>
     </example>
     *
     **/
    var VCard = (function () {
        function VCard() {
            this.restrict = 'E';
            this.templateUrl = 'components/vCard/vCard.html';
            this.controller = NgHaloUiLibrary.VCardController;
            this.controllerAs = 'cardVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                headerInfo: '=?',
                actions: '=?',
                person: '=?',
                personClicked: '&?',
                addPerson: '=?',
                status: '=?',
                appointment: '=?',
                expandHorizontal: '=?',
                mode: '=?',
                urgent: '=?',
                pinned: '=?',
                date: '=?'
            };
        }
        VCard.factory = function () {
            return function () { return new VCard(); };
        };
        return VCard;
    }());
    NgHaloUiLibrary.VCard = VCard;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VCardController = (function () {
        function VCardController($scope, $element, uiDefaults) {
            var _this = this;
            this.DEFAULT_PATIENT_PHOTO = '/resources/images/Avatar_Unknown_64x64.png';
            this.DEFAULT_DATE_FORMAT = uiDefaults.dateFormat;
            $scope.$watch(function () { return _this.toggleExpansion; }, function () {
                $scope.$emit(VCardController.EVENT_PREFIX + 'toggle', $element, _this.toggleExpansion);
            });
            $scope.$on(VCardController.EVENT_PREFIX + 'expand', function () { return _this.toggleExpansion = true; });
            $scope.$on(VCardController.EVENT_PREFIX + 'collapse', function () { return _this.toggleExpansion = false; });
            $scope.$on('$mdMenuOpen', function () { return _this.isMenuOpened = true; });
            $scope.$on('$mdMenuClose', function () { return _this.isMenuOpened = false; });
        }
        VCardController.prototype.getMinutesFromMs = function (ms) {
            return Math.round(ms / 1000 / 60);
        };
        VCardController.prototype.getTodayYesterday = function (date) {
            var dateToCompare = new Date();
            dateToCompare.setHours(0);
            dateToCompare.setMinutes(0);
            dateToCompare.setMilliseconds(0);
            if (dateToCompare.toDateString() === date.toDateString()) {
                return VCardController.TODAY;
            }
            dateToCompare.setDate(dateToCompare.getDate() - 1);
            if (dateToCompare.toDateString() === date.toDateString()) {
                return VCardController.YESTERDAY;
            }
            return false;
        };
        VCardController.prototype.doPersonClicked = function ($event) {
            this.personClicked();
            $event.stopPropagation();
        };
        VCardController.EVENT_PREFIX = 'VCard:';
        VCardController.TODAY = 'ngHaloUiLibrary.vCardDateToday';
        VCardController.YESTERDAY = 'ngHaloUiLibrary.vCardDateYesterday';
        return VCardController;
    }());
    NgHaloUiLibrary.VCardController = VCardController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-checkbox
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard checkbox.
     * Extended from angular-material <a href="https://material.angularjs.org/latest/demo/checkbox">md-checkbox</a>.<br>
     *
     * <br>
     * Design version: 1.1 ( UI-Controls-Checkbox-Radio-Button-1.1.ai )<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-674">HALO-674</a> <br>
     *
     * @example
     <example module="vCheckboxExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController">

     Model: {{exampleController.model}}
     <br>

     <h5>Default checkboxes</h5>

     <v-checkbox model="exampleController.model">Default</v-checkbox><br>
     <v-checkbox ng-disabled="true">Disabled</v-checkbox><br>
     <v-checkbox ng-disabled="true" model="true">Disabled, checked</v-checkbox>

     <h5>Header checkboxes</h5>

     <v-checkbox model="exampleController.model" class="v-Checkbox_Header">Header checkbox</v-checkbox><br>
     <v-checkbox ng-disabled="true" class="v-Checkbox_Header">Header disabled</v-checkbox><br>
     <v-checkbox ng-disabled="true" model="true" class="v-Checkbox_Header">Header disabled, checked</v-checkbox><br>

     <br>
     <h5>Change event:</h5>
     <v-checkbox model="exampleController.model" change="exampleController.change()">Default</v-checkbox><br>

     </file>
     <file name="script.js">
     angular.module('vCheckboxExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($timeout) {
        this.model = null;
        this.change = function() {
            var that = this;

            $timeout(function() {
                alert(that.model);
            });

        };
     });
     </file>
     </example>
     *
     **/
    var VCheckbox = (function () {
        function VCheckbox() {
            this.restrict = 'E';
            this.templateUrl = 'components/vCheckbox/vCheckbox.html';
            this.controller = NgHaloUiLibrary.VCheckboxController;
            this.controllerAs = 'checkboxVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                model: '=?',
                ngDisabled: '=?',
                change: '&?'
            };
        }
        VCheckbox.factory = function () {
            return function () { return new VCheckbox(); };
        };
        return VCheckbox;
    }());
    NgHaloUiLibrary.VCheckbox = VCheckbox;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VCheckboxController = (function () {
        function VCheckboxController() {
        }
        return VCheckboxController;
    }());
    NgHaloUiLibrary.VCheckboxController = VCheckboxController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-chips
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Chips.
     * Extended from angular-material <a href="https://material.angularjs.org/latest/demo/chips">md-chips</a>.<br>
     *
     * <br>
     * Design version: 1.1 <br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-675">HALO-675</a> <br>
     *
     * @example
     <example module="vChipsExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController">
        <v-chips model="exampleController.model"
                 search-method="exampleController.search"
                 require-match="exampleController.requireMatch"
                 no-cache="exampleController.noCache"
                 placeholder="Chips placeholder"
                 mode="exampleController.mode"
                 label="Chips label"
                 on-add="exampleController.onAdd()"
                 on-remove="exampleController.onRemove()"
                 max="2"
     ></v-chips>
        <br/>
        <div>
             <v-button ng-click="exampleController.toggleMode()">Toggle mode</v-button>
             <v-checkbox model="exampleController.requireMatch">Require match</v-checkbox>
        </div>

     </div>

     </file>
     <file name="script.js">
     angular.module('vChipsExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($filter, $scope) {
        var self = this,
            autocompleteData = ['Suggestion 1', 'Suggestion 2', 'Text 1', 'Text 2'];

        this.model = [];
        this.requireMatch = false;
        this.noCahce = true;

        this.toggleMode = function () {
            this.mode = this.mode ? undefined : 'Tags';
        };

        this.search = function (input) {
            return $filter('filter')(autocompleteData, input).filter(function(i){return self.model.indexOf(i) === -1;});
        };

        this.onAdd = function(){
            console.log('Item Added');
        }

        this.onRemove = function(){
            console.log('Item removed');
        }
     });
     </file>
     </example>
     *
     **/
    var VChips = (function () {
        function VChips() {
            this.restrict = 'E';
            this.templateUrl = 'components/vChips/vChips.html';
            this.controller = NgHaloUiLibrary.VChipsController;
            this.controllerAs = 'chipsVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                model: '=?',
                requireMatch: '=?',
                placeholder: '@?',
                searchMethod: '=?',
                noCache: '=?',
                mode: '=?',
                label: '@?',
                max: '@?',
                onAdd: '&?',
                onRemove: '&?'
            };
        }
        VChips.factory = function () {
            return function () { return new VChips(); };
        };
        return VChips;
    }());
    NgHaloUiLibrary.VChips = VChips;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VChipsController = (function () {
        function VChipsController() {
        }
        return VChipsController;
    }());
    NgHaloUiLibrary.VChipsController = VChipsController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-datepick-precision
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Datepicker with precision.
     *
     * <br>
     * Design version: 1.2 ( UI-Controls-Datepicker-Precision-1.2.ai )<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-702">HALO-702</a> <br>
     *
     * @example
     <example module="vDatepickPrecisionExample" deps="" animate="false">
     <file name="index.html">


     <div ng-controller="ExampleController as exampleController">
     Components model: {{exampleController.datepickPrecisionModel | json}}<br /><br />
     <div layout="row">
        <v-input  label="Date" type="text" model="exampleController.datepickPrecisionModel.date" ></v-input>
        <div flex="10"></div>
        <v-input label="PrecisionId" type="number"  min="1002000" max="1002004" model="exampleController.datepickPrecisionModel.datePrecisionId"></v-input>
        <v-button ng-click="exampleController.entryNewDateModel()">New date</v-button>
     </div>

     <h5>Default</h5>
     <div layout="row" layout-align="space-between">
        <v-datepick-precision model="exampleController.datepickPrecisionModel"></v-datepick-precision>
        <v-datepick-precision model="exampleController.datepickPrecisionModel2" right-position="true"></v-datepick-precision>
     </div>

     <h5>Disabled</h5>
     <v-datepick-precision model="exampleController.datepickPrecisionModelNull" ng-disabled="exampleController.disable"></v-datepick-precision><br>
     <v-button ng-click="exampleController.disable = !exampleController.disable;">Toggle disable</v-button>


     <h5>Without default model</h5>
     Components model: {{exampleController.datepickPrecisionModelEmpty | json}}<br><br>
     <v-datepick-precision model="exampleController.datepickPrecisionModelEmpty" label="{{exampleController.datepickPrecisionLabel}}"></v-datepick-precision><br>

     <h5>Without unknown</h5>

     <v-datepick-precision model="exampleController.datepickPrecisionModel3" allow-unknown="false"></v-datepick-precision><br>


     <h5>With min ({{exampleController.datepickPrecisionMinDate | amDateFormat: 'YYYY-MM-DD'}}) and max date ({{exampleController.datepickPrecisionMaxDate | amDateFormat: 'YYYY-MM-DD'}})</h5>

     <v-datepick-precision model="exampleController.datepickPrecisionModel4" min-date="exampleController.datepickPrecisionMinDate" max-date="exampleController.datepickPrecisionMaxDate" allow-unknown="false"></v-datepick-precision><br>


     <h5>With min ({{exampleController.datepickPrecisionMinDate | amDateFormat: 'YYYY-MM-DD'}}) and number of years shown ({{exampleController.datepickPrecisionNumberOfYearsShown}})</h5>

     <v-datepick-precision model="exampleController.datepickPrecisionModel5" min-date="exampleController.datepickPrecisionMinDate" number-of-years-shown="exampleController.datepickPrecisionNumberOfYearsShown"></v-datepick-precision><br>


     <h5>With format-month, format-year and format-unknown with onChange event</h5>

     <v-datepick-precision
        change="exampleController.changeAction"
        model="exampleController.datepickPrecisionModel5"
        format="DD/MM/YY"
        format-month="MM/YY"
        format-year="YY"
        format-unknown="[I don't know]"></v-datepick-precision><br>

     </div>

     </file>
     <file name="script.js">

     angular.module('vDatepickPrecisionExample', ['ngHaloUiLibrary', 'angularMoment']).controller('ExampleController', function (vDatePrecision) {
        this.datepickPrecisionLabel = 'Custom label';
        this.datepickPrecisionModelEmpty = {
            date: '',
            datePrecisionId: vDatePrecision.DAY
        };
        this.datepickPrecisionModelNull = {
            date: null,
            datePrecisionId: vDatePrecision.DAY
        };
        this.changePresicion = function(datePrecisionId){
            var result;
            switch (datePrecisionId) {
                case vDatePrecision.YEAR:
                    result=vDatePrecision.MONTH
                    break;
                case vDatePrecision.MONTH:
                    result=vDatePrecision.DAY
                    break;
                case vDatePrecision.DAY:
                    result=vDatePrecision.UNKNOWN
                    break;
                case vDatePrecision.UNKNOWN:
                    result=vDatePrecision.EMPTY
                    break;
                case vDatePrecision.EMPTY:
                    result=vDatePrecision.YEAR
                    break;
            }
            return result;
        }

        this.entryNewDateModel = function(){
            this.datepickPrecisionModel = {
                date:  new Date(new Date(1945, 0, 1).getTime() + Math.random() * (new Date(2020, 0, 1).getTime() - new Date(1945, 0, 1).getTime())),
                datePrecisionId: this.changePresicion(this.datepickPrecisionModel.datePrecisionId)
            };
        };
        this.datepickPrecisionModel = {
            date: new Date('2016-01-19'),
            datePrecisionId: vDatePrecision.DAY
        };

        this.datepickPrecisionModel2 = {
            date: new Date('2016-01-20'),
            datePrecisionId: vDatePrecision.DAY
        };

        this.datepickPrecisionModel3 = {
            date: new Date('2016-01-21'),
            datePrecisionId: vDatePrecision.DAY
        };

        this.datepickPrecisionModel4 = {
            date: new Date('2016-01-22'),
            datePrecisionId: vDatePrecision.DAY
        };

        this.datepickPrecisionModel5 = {
            date: new Date('2016-01-23'),
            datePrecisionId: vDatePrecision.DAY
        };

        this.datepickPrecisionMinDate = moment('1945-10-04').toDate();
        this.datepickPrecisionMaxDate = moment('2016-12-13').toDate();
        this.datepickPrecisionNumberOfYearsShown = 4;
        this.disable = true;

        this.changeAction = function(){
            alert('Change action');
        };
     });

     </file>
     </example>
     *
     **/
    var VDatepickPrecision = (function () {
        function VDatepickPrecision() {
            this.restrict = 'E';
            this.templateUrl = 'components/vDatepickPrecision/vDatepickPrecision.html';
            this.controller = NgHaloUiLibrary.VDatepickPrecisionController;
            this.controllerAs = 'datepickPrecisionVm';
            this.bindToController = true;
            this.scope = {
                model: '=',
                label: '@?',
                format: '@?',
                formatMonth: '@?',
                formatYear: '@?',
                formatUnknown: '@?',
                allowUnknown: '=?',
                numberOfYearsShown: '=?',
                minDate: '=?',
                maxDate: '=?',
                ngDisabled: '=?',
                change: '&?',
                rightPosition: '=?'
            };
        }
        VDatepickPrecision.factory = function () {
            return function () { return new VDatepickPrecision(); };
        };
        return VDatepickPrecision;
    }());
    NgHaloUiLibrary.VDatepickPrecision = VDatepickPrecision;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

///<reference path="../../models/precisionDate.ts"/>
///<reference path="../../helpers/domUtils.ts"/>
///<reference path="../../helpers/helperFunctions.ts"/>
var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VDatepickPrecisionController = (function () {
        function VDatepickPrecisionController($scope, $element, $window, $timeout, locale) {
            var _this = this;
            this.$scope = $scope;
            this.$element = $element;
            this.$window = $window;
            this.$timeout = $timeout;
            this.locale = locale;
            this.isHolderOpened = false;
            this.moment = moment;
            this.searchYear = function (query) {
                return _this.searchText(query, _this.autocompleteYears);
            };
            this.searchMonth = function (query) {
                return _this.searchText(query, _this.getAutocompleteMonths());
            };
            this.searchDay = function (query) {
                var selectedYear = +_this.selectedYear || _this.moment().year();
                var selectedMonth = _this.selectedMonth ?
                    _this.moment().month(_this.selectedMonth).month() :
                    _this.moment().month();
                var daysInMonth = _this.moment()
                    .year(selectedYear)
                    .month(selectedMonth)
                    .daysInMonth();
                var days = [];
                var firstDayForHuman = 1;
                for (var day = firstDayForHuman; day <= daysInMonth; day++) {
                    days.push('' + day);
                }
                return _this.searchText(query, days);
            };
            this.selectedDataChange = function (year, month, day) {
                _this.updateNewDate();
                if (!!year && !!month && !!day) {
                    _this.newDateMoment = _this.moment(new Date());
                    _this.setNewDateMoment(_this.newDateMoment.year(parseInt(year, 10)));
                    _this.setNewDateMoment(_this.newDateMoment.month(month));
                    _this.setNewDateMoment(_this.newDateMoment.date(parseInt(day, 10)));
                    _this.changePrecision(NgHaloUiLibrary.PrecisionDate.DAY);
                }
                else if (!!year && !!month && !day) {
                    _this.newDateMoment = _this.moment(new Date());
                    _this.setNewDateMoment(_this.newDateMoment.year(parseInt(year, 10)));
                    _this.setNewDateMoment(_this.newDateMoment.month(month));
                    _this.changePrecision(NgHaloUiLibrary.PrecisionDate.MONTH);
                }
                else if ((!!year && !month && !!day) || (!!year && !month && !day)) {
                    _this.newDateMoment = _this.moment(new Date());
                    _this.setNewDateMoment(_this.newDateMoment.year(parseInt(year, 10)));
                    _this.changePrecision(NgHaloUiLibrary.PrecisionDate.YEAR);
                }
                else if (NgHaloUiLibrary.isUndefinedOrNull(year)) {
                    _this.model.date = null;
                    _this.changePrecision(NgHaloUiLibrary.PrecisionDate.UNKNOWN, _this.newDateMoment);
                }
                else if (year === '' && month === '' && day === '') {
                    _this.newDateMoment = '';
                    _this.changePrecision(NgHaloUiLibrary.PrecisionDate.EMPTY, _this.newDateMoment);
                }
            };
            this.setLabels();
            this.setDefaultsForUnspecifiedParameters();
            this.precisionAllowedForYear = [
                NgHaloUiLibrary.PrecisionDate.YEAR,
                NgHaloUiLibrary.PrecisionDate.MONTH,
                NgHaloUiLibrary.PrecisionDate.DAY
            ];
            this.precisionAllowedForMonth = [
                NgHaloUiLibrary.PrecisionDate.MONTH,
                NgHaloUiLibrary.PrecisionDate.DAY
            ];
            this.precisionAllowedForDay = [
                NgHaloUiLibrary.PrecisionDate.DAY
            ];
            if (NgHaloUiLibrary.isUndefinedOrNull(this.model.date) || !this.model.datePrecisionId) {
                this.defaultWithoutModel();
            }
            if (this.model.date === '') {
                this.defaultWithEmptyModel();
            }
            this.autocompleteYears = this.getAutocompleteYears();
            // Init date & precision & autocomplete
            // this.updateNewDate();
            this.updateNewPrecision();
            // Sync with parent scope
            this.$scope.$watch(function () { return _this.model.date; }, function (newValue, oldValue) {
                if (_this.change && _this.moment(newValue).format('DD-MM-YYYY') !== _this.moment(oldValue).format('DD-MM-YYYY')) {
                    _this.change();
                }
                if (_this.model.date === '') {
                    _this.newDateMoment = '';
                    _this.model.datePrecisionId = NgHaloUiLibrary.PrecisionDate.EMPTY;
                }
                else if (_this.model.date === null) {
                    _this.model.datePrecisionId = NgHaloUiLibrary.PrecisionDate.UNKNOWN;
                }
                else {
                    _this.setNewDateMoment(_this.moment(_this.model.date));
                }
            });
            this.$scope.$watch(function () { return _this.model.datePrecisionId; }, function () {
                _this.updateNewPrecision();
                if (_this.model.datePrecisionId === NgHaloUiLibrary.PrecisionDate.EMPTY) {
                    _this.model.date = '';
                    _this.newDateMoment = '';
                }
                else if (_this.model.datePrecisionId === NgHaloUiLibrary.PrecisionDate.UNKNOWN) {
                    _this.model.date = null;
                }
                else {
                    _this.setNewDateMoment(_this.moment(_this.model.date));
                }
            });
            angular.element(this.$window.document.documentElement).on('click' + VDatepickPrecisionController.EL_EVENT_SUFFIX, function (e) { return _this.onClickDocument(e); });
            // Autosave and close if blur
            if (!this.allowUnknown) {
                this.$scope.$watch(function () { return _this.isHolderOpened; }, function () {
                    if (_this.isHolderOpened) {
                        $(_this.$element.find('.v-Autocomplete-Day input')).on('blur', function () {
                            _this.$timeout(function () {
                                this.selectedDataChange(this.searchYearText, this.searchMonthText, this.searchDayText);
                                this.saveDateAndPrecision(this.newDateMoment, this.newPrecision);
                                this.close();
                            }, 300);
                        });
                    }
                });
            }
        }
        VDatepickPrecisionController.prototype.open = function () {
            var _this = this;
            this.isHolderOpened = true;
            this.updateSelected();
            this.$timeout(function () {
                $(_this.$element.children()).find('.v-Autocomplete-Autocomplete').first().find('input').focus();
            });
            this.$scope.$emit(VDatepickPrecisionController.EVENT_PREFIX + 'opened');
        };
        VDatepickPrecisionController.prototype.close = function () {
            this.isHolderOpened = false;
            this.$scope.$emit(VDatepickPrecisionController.EVENT_PREFIX + 'closed');
        };
        VDatepickPrecisionController.prototype.openClose = function () {
            if (this.isHolderOpened) {
                this.close();
            }
            else {
                if (!this.ngDisabled) {
                    this.open();
                }
            }
        };
        VDatepickPrecisionController.prototype.searchText = function (query, options) {
            return options.filter(function (option) {
                if (!query || !query.length) {
                    return true;
                }
                return (('' + option).toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) === 0);
            });
        };
        VDatepickPrecisionController.prototype.defaultWithEmptyModel = function () {
            this.newPrecision = NgHaloUiLibrary.PrecisionDate.EMPTY;
            this.newDateMoment = '';
            this.saveDateAndPrecision(this.newDateMoment, this.newPrecision);
        };
        VDatepickPrecisionController.prototype.defaultWithoutModel = function () {
            this.newPrecision = NgHaloUiLibrary.PrecisionDate.UNKNOWN;
            this.setNewDateMoment(this.moment(this.model.date));
            this.saveDateAndPrecision(this.newDateMoment, this.newPrecision);
        };
        VDatepickPrecisionController.prototype.unknown = function () {
            this.newPrecision = NgHaloUiLibrary.PrecisionDate.UNKNOWN;
            this.newDateMoment = this.moment(new Date());
            this.selectedDataChange(null, null, null);
            this.close();
            this.setDirty();
        };
        VDatepickPrecisionController.prototype.closeAfterBlurWithUnknown = function () {
            if (this.isHolderOpened) {
                this.selectedDataChange(this.searchYearText, this.searchMonthText, this.searchDayText);
                this.saveDateAndPrecision(this.newDateMoment, this.newPrecision);
                this.close();
            }
        };
        ;
        VDatepickPrecisionController.prototype.clearYear = function () {
            this.selectedYear = undefined;
            this.searchYearText = '';
        };
        VDatepickPrecisionController.prototype.clearMonth = function () {
            this.selectedMonth = undefined;
            this.searchMonthText = '';
        };
        VDatepickPrecisionController.prototype.clearDay = function () {
            this.selectedDay = undefined;
            this.searchDayText = '';
        };
        VDatepickPrecisionController.prototype.setDirty = function () {
            var selectedDateElement = angular.element(this.$element[0].querySelector('.v-DatepickPrecision-SelectedDate'));
            selectedDateElement.controller('ngModel').$setDirty();
        };
        VDatepickPrecisionController.prototype.isDateInRange = function (dateMoment, datePrecisionId) {
            var dateAccuracy = this.getFormatByPrecisionForMinMax(datePrecisionId);
            var startDayDateMoment = moment(dateMoment).startOf(dateAccuracy);
            if (dateMoment === null) {
                return true;
            }
            var minDateAllow = true;
            /* istanbul ignore else  */
            if (this.minDate) {
                var minDateMoment = this.moment(this.minDate).startOf(dateAccuracy);
                minDateAllow = (startDayDateMoment.isSame(minDateMoment) || startDayDateMoment.isAfter(minDateMoment));
            }
            var maxDateAllow = true;
            /* istanbul ignore else  */
            if (this.maxDate) {
                var maxDateMoment = this.moment(this.maxDate).startOf(dateAccuracy);
                maxDateAllow = (startDayDateMoment.isSame(maxDateMoment) || startDayDateMoment.isBefore(maxDateMoment));
            }
            return (minDateAllow && maxDateAllow);
        };
        VDatepickPrecisionController.prototype.changePrecision = function (datePrecisionId, newDateMoment) {
            this.setNewPrecision(datePrecisionId);
            if (newDateMoment) {
                this.setNewDateMoment(newDateMoment);
            }
            this.updateSelected();
        };
        VDatepickPrecisionController.prototype.formatDate = function (ngModelDate) {
            if (moment.isMoment(ngModelDate)) {
                return ngModelDate.isValid() ? ngModelDate.format(this.formatByPrecision) : moment().format(this.formatUnknown);
            }
            return '';
        };
        VDatepickPrecisionController.prototype.parseDate = function (ngModelDate) {
            return this.moment(ngModelDate, this.formatByPrecision);
        };
        VDatepickPrecisionController.prototype.setLabels = function () {
            var _this = this;
            // Localization
            // md-floating-label doesn't support i18n-attr and bug in IE if use variable
            this.locale.ready('ngHaloUiLibrary').then(function () {
                var autocompleteLabelYear = _this.locale.getString('ngHaloUiLibrary.vDatepickPrecisionAutocompleteLabelYear');
                var autocompleteLabelMonth = _this.locale.getString('ngHaloUiLibrary.vDatepickPrecisionAutocompleteLabelMonth');
                var autocompleteLabelDay = _this.locale.getString('ngHaloUiLibrary.vDatepickPrecisionAutocompleteLabelDay');
                $(_this.$element.find('.v-Autocomplete-Year label')).text(autocompleteLabelYear);
                $(_this.$element.find('.v-Autocomplete-Month label')).text(autocompleteLabelMonth);
                $(_this.$element.find('.v-Autocomplete-Day label')).text(autocompleteLabelDay);
            });
        };
        VDatepickPrecisionController.prototype.setDefaultsForUnspecifiedParameters = function () {
            this.allowUnknown = NgHaloUiLibrary.isUndefinedOrNull(this.allowUnknown) ? true : this.allowUnknown;
            this.numberOfYearsShown = this.numberOfYearsShown || VDatepickPrecisionController.DEFAULT_NUMBER_OF_YEARS_SHOWN;
            this.format = this.format || 'MMM D, YYYY';
            this.formatMonth = this.formatMonth || 'MMM YYYY';
            this.formatYear = this.formatYear || 'YYYY';
            this.formatUnknown = this.formatUnknown || '[Unknown]';
            this.formatEmpty = '';
        };
        VDatepickPrecisionController.prototype.getFormatByPrecisionForMinMax = function (datePrecisionId) {
            var dateAccuracy;
            switch (datePrecisionId) {
                case NgHaloUiLibrary.PrecisionDate.YEAR:
                    dateAccuracy = 'year';
                    break;
                case NgHaloUiLibrary.PrecisionDate.MONTH:
                    dateAccuracy = 'month';
                    break;
                case NgHaloUiLibrary.PrecisionDate.DAY:
                    dateAccuracy = 'day';
                    break;
                case NgHaloUiLibrary.PrecisionDate.UNKNOWN:
                    dateAccuracy = 'day';
                    break;
                case NgHaloUiLibrary.PrecisionDate.EMPTY:
                    dateAccuracy = 'day';
                    break;
            }
            return dateAccuracy;
        };
        VDatepickPrecisionController.prototype.onClickDocument = function (e) {
            var _this = this;
            this.$scope.$apply(function () {
                if (!_this.isHolderOpened ||
                    NgHaloUiLibrary.DomUtils.isEqualOrContains(e.target, _this.$element) ||
                    NgHaloUiLibrary.DomUtils.isMatchSelector(e.target, '.v-DatepickPrecision-AutocompleteMenu *') ||
                    NgHaloUiLibrary.DomUtils.isMatchSelector(e.target, '.v-Autocomplete-ButtonClear')) {
                    return;
                }
                _this.selectedDataChange(_this.searchYearText, _this.searchMonthText, _this.searchDayText);
                _this.saveDateAndPrecision(_this.newDateMoment, _this.newPrecision);
                _this.close();
            });
        };
        VDatepickPrecisionController.prototype.saveDateAndPrecision = function (date, datePrecisionId) {
            this.$scope.$emit(VDatepickPrecisionController.EVENT_PREFIX + 'selectionChanging');
            this.model.datePrecisionId = datePrecisionId;
            this.formatByPrecision = this.getFormatByPrecision(this.model.datePrecisionId);
            if (datePrecisionId === NgHaloUiLibrary.PrecisionDate.UNKNOWN) {
                this.model.date = null;
            }
            if (datePrecisionId === NgHaloUiLibrary.PrecisionDate.EMPTY) {
                this.model.date = '';
            }
            if (datePrecisionId !== NgHaloUiLibrary.PrecisionDate.UNKNOWN && datePrecisionId !== NgHaloUiLibrary.PrecisionDate.EMPTY) {
                this.model.date = this.moment(date).format('YYYY-MM-DD');
                this.model.offSetMinutes = new Date().getTimezoneOffset();
            }
            this.$scope.$emit(VDatepickPrecisionController.EVENT_PREFIX + 'selectionChanged');
        };
        VDatepickPrecisionController.prototype.arrayContains = function (array, data) {
            var i = array.length;
            while (i--) {
                if (array[i] === data) {
                    return true;
                }
            }
            return false;
        };
        VDatepickPrecisionController.prototype.updateNewDate = function () {
            var _this = this;
            var searchYearText = this.searchYearText;
            var searchMonthText = this.searchMonthText;
            var searchDayText = this.searchDayText;
            if (this.model.datePrecisionId !== NgHaloUiLibrary.PrecisionDate.EMPTY && NgHaloUiLibrary.isUndefinedOrNull(searchYearText) && NgHaloUiLibrary.isUndefinedOrNull(searchMonthText) && NgHaloUiLibrary.isUndefinedOrNull(searchDayText)) {
                var date = this.model.date || new Date();
                var newDateMoment = this.moment(date);
                if (newDateMoment.isValid()) {
                    return this.setNewDateMoment(newDateMoment);
                }
                else {
                    this.newDateMoment = this.moment(this.model.date);
                    throw new Error('VDatepickPrecision: Invalid date value: ' + this.model.date);
                }
            }
            this.$timeout(function () {
                var newYearMoment = _this.moment().year(parseInt(searchYearText, 10));
                var newMonthMoment = _this.moment().year(parseInt(searchYearText, 10)).month(searchMonthText);
                var startRangeYear = _this.moment(_this.getAutocompleteYears()[0]);
                var endRangeYear = _this.moment(_this.getAutocompleteYears()[_this.getAutocompleteYears().length - 1]);
                var isSameStartYear = newYearMoment.isSame(startRangeYear, 'year');
                var isSameEndYear = newYearMoment.isSame(endRangeYear, 'year');
                var isBetweenYear = newYearMoment.isBetween(startRangeYear, endRangeYear, 'year');
                var YearIsValid = newYearMoment.isValid() && (isBetweenYear || isSameStartYear || isSameEndYear);
                var MonthIsValid = _this.arrayContains(NgHaloUiLibrary.PrecisionDate.MONTH_ARRAY, searchMonthText);
                var DayIsValid;
                if (!newMonthMoment) {
                    DayIsValid = false;
                }
                else {
                    DayIsValid = parseInt(searchDayText, 10) > 0 && parseInt(searchDayText, 10) <= newMonthMoment.daysInMonth();
                }
                if (_this.model.datePrecisionId !== NgHaloUiLibrary.PrecisionDate.EMPTY && YearIsValid && MonthIsValid && DayIsValid) {
                    _this.setNewDateMoment(newYearMoment.month(searchMonthText).date(parseInt(searchDayText, 10)));
                }
                else if (_this.model.datePrecisionId !== NgHaloUiLibrary.PrecisionDate.EMPTY && YearIsValid && searchMonthText.length === 0) {
                    _this.setNewDateMoment(newYearMoment);
                }
                else if (!(MonthIsValid && YearIsValid) && (_this.model.datePrecisionId === NgHaloUiLibrary.PrecisionDate.EMPTY)) {
                    _this.model.date = '';
                    _this.newDateMoment = '';
                }
                else if (((searchDayText.length !== 0 && !DayIsValid) || !(MonthIsValid && YearIsValid)) &&
                    (_this.model.datePrecisionId !== NgHaloUiLibrary.PrecisionDate.EMPTY && _this.model.datePrecisionId !== NgHaloUiLibrary.PrecisionDate.UNKNOWN)) {
                    _this.model.date = null;
                    _this.setNewDateMoment(_this.moment(_this.model.date));
                }
            });
        };
        VDatepickPrecisionController.prototype.updateNewPrecision = function () {
            this.setNewPrecision(this.model.datePrecisionId);
        };
        VDatepickPrecisionController.prototype.updateSelected = function () {
            var isEmpty = this.model.datePrecisionId === NgHaloUiLibrary.PrecisionDate.EMPTY;
            // Default values (unknown precision)
            // About text values - https://github.com/angular/material/issues/1829
            this.clearDay();
            this.clearMonth();
            this.clearYear();
            if (!isEmpty && this.newDateMoment.isValid()) {
                if (this.precisionAllowedForYear.indexOf(this.newPrecision) !== -1) {
                    this.selectedYear = '' + this.newDateMoment.year();
                    this.searchYearText = '' + this.selectedYear;
                }
                if (this.precisionAllowedForMonth.indexOf(this.newPrecision) !== -1) {
                    this.selectedMonth = this.newDateMoment.format('MMM');
                    this.searchMonthText = this.selectedMonth;
                }
                if (this.precisionAllowedForDay.indexOf(this.newPrecision) !== -1) {
                    this.selectedDay = '' + this.newDateMoment.date();
                    this.searchDayText = '' + this.selectedDay;
                }
            }
        };
        VDatepickPrecisionController.prototype.setNewPrecision = function (datePrecisionId) {
            this.newPrecision = datePrecisionId;
            this.formatByPrecision = this.getFormatByPrecision(this.newPrecision);
            this.model.datePrecisionId = datePrecisionId;
        };
        VDatepickPrecisionController.prototype.setNewDateMoment = function (newDateMoment) {
            // Clone for rerender view
            this.newDateMoment = this.moment(newDateMoment);
        };
        VDatepickPrecisionController.prototype.getAutocompleteYears = function () {
            var currentYear = this.moment().year(), startYear = currentYear - (Math.ceil(this.numberOfYearsShown / 2));
            /* istanbul ignore else  */
            if (this.minDate) {
                startYear = this.moment(this.minDate).year();
            }
            var endYear = currentYear + Math.ceil(this.numberOfYearsShown / 2);
            /* istanbul ignore else  */
            if (this.maxDate) {
                endYear = this.moment(this.maxDate).year();
            }
            var years = [];
            for (var year = startYear; year <= endYear; year++) {
                years.push('' + year);
            }
            return years;
        };
        VDatepickPrecisionController.prototype.getAutocompleteMonths = function () {
            var monthNumbers = [];
            var firstMonthInYearNumberForMomentJs = 0;
            var lastMonthInYearNumberForMomentJs = 11;
            for (var month = firstMonthInYearNumberForMomentJs; month <= lastMonthInYearNumberForMomentJs; month++) {
                monthNumbers.push(month);
            }
            /* istanbul ignore else  */
            if (this.minDate) {
                var minDateMoment = this.moment(this.minDate);
                this.newDateMoment = this.moment(new Date());
                if (minDateMoment.year() === this.newDateMoment.year()) {
                    monthNumbers = monthNumbers.slice(minDateMoment.month());
                }
            }
            /* istanbul ignore else  */
            if (this.maxDate) {
                var maxDateMoment_1 = this.moment(this.maxDate);
                this.newDateMoment = this.moment(new Date());
                if (maxDateMoment_1.year() === this.newDateMoment.year()) {
                    monthNumbers = monthNumbers.filter(function (monthNumber) {
                        return (monthNumber <= maxDateMoment_1.month());
                    });
                }
            }
            var momentForFormatting = this.moment();
            return monthNumbers.map(function (monthNumber) {
                return momentForFormatting.month(monthNumber).format('MMM');
            });
        };
        VDatepickPrecisionController.prototype.getFormatByPrecision = function (datePrecisionId) {
            var format;
            switch (datePrecisionId) {
                case NgHaloUiLibrary.PrecisionDate.YEAR:
                    format = this.formatYear;
                    break;
                case NgHaloUiLibrary.PrecisionDate.MONTH:
                    format = this.formatMonth;
                    break;
                case NgHaloUiLibrary.PrecisionDate.DAY:
                    format = this.format;
                    break;
                case NgHaloUiLibrary.PrecisionDate.UNKNOWN:
                    format = this.formatUnknown;
                    break;
                case NgHaloUiLibrary.PrecisionDate.EMPTY:
                    format = this.formatEmpty;
                    break;
                default:
                    throw new Error('VDatepickPrecision: Precision is not supported: ' + datePrecisionId);
            }
            return format;
        };
        VDatepickPrecisionController.EVENT_PREFIX = 'VDatepickPrecision:';
        VDatepickPrecisionController.EL_EVENT_SUFFIX = '.VDatepickPrecision';
        VDatepickPrecisionController.DEFAULT_NUMBER_OF_YEARS_SHOWN = 6;
        return VDatepickPrecisionController;
    }());
    NgHaloUiLibrary.VDatepickPrecisionController = VDatepickPrecisionController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-datepick
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard datepicker.
     *
     * <br>
     * Design version: 1.1<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-404">HALO-404</a> <br>
     *
     * @example
     <example module="vDatepickExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController">

         <div>
            <div layout="row">
                <div flex="20">Component model:</div>
                <div flex="20">{{exampleController.datepickModel | date: 'dd/MM/yyyy'}}</div>
                <div flex></div>
            </div>
            <div layout="row">
                <div flex="20">Min date:</div>
                <div flex="20">
                    {{exampleController.datepickMinDate ? (exampleController.datepickMinDate | date: 'dd/MM/yyyy') : 'none'}}
                </div>
                <div flex>
                     <v-button
                         ng-click="exampleController.datepickMinDate ? exampleController.datepickMinDate = null :
                         exampleController.datepickMinDate = exampleController._datepickMinDate">Toggle Min date</v-button>
                </div>
            </div>
            <div layout="row">
                <div flex="20">Max date:</div>
                <div flex="20">
                    {{exampleController.datepickMaxDate ? (exampleController.datepickMaxDate | date: 'dd/MM/yyyy') : 'none'}}
                </div>
                <div flex>
                     <v-button ng-click="exampleController.datepickMaxDate ? exampleController.datepickMaxDate = null :
                         exampleController.datepickMaxDate = exampleController._datepickMaxDate">Toggle Max date</v-button>
                </div>
            </div>
            <div layout="row">
                <div flex="20">Mode:</div>
                <div flex="20">{{exampleController.mode || 'Default'}}</div>
                <div flex><v-button ng-click="exampleController.mode ? exampleController.mode = null : exampleController.mode = 'Large'">Toggle mode</v-button></div>
            </div>
            <div layout="row">
                <div flex="20">Icon:</div>
                <div flex="20">{{exampleController.icon || false}}</div>
                <div flex><v-button ng-click="exampleController.icon =! exampleController.icon">Toggle icon</v-button></div>
            </div>
            <div layout="row">
                <div flex="20">Show navigation:</div>
                <div flex="20">{{exampleController.navigation || false}}</div>
                <div flex><v-button ng-click="exampleController.navigation =! exampleController.navigation">Toggle navigation</v-button></div>
            </div>
            <div layout="row">
                <div flex="20">Allow input:</div>
                <div flex="20">{{exampleController.allowInput || false}}</div>
                <div flex><v-button ng-click="exampleController.allowInput =! exampleController.allowInput">Toggle 'Allow input'</v-button></div>
            </div>
             <div layout="row">
                 <div flex="20">Format:</div>
                 <div flex="20">{{exampleController.format || 'Default'}}</div>
                 <div flex></div>
             </div>
         </div>
         <br/>
         <div>
             <v-datepick model="exampleController.datepickModel"
                 min-date="exampleController.datepickMinDate"
                 max-date="exampleController.datepickMaxDate"
                 mode="exampleController.mode"
                 format="exampleController.format"
                 icon="exampleController.icon"
                 navigation="exampleController.navigation"
                 allow-input="exampleController.allowInput"></v-datepick><br>
         </div>
         <div>
             <h5>Example with external years offset "2" (default is "20")</h5>
             <v-datepick years-offset="2"></v-datepick><br>
         </div>
     </div>

     </file>
     <file name="style.css">
        [flex] {
            padding: 2px 0;
        }
     </file>
     <file name="script.js">

     angular.module('vDatepickExample', ['ngHaloUiLibrary', 'angularMoment']).controller('ExampleController', function (vDatePrecision) {
        this.format = 'dd MMM, yyyy';
        this.datepickModel = new Date();

        this._datepickMinDate = new Date(this.datepickModel.getTime());
        this._datepickMinDate.setMonth(this._datepickMinDate.getMonth() - 12);

        this._datepickMaxDate = new Date(this.datepickModel.getTime());
        this._datepickMaxDate.setMonth(this._datepickMaxDate.getMonth() + 12);

     });

     </file>
     </example>
     *
     **/
    var VDatepick = (function () {
        function VDatepick() {
            this.restrict = 'E';
            this.templateUrl = 'components/vDatepick/vDatepick.html';
            this.controller = NgHaloUiLibrary.VDatepickController;
            this.controllerAs = 'datepickVm';
            this.bindToController = true;
            this.scope = {
                model: '=?',
                mode: '=?',
                minDate: '=?',
                maxDate: '=?',
                format: '=?',
                icon: '=?',
                navigation: '=?',
                yearsOffset: '=?',
                allowInput: '=?'
            };
        }
        VDatepick.factory = function () {
            return function () { return new VDatepick(); };
        };
        return VDatepick;
    }());
    NgHaloUiLibrary.VDatepick = VDatepick;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VDatepickController = (function () {
        function VDatepickController($scope, $element, $document, $timeout, $filter, uiDefaults) {
            var _this = this;
            this.$scope = $scope;
            this.$element = $element;
            this.$timeout = $timeout;
            this.$filter = $filter;
            this.selectYearsData = [];
            this.selectMonthsData = [];
            this.isShow = false;
            this.inputEnabled = false;
            this.setDisplayMonth = function (month) {
                var newDate = new Date(_this.displayDate.getTime()), currentDate = newDate.getDate(), daysInMonth = new Date(newDate.getFullYear(), month + 1, 0).getDate();
                /* istanbul ignore else  */
                if (currentDate > daysInMonth) {
                    newDate.setDate(daysInMonth);
                }
                newDate.setMonth(month);
                _this.displayDate = newDate;
            };
            this.setDisplayFullYear = function (year) {
                var newDate = new Date(_this.displayDate.getTime());
                newDate.setFullYear(year);
                _this.displayDate = newDate;
            };
            this.isYearActive = function (year) {
                return !((_this.minDate && year < _this.minDate.getFullYear()) ||
                    (_this.maxDate && year > _this.maxDate.getFullYear()));
            };
            this.isMonthActive = function (month) {
                return !((_this.minDate && _this.selectedYear <= _this.minDate.getFullYear() && month < _this.minDate.getMonth()) ||
                    (_this.maxDate && _this.selectedYear >= _this.maxDate.getFullYear() && month > _this.maxDate.getMonth()));
            };
            this.onClickBody = function (e) {
                if (NgHaloUiLibrary.DomUtils.isEqualOrContains(e.target, _this.$element) ||
                    (VDatepickController.EXCLUDE_SELECT_SELECTOR &&
                        NgHaloUiLibrary.DomUtils.isMatchSelector(e.target, VDatepickController.EXCLUDE_SELECT_SELECTOR))) {
                    return;
                }
                _this.$scope.$apply(function () { return _this.isShow = false; });
            };
            this.FORMAT_DEFAULT = uiDefaults.dateFormat;
            this.today = new Date();
            this.bodyEl = $document.find('body').get(0);
            this.displayDate = this.displayDate || new Date((this.model || this.today).getTime());
            this.renderStartDate = new Date((this.model || this.today).getTime());
            this.renderStartDate.setFullYear((this.model || this.today).getFullYear() -
                (this.yearsOffset || VDatepickController.YEARS_OFFSET));
            this.renderStartDate.setMonth(0);
            this.renderStartDate.setDate(1);
            this.renderEndDate = new Date((this.model || this.today).getTime());
            this.renderEndDate.setFullYear((this.model || this.today).getFullYear() +
                (this.yearsOffset || VDatepickController.YEARS_OFFSET));
            this.renderEndDate.setMonth(11);
            this.renderEndDate.setDate(31);
            this.populateYears();
            this.populateMonths();
            this.updateSelected();
            this.$scope.$watch(function () { return _this.isShow; }, function () {
                return _this.isShow ? _this.bodyEl.addEventListener('click', _this.onClickBody, true) :
                    _this.bodyEl.removeEventListener('click', _this.onClickBody, true);
            });
            this.$scope.$watch(function () { return _this.displayDate; }, function () { return _this.updateSelected(); });
            this.$scope.$watch(function () { return _this.model; }, function () { return _this.model ? _this.isShow = false : true; });
        }
        VDatepickController.prototype.toggle = function () {
            var _this = this;
            this.isShow = !this.isShow;
            /* istanbul ignore else  */
            if (this.isShow) {
                this.$timeout(function () {
                    return _this.displayDate = _this.model || _this.today;
                }, VDatepickController.SCROLL_TO_MODEL_DATE_TIMEOUT);
            }
        };
        VDatepickController.prototype.toggleInput = function () {
            this.inputEnabled = !this.inputEnabled;
            if (this.inputEnabled) {
                this.inputDateModel = new Date((this.model || this.today).getTime());
            }
            else if (this.inputDateModel.getTime()) {
                this.model = new Date(this.inputDateModel.getTime());
            }
        };
        VDatepickController.prototype.navNext = function () {
            this.nav(1);
        };
        VDatepickController.prototype.navPrev = function () {
            this.nav(-1);
        };
        VDatepickController.prototype.nav = function (where) {
            var currentDate = new Date(this.model.getTime());
            currentDate.setDate(currentDate.getDate() + where);
            this.model = currentDate;
        };
        VDatepickController.prototype.updateSelected = function () {
            this.selectedYear = this.displayDate.getFullYear();
            this.selectedMonth = this.displayDate.getMonth();
        };
        VDatepickController.prototype.populateYears = function () {
            var populateDate = new Date(this.renderStartDate.getTime());
            this.selectYearsData = [];
            while (populateDate < this.renderEndDate) {
                var year = populateDate.getFullYear();
                this.selectYearsData.push({ text: year, code: year, isVisible: this.isYearActive });
                populateDate.setFullYear(year + 1);
            }
        };
        VDatepickController.prototype.populateMonths = function () {
            for (var i = 0; i < 12; i++) {
                this.selectMonthsData.push({
                    text: this.$filter.call(this.$filter, 'date')(new Date(null, i, 1), 'MMM'),
                    code: i,
                    isVisible: this.isMonthActive
                });
            }
        };
        VDatepickController.EXCLUDE_SELECT_SELECTOR = '.v-Datepick-SelectContainer *, .md-select-backdrop';
        VDatepickController.YEARS_OFFSET = 20;
        VDatepickController.SCROLL_TO_MODEL_DATE_TIMEOUT = 200;
        return VDatepickController;
    }());
    NgHaloUiLibrary.VDatepickController = VDatepickController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-dialog
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Dialog.
     * Extended from angular-material <a href="https://material.angularjs.org/latest/api/directive/mdDialog">md-dialog</a>.<br>
     *
     * <br>
     * Design version: 1.1 <br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-676">HALO-676</a> <br>
     *
     * @example
     <example module="vDialogExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController" layout="row" layout-align="space-between">
        <v-button ng-click="exampleController.showDialog($event)">Show Dialog</v-button>
        <v-button ng-click="exampleController.showDialog2($event)">Show Dialog without title</v-button>
     </div>

     </file>
     <file name="dialog.tmpl.html">

     <v-dialog dialog-title="vm.title" actions="vm.actions" content-class="vm.contentClass">
        <h1>Content here</h1>
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare rutrum ante at molestie. Sed venenatis finibus elit mollis ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu erat eget neque placerat ultricies eget a risus. Vivamus venenatis sodales blandit. Donec ornare bibendum elit sit amet ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut enim ex, varius sit amet euismod at, lacinia non leo. Nullam dictum a leo in scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
         Nulla vulputate ut nulla vel hendrerit. Curabitur vulputate facilisis ante, sed elementum dolor. Pellentesque ut nisi et elit congue gravida. Vivamus vestibulum sed purus et ultricies. Cras vitae purus ultricies, venenatis sapien eu, suscipit enim. Suspendisse potenti. Nunc volutpat tempus maximus. Vestibulum rutrum interdum dapibus. Phasellus bibendum risus erat, non dictum nibh fringilla eget. Phasellus volutpat orci eget tortor placerat, non vulputate tellus tempus.
        </p>
        <p>
         Phasellus lacinia finibus diam eu cursus. Etiam vel placerat est. Vestibulum pretium tortor non tortor congue, at aliquam urna pellentesque. Curabitur magna enim, imperdiet eget ullamcorper sed, euismod sed dolor. Mauris tincidunt, mi semper egestas dignissim, purus mauris ornare mauris, sit amet egestas lectus enim ac lacus. Cras imperdiet urna ornare, tincidunt massa eu, placerat mauris. Etiam iaculis cursus libero sed suscipit. Duis a fermentum nulla, et placerat neque. Vivamus ut quam sed leo sagittis pulvinar. Nullam egestas quam bibendum quam imperdiet, non vestibulum odio varius. Proin pulvinar tellus et tellus condimentum sollicitudin.
        </p>
        <p>
         Ut placerat interdum lorem, ut maximus purus accumsan a. Suspendisse feugiat ex vitae erat varius vehicula. Aenean id rhoncus dui, vel cursus tortor. Donec risus ex, auctor ac nisi ac, vulputate efficitur risus. Pellentesque id mollis velit, ac ultricies purus. Ut lacinia, sem accumsan sagittis fermentum, quam leo commodo urna, eu sagittis diam tellus vitae felis. Quisque vitae quam pretium urna rhoncus egestas. Suspendisse neque augue, accumsan ac dapibus et, lobortis vel ipsum.
        </p>
        <p>
         Vivamus mattis, nibh id euismod auctor, lectus nunc aliquet dui, sit amet tincidunt nisl elit et dui. Praesent bibendum tortor sed odio molestie lobortis. Ut posuere diam eros, nec pretium dui volutpat eu. Donec et pharetra libero. Maecenas ut neque maximus mauris auctor placerat. In ut est in eros finibus bibendum. Sed facilisis luctus lectus, ac elementum purus condimentum in. Ut euismod risus tellus, sed eleifend elit euismod a. Maecenas tempor fermentum laoreet.
        </p>
     </v-dialog>

     </file>
     <file name="script.js">
     angular.module('vDialogExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($mdDialog) {

        function DialogController($scope, $mdDialog) {
            return this;
        };

        this.showDialog = function (ev) {
            $mdDialog.show({
              templateUrl: 'dialog.tmpl.html',
              targetEvent: ev,
              clickOutsideToClose: true,
              bindToController: true,
              controllerAs: 'vm',
              controller: DialogController,
              locals: {
                title: 'Title here',
                contentClass: 'width500',
                actions: [
                    {title: 'Ok', action: function(){$mdDialog.hide();}, disabled: true},
                    {title: 'Cancel', action: function(){$mdDialog.cancel();}}
                ]
              }
            })
        };

        this.showDialog2 = function (ev) {
            $mdDialog.show({
              templateUrl: 'dialog.tmpl.html',
              targetEvent: ev,
              clickOutsideToClose: true,
              bindToController: true,
              controllerAs: 'vm',
              controller: DialogController,
              locals: {
                title: '',
                actions: [
                    {title: 'Ok', action: function(){$mdDialog.hide();}},
                    {title: 'Cancel', action: function(){$mdDialog.cancel();}}
                ]
              }
            })
        };
     });
     </file>
     <file name="style.css">
        .width500{
            width: 500px;
        }
     </file>
     </example>
     *
     **/
    var VDialog = (function () {
        function VDialog() {
            this.restrict = 'E';
            this.templateUrl = 'components/vDialog/vDialog.html';
            this.controller = NgHaloUiLibrary.VDialogController;
            this.controllerAs = 'dialogVm';
            this.bindToController = true;
            this.transclude = true;
            this.replace = true;
            this.scope = {
                dialogTitle: '=?',
                actions: '=?',
                contentClass: '=?'
            };
        }
        VDialog.factory = function () {
            return function () { return new VDialog(); };
        };
        return VDialog;
    }());
    NgHaloUiLibrary.VDialog = VDialog;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VDialogController = (function () {
        function VDialogController($mdDialog) {
            this.mdDialog = $mdDialog;
        }
        VDialogController.prototype.hide = function () {
            this.mdDialog.hide();
        };
        VDialogController.prototype.cancel = function (message) {
            this.mdDialog.cancel(message);
        };
        return VDialogController;
    }());
    NgHaloUiLibrary.VDialogController = VDialogController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-document-management
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Document Management.
     *
     * <br>
     * Design version: 1.1 <br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-406">HALO-406</a> <br>
     *
     * @example
     <example module="vDocumentManagementExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController">
         <v-document-management
            documents="exampleController.documents"
            types="exampleController.types"
            remove-action="exampleController.removeAction"
            upload-settings="exampleController.uploadSettings"
            person="exampleController.person"
            person-documents="exampleController.personDocuments">
            </v-document-management>
        <br/>
         <v-button ng-click="exampleController.showDialog($event)">Open in Dialog</v-button>
     </div>

     </file>
     <file name="dialog.tmpl.html">

     <v-dialog dialog-title="vm.title" actions="vm.actions">
         <v-document-management
             documents="vm.documents"
             types="vm.types"
             remove-action="vm.removeAction"
             upload-settings="vm.uploadSettings"
             person="vm.person"
             person-documents="vm.personDocuments">
         </v-document-management>
     </v-dialog>

     </file>
     <file name="script.js">
     angular.module('vDocumentManagementExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($scope, $mdDialog) {
          var that = this;
          var fakeDate = new Date();

          that.documents = [
            {name: 'File that is already uploaded.jpg', type: 3},
            {name: 'File that is already uploaded.jpg', type: 4},
            {name: 'File that is already uploaded.jpg', type: 5}
          ];

          that.types = [
            {text: 'X-ray', code: 1, required: true},
            {text: 'DICOM image', code: 2, required: true},
            {text: 'CT Scan', code: 3, required: true},
            {text: 'Consult', code: 4, required: true},
            {text: 'MRI', code: 5, required: true}
          ];

          that.removeAction = function (doc) {
            that.documents.splice(that.documents.indexOf(doc), 1);
          };

          that.uploadSettings = {
            dropzoneConfig: {
                url: '/upload',
                method: 'POST'
            }
          };

          that.person = {givenName: 'Long Patient', familyName: 'Name', photo: ''};
          that.personDocuments = [
            {name: 'Pathology report', type: 3, date: new Date(fakeDate.setDate(fakeDate.getDate()-10))},
            {name: 'Radiology report', type: 4, date: new Date(fakeDate.setDate(fakeDate.getDate()-10))},
            {name: 'Lab_2015_0504', type: 5, date: new Date(fakeDate.setDate(fakeDate.getDate()-10))},
            {name: 'Referral', type: 5, date: new Date(fakeDate.setDate(fakeDate.getDate()-10))},
            {name: 'Introduction letter', type: 5, date: new Date(fakeDate.setDate(fakeDate.getDate()-10))}
          ];

          function DialogController($scope, $mdDialog) {
            return this;
          };

          that.actions = [
                {title: 'Add documents', action: function(){$mdDialog.hide();}, disabled: that.buttonDisabled},
                {title: 'Cancel', action: function(){$mdDialog.cancel();}}
          ];
          that.title = 'Add documents';

          that.showDialog = function (ev) {
                $mdDialog.show({
                  templateUrl: 'dialog.tmpl.html',
                  targetEvent: ev,
                  clickOutsideToClose: true,
                  bindToController: true,
                  controllerAs: 'vm',
                  controller: DialogController,
                  locals: that
                })
          };

          $scope.$watch('exampleController.documents', function() {
                that.actions[0].disabled = that.documents.indexOf(that.documents.filter(function(i){return !i.type})[0]) !== -1;
          }, true);



     });
     </file>
     </example>
     *
     **/
    var VDocumentManagement = (function () {
        function VDocumentManagement() {
            this.restrict = 'E';
            this.templateUrl = 'components/vDocumentManagement/vDocumentManagement.html';
            this.controller = NgHaloUiLibrary.VDocumentManagementController;
            this.controllerAs = 'docmanageVm';
            this.bindToController = true;
            this.scope = {
                documents: '=',
                types: '=',
                removeAction: '=',
                uploadSettings: '=',
                person: '=',
                personDocuments: '='
            };
        }
        VDocumentManagement.factory = function () {
            return function () { return new VDocumentManagement(); };
        };
        return VDocumentManagement;
    }());
    NgHaloUiLibrary.VDocumentManagement = VDocumentManagement;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VDocumentManagementController = (function () {
        function VDocumentManagementController($scope, $timeout) {
            var _this = this;
            this.uploadErrors = [];
            this.documentsTableOptions = {
                fields: [
                    { key: 'name', title: 'ngHaloUiLibrary.vDocumentManagementName', className: 'v-DocumentManagement-TdDoc',
                        template: "<div class=\"v-DocumentManagement-DocName\">\n                        {{item.name}}\n                        <v-tooltip>{{item.name}}</v-tooltip>\n                        <v-progress-linear class=\"v-DocumentManagement-DocProgress\"\n                        ng-if=\"item.upload\"\n                        value=\"item.upload.progress\"></v-progress-linear>\n                    </div>"
                    },
                    { key: 'type', title: 'ngHaloUiLibrary.vDocumentManagementType', className: 'v-DocumentManagement-TdType',
                        template: "<v-select class=\"v-DocumentManagement-Select\"\n                          model=\"item.type\"\n                          data=\"$parent.$parent.$parent.$parent.docmanageVm.types\"\n                          placeholder=\"Choose file type\"></v-select>"
                    }
                ],
                actions: [],
                hideHeader: true
            };
            this.personDocumentsTableOptions = {
                fields: [
                    { key: 'name', title: 'ngHaloUiLibrary.vDocumentManagementName', className: 'v-DocumentManagement-TdDoc',
                        sortable: true, template: "<v-link ng-click=\"$parent.$parent.$parent.$parent.docmanageVm.documents.indexOf(item) === -1 ?\n                        $parent.$parent.$parent.$parent.docmanageVm.documents.unshift(item)\n                     : false;\">\n                        {{item.name}}\n                        <v-tooltip>{{item.name}}</v-tooltip>\n                    </v-link>"
                    },
                    { key: 'type', title: 'ngHaloUiLibrary.vDocumentManagementType', className: 'v-DocumentManagement-TdType',
                        template: "<span>{{$parent.$parent.$parent.$parent.docmanageVm.getItemType(item).text}}</span>"
                    },
                    { key: 'date', title: 'ngHaloUiLibrary.vDocumentManagementDate', className: 'v-DocumentManagement-TdDate',
                        sortable: true, template: "<span>{{item.date | date: 'MMM dd, yyyy' }}</span>"
                    }
                ],
                order: { field: 'date', reverse: true },
                filter: { type: '' }
            };
            this.getItemType = function (item) {
                return _this.types.filter(function (type) { return type.code * 1 === item.type * 1; })[0];
            };
            this.filterMissedTypes = function (type) {
                return type.required && _this.documents.indexOf(_this.documents.filter(function (doc) { return doc.type * 1 === type.code * 1; })[0]) === -1;
            };
            this.dzAddedFile = function (file) {
                file.document = {
                    name: file.name,
                    upload: { progress: 0 }
                };
                _this.documents.unshift(file.document);
            };
            this.dzUploadProgress = function (file) {
                _this.$scope.$apply(function () { return file.document.upload = file.upload; });
            };
            this.dzError = function (file, error) {
                var errorObject = {
                    file: file.name,
                    text: error
                };
                _this.uploadErrors.unshift(errorObject);
                _this.uploadSettings.dropzone.removeFile(file);
                _this.$scope.$apply(function () {
                    return _this.documents.splice(_this.documents.indexOf(_this.documents.filter(function (d) { return d === file.document; })[0]), 1);
                });
                _this.$timeout(function () {
                    return _this.uploadErrors.splice(_this.uploadErrors.indexOf(errorObject, 0), 1);
                }, VDocumentManagementController.ERRORS_HIDE_TIMEOUT);
            };
            this.dzSuccess = function (file) {
                file.document.upload = undefined;
                _this.uploadSettings.dropzone.removeFile(file);
            };
            this.$scope = $scope;
            this.$timeout = $timeout;
            this.documentsTableOptions.actions.push({ text: '', action: this.removeAction, main: true });
        }
        VDocumentManagementController.prototype.dzOpenChooseDialog = function () {
            this.uploadSettings.dropzone.hiddenFileInput.click();
        };
        VDocumentManagementController.ERRORS_HIDE_TIMEOUT = 5000;
        return VDocumentManagementController;
    }());
    NgHaloUiLibrary.VDocumentManagementController = VDocumentManagementController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-dropdown-content
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Dropdown with content block.
     * angular-material has modal dialog, menu and select elements but has no dropdown with simple content block.<br>
     * Dropdown is closed by outside click.
     *
     * <br>
     * Design version: 1.1 ( UI-Controls-Dropdown-1.1.ai )<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-703">HALO-703</a> <br>
     *
     * @example
     <example module="vDropdownContent" deps="" animate="false">
     <file name="index.html">


     <div ng-controller="ExampleController as exampleController">
     <h3>Default</h3>
     <v-dropdown-content button-title="Open default container">
         <br>
         Container
         <br><br>
     </v-dropdown-content>
     <br>
     <br>

     <h3>With right container</h3>
     <v-dropdown-content button-title="Open right container" container-position="right">
         <br>
         Right container
        <br><br>
     </v-dropdown-content>
     <br>
     <br>
     <h3>With exclude selector</h3>
     <v-dropdown-content button-title="Open right container" exclude-selector="#notCloseDropdownContent, #notCloseDropdownContent *">
         <br>
         Click on button below will not close dropdown
         <br><br>
     </v-dropdown-content>
     <br><br>
     <div>
        <v-button id="notCloseDropdownContent">Click here will not close dropdown content</v-button>
     </div>

     </div>

     </file>
     <file name="script.js">

     angular.module('vDropdownContent', ['ngHaloUiLibrary', 'angularMoment']).controller('ExampleController', function (vDatePrecision) {
        this.dropdownContentModel = null;
     });

     </file>
     </example>
     *
     **/
    var VDropdownContent = (function () {
        function VDropdownContent() {
            this.restrict = 'E';
            this.templateUrl = 'components/vDropdownContent/vDropdownContent.html';
            this.controller = NgHaloUiLibrary.VDropdownContentController;
            this.controllerAs = 'dropdownContentVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                buttonTitle: '@?',
                containerPosition: '@?',
                excludeSelector: '@?'
            };
        }
        VDropdownContent.factory = function () {
            return function () { return new VDropdownContent(); };
        };
        return VDropdownContent;
    }());
    NgHaloUiLibrary.VDropdownContent = VDropdownContent;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VDropdownContentController = (function () {
        function VDropdownContentController() {
        }
        return VDropdownContentController;
    }());
    NgHaloUiLibrary.VDropdownContentController = VDropdownContentController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-icon
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Icon component.
     * Extended from angular-material <a href="https://material.angularjs.org/latest/demo/icon">md-icon</a>.<br>
     * Default color of icons is white.
     * Please create specific class with colored icon for your icon context (navbar, sidebar, button).
     *
     * <br>
     * Design version: 1.1 ( UI-Controls-Buttons-1.1.ai - icon list is incomplete )<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-701">HALO-701</a> <br>
     *
     * @example
     <example module="vIconExample" deps="" animate="false">
     <file name="index.html">
     <div ng-controller="ExampleController as exampleController">
         <table>
            <thead>
                <tr>
                    <td>icon</td>
                    <td ng-repeat="size in exampleController.sizes">{{::(size ? size + 'px' : 'default')}}</td>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="icon in exampleController.icons">
                    <td>{{::icon}}</td>
                    <td ng-repeat="size in exampleController.sizes">
                        <v-icon icon="{{::icon}}" class="{{::(size ? 'size-' + size  : '')}}"></v-icon>
                    </td>
                </tr>
            </tbody>
         </table>
         <br>
         <br>

         <div>
            <h3>v-icon with ng-click</h3>
            <v-icon ng-click="exampleController.click()" class="v-Icon-Evergency" icon="plus"></v-icon>
         </div>
         <br>
         <br>
         <div class="default-icons">
             <h3>Default icons</h3>
             <v-icon class='v-Icon-Default' icon="expand"></v-icon>
             <v-icon class='v-Icon-Default' icon="arrow-left"></v-icon>
             <v-icon class='v-Icon-Default' icon="checkmark"></v-icon>
             <v-icon class='v-Icon-Default' icon="clock"></v-icon>
             <v-icon class='v-Icon-Default' icon="corner-down"></v-icon>
             <v-icon class='v-Icon-Default' icon="cross"></v-icon>
             <v-icon class="v-Icon-Evergency" icon="datepicker"></v-icon>
             <v-icon class="v-Icon-Evergency" icon="expand"></v-icon>
             <v-icon class="v-Icon-Evergency" icon="icon-view"></v-icon>
             <v-icon class="v-Icon-Evergency" icon="list-view"></v-icon>
             <v-icon class="v-Icon-Evergency" icon="medications"></v-icon>
             <v-icon class="v-Icon-Evergency" icon="pin"></v-icon>
             <v-icon class="v-Icon-Evergency" icon="plus"></v-icon>
             <v-icon class="v-Icon-Evergency" icon="search"></v-icon>
             <v-icon class="v-Icon-Evergency" icon="sortable-active"></v-icon>
             <v-icon class='v-Icon-Default' icon="smile-1"></v-icon>
             <v-icon class='v-Icon-Default' icon="smile-1-unselected"></v-icon>
             <v-icon class='v-Icon-Default' icon="smile-2"></v-icon>
             <v-icon class='v-Icon-Default' icon="smile-2-unselected"></v-icon>
             <v-icon class='v-Icon-Default' icon="smile-3"></v-icon>
             <v-icon class='v-Icon-Default' icon="smile-3-unselected"></v-icon>
             <v-icon class='v-Icon-Default' icon="smile-4"></v-icon>
             <v-icon class='v-Icon-Default' icon="smile-4-unselected"></v-icon>
             <v-icon class='v-Icon-Default' icon="smile-5"></v-icon>
             <v-icon class='v-Icon-Default' icon="smile-5-unselected"></v-icon>
         </div>

         <br>
         <br>

         <v-button class="v-Button_Icon">
            <v-icon icon="cross" class="v-Example-Icon"></v-icon>
         </v-button>
         <br>
         <br>

         <v-button>
            <v-icon icon="cross" class="v-Icon_ButtonWithText v-Example-Icon"></v-icon>Button with icon and text
         </v-button>
         <br>
         <br>
     </div>

     </file>
     <file name="script.js">
     angular.module('vIconExample', ['ngHaloUiLibrary']).controller('ExampleController', function(){

           this.sizes = [
                null,
                '40',
                '26',
                '18',
                '12'
           ]
           this.icons = [
                'add-small',
                'add',
                'allergy-thin',
                'allergy',
                'arrow-left',
                'attention-star-small',
                'attention-star',
                'bookmark-small',
                'bookmark',
                'calendar',
                'cards-small',
                'cards',
                'carepulse',
                'check-small',
                'check',
                'checkmark',
                'chemotherapy',
                'clinical-note',
                'clock',
                'corner-down',
                'cross',
                'datepicker',
                'diagnosis',
                'dismiss-small',
                'dismiss',
                'draw-small',
                'draw',
                'erase',
                'expand',
                'fall-risk',
                'full-screen',
                'icon-view',
                'infectious-disease',
                'lab-small',
                'lab',
                'list-small',
                'list-view',
                'medication',
                'medications',
                'messages',
                'move',
                'multiple-location',
                'pin',
                'pinned-small',
                'plus',
                'problem',
                'question-small',
                'question',
                'radiation-nucleus',
                'radiation',
                'review-outline-pale',
                'review-outline',
                'review',
                'same-name',
                'search-bold',
                'search-small',
                'search',
                'settings',
                'sortable-active',
                'sticky-note-small',
                'sticky-note',
                'survey',
                'task-modern',
                'task-small',
                'task',
                'this-location',
                'timeline',
                'treatment',
                'urgent',
                'warning-none-small',
                'warning-none',
                'warning-one-small',
                'warning-one',
                'warning-two-small',
                'warning-two',
                'zoom-in',
                'zoom-out'
           ];

           this.click = function(){
               alert('Click');
           }
     });
     </file>
     <file name="style.css">

     table {
        text-align: center;
        border-collapse: collapse;
        vertical-align: middle;
     }

     table td {
        padding: 10px;
        border: 1px solid #f1f1f1;

     }

     .v-Button-Button .v-Example-Icon>svg {
        stroke: white;
        display: block;
        width: 16px;
     }
     .v-Button-Button .v-Example-Icon{
        margin-top: -2px;
        margin-bottom: -2px;
     }
     .v-Button-Button .v-Icon_ButtonWithText.v-Example-Icon>svg{
        width: 13px;
     }
     </file>
     </example>
     *
     **/
    var VIcon = (function () {
        function VIcon() {
            this.restrict = 'E';
            this.templateUrl = 'components/vIcon/vIcon.html';
            this.controller = NgHaloUiLibrary.VIconController;
            this.controllerAs = 'iconVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                icon: '@'
            };
        }
        VIcon.factory = function () {
            return function () { return new VIcon(); };
        };
        return VIcon;
    }());
    NgHaloUiLibrary.VIcon = VIcon;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VIconController = (function () {
        function VIconController(HALO_UI_PATH) {
            this.iconPath = HALO_UI_PATH + '/images/sprite.svg#icon-';
        }
        VIconController.prototype.getSvgIcon = function (iconId) {
            return this.iconPath + iconId;
        };
        return VIconController;
    }());
    NgHaloUiLibrary.VIconController = VIconController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-input
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard input.
     * Based on angular-material <a href="https://material.angularjs.org/latest/demo/input">md-input-container</a>.<br>
     *
     * <br>
     * Design version: 1.1<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-678">HALO-678</a> <br>
     *
     * @example
    <example module="vInputExample" deps="" animate="false">
    <file name="index.html">

        <div ng-controller="ExampleController as exampleController">

            Model: {{exampleController.model}}
            <br>

            <v-input model="exampleController.model"></v-input>
            <br>

            <v-input ng-disabled="true" label="Disabled"></v-input>
            <br>

            <v-input label="Label" model="exampleController.model"></v-input>
            <br>

            <v-input label="Number type" type="number"></v-input>
            <br>

            <v-input label="Phone input (999) 999-9999"
                model="phoneModel"
                mask-clean="true"
                mask-mask="(999) 999-9999"></v-input>
            <div>
            Clean Model: {{phoneModel}}
            </div>
            <br>

             <v-input label="Email pattern" pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"></v-input>
             <br>

            <v-input label="From 0 to 100"
                type="number"
                min="0"
                max="100"></v-input>
            <br>

             <v-input label="Decimal is 3"
                 type="number"
                 min="0"
                 max="100"
                 decimal="3"></v-input>
             <br>


            <form name="form">
                <v-input label="Required field" required="true" form="form"></v-input>
            </form>

            <v-input clear-btn="true"></v-input>
            <v-input clear-btn="true" label="With label"></v-input>
        </div>

    </file>
    <file name="script.js">
        angular.module('vInputExample', ['ngHaloUiLibrary']).controller('ExampleController', function () {
            this.model = null;
        });
    </file>
     <file name="style.css">
        .v-Input-Input {
            min-width: 180px;
        }
     </file>
    </example>
     *
     **/
    var VInput = (function () {
        function VInput() {
            var _this = this;
            this.restrict = 'E';
            this.templateUrl = 'components/vInput/vInput.html';
            this.controller = NgHaloUiLibrary.VInputController;
            this.controllerAs = 'inputVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                model: '=?',
                label: '@?',
                maskMask: '@?',
                maskClean: '@?',
                maskRestrict: '@?',
                min: '=?',
                max: '=?',
                decimal: '@?',
                pattern: '@?',
                type: '@?',
                name: '@?',
                form: '=?',
                ngDisabled: '=?',
                required: '@?',
                errorMessage: '@?',
                placeholder: '@?',
                clearBtn: '=?'
            };
            this.compile = function (element, attr) {
                if (attr.maskMask) {
                    element.find('input').attr('mask', attr.maskMask);
                }
                if (attr.decimal) {
                    element.find('input').attr('ng-pattern', '/^\\d+(\\.[0-9]{1,' + attr.decimal + '})?$/');
                }
                if (attr.pattern) {
                    element.find('input').attr('ng-pattern', attr.pattern);
                }
                return _this;
            };
        }
        VInput.factory = function () {
            return function () { return new VInput(); };
        };
        return VInput;
    }());
    NgHaloUiLibrary.VInput = VInput;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VInputController = (function () {
        function VInputController($scope) {
            this.type = this.type || 'text';
            this.name = this.name || 'input_' + $scope.$id;
            this.messageRequired = this.messageRequired || 'ngHaloUiLibrary.vInputMessageRequired';
        }
        return VInputController;
    }());
    NgHaloUiLibrary.VInputController = VInputController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VLinkController = (function () {
        function VLinkController() {
        }
        return VLinkController;
    }());
    NgHaloUiLibrary.VLinkController = VLinkController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-link
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard link.
     *
     * <br>
     * Design version: 1.1<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-672">HALO-672</a> <br>
     *
     * @example
    <example module="vLinkExample" deps="" animate="false">
    <file name="index.html">
        <div ng-controller="ExampleController as exampleController">
            <v-link href="/">Standard link</v-link><br />
            <v-link href="/" ng-disabled="true">Inactive link</v-link><br />
            <v-link ng-click="exampleController.action($event)">Link without href</v-link><br />
            <v-link ng-disabled="true">Inactive link without href</v-link>
        </div>
    </file>
    <file name="script.js">
        angular.module('vLinkExample', ['ngHaloUiLibrary']).controller('ExampleController', function () {
            this.action = function(event){
                alert('Was click');
                event.stopPropagation();
            };
     });;
    </file>
    </example>
     *
     **/
    var VLink = (function () {
        function VLink() {
            this.restrict = 'E';
            this.templateUrl = 'components/vLink/vLink.html';
            this.controller = NgHaloUiLibrary.VLinkController;
            this.controllerAs = 'linkVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                ngDisabled: '=?',
                href: '@'
            };
        }
        VLink.factory = function () {
            return function () { return new VLink(); };
        };
        return VLink;
    }());
    NgHaloUiLibrary.VLink = VLink;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-menu
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     *  Standard menu
     *
     * <br>
     * Design version: 1.2<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-677">HALO-677</a> <br>
     *
     * @example
     <example module="vMenuExample" deps="" animate="false">
     <file name="index.html">
         <div ng-controller="ExampleController as exampleController">
             <h3>Simple menu example:</h3><br/>
             <v-menu>
                 <md-menu>
                     <md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()">
                        <v-icon icon="list-view" class="v-Example-Icon"></v-icon>
                     </md-button>
                     <md-menu-content width="2" class="v-Menu-Content">
                         <md-menu-item>
                             <md-button>
                                Sort by time
                             </md-button>
                         </md-menu-item>
                         <md-menu-item>
                             <md-button>
                                Sort by date
                             </md-button>
                         </md-menu-item>
                         <md-menu-item>
                             <md-button>
                                Sort by patient
                             </md-button>
                         </md-menu-item>
                         <md-menu-item>
                             <md-button>
                                Sort by doctor
                             </md-button>
                         </md-menu-item>
                     </md-menu-content>
                 </md-menu>
             </v-menu>
             <br>
             <br>

             <h3>Simple menu example with dividers and disebled item:</h3><br/>
             <v-menu>
                 <md-menu>
                     <md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()">
                        <v-icon icon="list-view" class="v-Example-Icon"></v-icon>
                     </md-button>
                     <md-menu-content width="2" class="v-Menu-Content">
                         <md-menu-item>
                             <md-button>
                                Menu item
                             </md-button>
                         </md-menu-item>
                         <md-menu-item>
                             <md-button>
                                Menu item
                             </md-button>
                         </md-menu-item>
                         <md-menu-item>
                             <md-button>
                                Menu item
                             </md-button>
                         </md-menu-item>
                        <md-menu-divider></md-menu-divider>
                         <md-menu-item>
                             <md-button>
                                Menu item
                             </md-button>
                         </md-menu-item>
                         <md-menu-item>
                             <md-button disabled="disabled">
                                Menu item disabled
                             </md-button>
                     </md-menu-item>
                     </md-menu-content>
                 </md-menu>
             </v-menu>
             <br>
             <br>

             <h3>Multi-level menu with selecable item example:</h3>
             <div layout="row"  layout-align="space-between center">
                 <v-menu>
                     <md-menu>
                        <md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()">
                            <v-icon icon="list-view" class="v-Example-Icon"></v-icon>
                        </md-button>
                         <md-menu-content class="v-Menu-Content v-Menu-MultimenuContent">
                             <md-menu-item>
                                 <md-button>
                                    Menu item
                                 </md-button>
                             </md-menu-item>
                             <md-menu-item>
                                 <md-menu md-offset="-7 0">
                                     <md-button  ng-click="$mdOpenMenu()">
                                        Hilited menu with sub
                                        <v-icon icon="arrow-left" class="v-Example-Icon"></v-icon>
                                     </md-button>
                                     <md-menu-content class="v-Menu-Content">
                                        <md-menu-item>
                                            <md-button>
                                                Menu item
                                            </md-button>
                                        </md-menu-item>
                                         <md-menu-item>
                                             <md-button>
                                                Menu item
                                             </md-button>
                                         </md-menu-item>
                                         <md-menu-item>
                                             <md-button>
                                                Menu item
                                             </md-button>
                                         </md-menu-item>
                                         <md-menu-item>
                                             <md-button>
                                                Menu item
                                             </md-button>
                                         </md-menu-item>
                                     </md-menu-content>
                                 </md-menu>
                             </md-menu-item>
                             <md-menu-item>
                                 <md-button>
                                    Menu item
                                 </md-button>
                             </md-menu-item>
                             <md-menu-item>
                                 <md-button>
                                    Menu item
                                 </md-button>
                             </md-menu-item>
                             <md-menu-item class="v-Menu-MultimenuContent-SelectableItem" ng-click="exampleController.toggleItem()">
                                 <md-button>
                                    <v-icon ng-show="exampleController.itemChecked" icon="checkmark"></v-icon>
                                    Selectable toggle
                                 </md-button>
                             </md-menu-item>
                             <md-menu-item>
                                 <md-button>
                                    Menu item
                                 </md-button>
                             </md-menu-item>
                         </md-menu-content>
                     </md-menu>
                 </v-menu>
                 <v-menu>
                     <md-menu>
                         <md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()">
                            <v-icon icon="list-view" class="v-Example-Icon"></v-icon>
                         </md-button>
                         <md-menu-content class="v-Menu-Content v-Menu-MultimenuContent">
                             <md-menu-item>
                                 <md-button>
                                    Menu item
                                 </md-button>
                             </md-menu-item>
                             <md-menu-item>
                                 <md-menu md-offset="7 0">
                                     <md-button  ng-click="$mdOpenMenu()">
                                         Hilited menu with sub
                                         <v-icon icon="arrow-left" class="v-Example-Icon"></v-icon>
                                     </md-button>
                                     <md-menu-content class="v-Menu-Content">
                                         <md-menu-item>
                                             <md-button>
                                                Menu item
                                             </md-button>
                                         </md-menu-item>
                                         <md-menu-item>
                                             <md-button>
                                                Menu item
                                             </md-button>
                                         </md-menu-item>
                                         <md-menu-item>
                                             <md-button>
                                                Menu item
                                             </md-button>
                                         </md-menu-item>
                                         <md-menu-item>
                                             <md-button>
                                                Menu item
                                             </md-button>
                                         </md-menu-item>
                                     </md-menu-content>
                                 </md-menu>
                             </md-menu-item>
                             <md-menu-item>
                                 <md-button>
                                    Menu item
                                 </md-button>
                             </md-menu-item>
                             <md-menu-item>
                                 <md-button>
                                    Menu item
                                 </md-button>
                             </md-menu-item>
                             <md-menu-item class="v-Menu-MultimenuContent-SelectableItem" ng-click="exampleController.toggleItem()">
                                 <md-button>
                                    <v-icon ng-show="exampleController.itemChecked" icon="checkmark"></v-icon>
                                    Selectable toggle
                                 </md-button>
                             </md-menu-item>
                             <md-menu-item>
                                 <md-button>
                                    Menu item
                                 </md-button>
                             </md-menu-item>
                         </md-menu-content>
                     </md-menu>
                 </v-menu>
             </div>
             <br>
             <br>

             <h3>Special menu with icons:</h3>
             <v-menu>
                 <md-menu>
                     <md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()">
                        <v-icon icon="list-view" class="v-Example-Icon"></v-icon>
                     </md-button>
                     <md-menu-content width="4" class="v-Menu-Content v-Menu-Icons">
                         <md-menu-item>
                             <md-button>
                                <v-icon icon="checkmark"></v-icon>
                                 New Task
                             </md-button>
                         </md-menu-item>
                         <md-menu-item>
                             <md-button>
                                <v-icon icon="datepicker"></v-icon>
                                New message
                             </md-button>
                         </md-menu-item>
                         <md-menu-item>
                             <md-button>
                                <v-icon icon="cross"></v-icon>
                                New Appointment
                             </md-button>
                         </md-menu-item>
                         <md-menu-item>
                             <md-button>
                                <v-icon icon="medications"></v-icon>
                                New Survey
                             </md-button>
                         </md-menu-item>
                         <md-menu-item>
                             <md-button>
                                <v-icon icon="pin"></v-icon>
                                New Note
                             </md-button>
                         </md-menu-item>
                     </md-menu-content>
                 </md-menu>
             </v-menu>
             <br>
             <br>

             <h3>Special menu with html:</h3>
             <v-menu>
                 <md-menu>
                     <md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()">
                        <v-icon icon="list-view" class="v-Example-Icon"></v-icon>
                     </md-button>
                     <md-menu-content width="6" height="200" class="v-Menu-Content v-Menu-HTML">
                         <md-menu-item ng-repeat="team in exampleController.teamsList">
                             <md-button ng-click="exampleController.checkTeams(team.id);"  md-prevent-menu-close>
                                <v-icon icon="{{team.icon}}"></v-icon>
                                {{team.title}}
                             </md-button>
                         </md-menu-item>
                         <md-menu-divider></md-menu-divider>
                         <md-menu-item class="v-Menu-HTML-Content">
                             <md-list>
                                 <md-subheader>
                                    <div layout="row" layout-align="space-between">
                                        <span>Patient</span>
                                        <v-select text-field="title"
                                            value-field="id"
                                            data="exampleController.selectSpecialData"
                                            placeholder="Special structure"  z-index-up="true"></v-select>
                                    </div>
                                 </md-subheader>
                                 <md-list-item ng-repeat="item in exampleController.patientsList">
                                    <md-button>
                                        <v-icon icon="{{item.icon}}"></v-icon>
                                         <div class="md-list-item-text">
                                            {{item.name}}
                                         </div>
                                    </md-button>
                                 </md-list-item>
                             </md-list>
                         </md-menu-item>
                     </md-menu-content>
                 </md-menu>
             </v-menu>
         </div>
     </file>
     <file name="script.js">
        angular.module('vMenuExample', ['ngHaloUiLibrary']).controller('ExampleController', function () {

                this.itemChecked=true;

                this.toggleItem = function(){
                    this.itemChecked = !this.itemChecked;
                };

                this.checkTeams = function(id){
                    switch (id) {
                        case 1:
                            this.patientsList=this.patientsListAll;
                            break;
                        case 2:
                            this.patientsList=this.patientsListTeamA;
                            break;
                        case 3:
                            this.patientsList=this.patientsListTeamB;
                            break;
                    }
                };

                this.selectSpecialData = [
                   {title: 'Special structure 1', id: 1},
                   {title: 'Special structure 2', id: 2},
                   {title: 'Special structure 3', id: 3}
                ];

                this.teamsList = [
                   {title: 'All my patients', id: 1, icon: 'clock'},
                   {title: 'Care Team A', id: 2, icon: 'clock'},
                   {title: 'Care Team B', id: 3, icon: 'clock'}
                ];

                this.patientsListAll = [
                   {name: 'Anna Lachoff', id: 1, countNewMessage: 0, icon: 'clock'},
                   {name: 'Rossi White', id: 2, countNewMessage: 0, icon: 'clock'},
                   {name: 'Henrietta Morgenstern', id: 3, countNewMessage: 2, icon: 'clock'},
                   {name: 'Beth Smith', id: 4, countNewMessage: 0, icon: 'clock'},
                   {name: 'Hazel Taylor', id: 5, countNewMessage: 3, icon: 'clock'},
                   {name: 'Adam Kitrilokis', id: 6, countNewMessage: 0, icon: 'clock'},
                   {name: 'Ben Lynn', id: 7, countNewMessage: 0, icon: 'clock'},
                   {name: 'Maria Fuentealba', id: 8, countNewMessage: 1, icon: 'clock'}
                ];

                this.patientsListTeamA = [
                   {name: 'Anna Lachoff', id: 1, countNewMessage: 0, icon: 'clock'},
                   {name: 'Rossi White', id: 2, countNewMessage: 0, icon: 'clock'},
                   {name: 'Henrietta Morgenstern', id: 3, countNewMessage: 2, icon: 'clock'},
                   {name: 'Beth Smith', id: 4, countNewMessage: 0, icon: 'clock'}
                ];

                this.patientsListTeamB = [
                   {name: 'Hazel Taylor', id: 5, countNewMessage: 3, icon: 'clock'},
                   {name: 'Adam Kitrilokis', id: 6, countNewMessage: 0, icon: 'clock'},
                   {name: 'Ben Lynn', id: 7, countNewMessage: 0, icon: 'clock'},
                   {name: 'Maria Fuentealba', id: 8, countNewMessage: 1, icon: 'clock'}
                ];

                this.patientsList=this.patientsListAll;
        });
     </file>
     </example>
     *
     **/
    var VMenu = (function () {
        function VMenu() {
            this.restrict = 'E';
            this.templateUrl = 'components/vMenu/vMenu.html';
            this.controller = NgHaloUiLibrary.VMenuController;
            this.controllerAs = 'menuVm';
            this.bindToController = true;
            this.transclude = true;
        }
        VMenu.factory = function () {
            return function () { return new VMenu(); };
        };
        return VMenu;
    }());
    NgHaloUiLibrary.VMenu = VMenu;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VMenuController = (function () {
        function VMenuController() {
        }
        return VMenuController;
    }());
    NgHaloUiLibrary.VMenuController = VMenuController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-progress-linear
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard progress bar.
     * Extended from angular-material <a href="https://material.angularjs.org/latest/demo/progressLinear">md-progress-linear</a>.<br>
     *
     * <br>
     * Design version: 1.1 ( UI-Controls-Progress-Bar-1.1.pdf )<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-680">HALO-680</a>, <a href="https://vocscs.atlassian.net/browse/HALO-753">HALO-753</a> <br>
     *
     * @example
    <example module="vProgressLinearExample" deps="" animate="false">
    <file name="index.html">
        <div ng-controller="ExampleController as exampleController">
        <h3>Progress with determinate mode:</h3>
        <div>value: {{exampleController.determinateValue}}</div>
        <v-progress-linear value="exampleController.determinateValue"></v-progress-linear>
        <br/>
        <br/>
        <h3>Progress with indeterminate mode:</h3>
        <v-progress-linear></v-progress-linear>
        </div>
    </file>
    <file name="script.js">
        angular.module('vProgressLinearExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($scope, $interval) {
            var self = this;
            this.determinateValue = 0;
            $interval(function() {
                self.determinateValue += 1;
                if (self.determinateValue > 100) {
                  self.determinateValue = 0;
                }
              }, 200);
         });
    </file>
    </example>
     *
     **/
    var VProgressLinear = (function () {
        function VProgressLinear() {
            this.restrict = 'E';
            this.templateUrl = 'components/vProgressLinear/vProgressLinear.html';
            this.controller = NgHaloUiLibrary.VProgressLinearController;
            this.controllerAs = 'progressLinearVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                value: '=?'
            };
        }
        VProgressLinear.factory = function () {
            return function () { return new VProgressLinear(); };
        };
        return VProgressLinear;
    }());
    NgHaloUiLibrary.VProgressLinear = VProgressLinear;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VProgressLinearController = (function () {
        function VProgressLinearController() {
        }
        return VProgressLinearController;
    }());
    NgHaloUiLibrary.VProgressLinearController = VProgressLinearController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-radio-button
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard radio button.
     * Extended from angular-material <a href="https://material.angularjs.org/latest/demo/radioButton">md-radio-button</a>.<br>
     *
     * <br>
     * Design version: 1.2 ( UI-Controls-Checkbox-Radio-Button-1.2.pdf )<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-681">HALO-681</a> <br>
     *
     * @example
     <example module="vRadioButtonExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController">

     Model: {{exampleController.model}}
     <br>
     <br>

     <v-radio-group model="exampleController.model">
         <v-radio-button value="1">Choice</v-radio-button>
         <v-radio-button value="2">Selected choice</v-radio-button>
         <v-radio-button value="3" ng-disabled="true">Inactive</v-radio-button>
     </v-radio-group>
     <br>
     <v-radio-group model="1">
        <v-radio-button value="1" ng-disabled="true">Inactive, selected</v-radio-button>
     </v-radio-group>

     <h3>Horizontal</h3>
     <v-radio-group class="v-Example-RadioGroup_Horizontal v-RadioGroup_Horizontal">
         <v-radio-button value="a">A</v-radio-button>
         <v-radio-button value="b">B</v-radio-button>
         <v-radio-button value="c">C</v-radio-button>
         <v-radio-button value="d">D</v-radio-button>
     </v-radio-group>
     <br>
     <br>

     <h3>Horizontal ratings</h3>
     <div class="v-Example-RatingHeader">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
     </div>
     <v-radio-group class="v-Example-RadioGroup_Rating v-RadioGroup_Horizontal">
         <v-radio-button value="1"></v-radio-button>
         <v-radio-button value="2"></v-radio-button>
         <v-radio-button value="3"></v-radio-button>
         <v-radio-button value="4"></v-radio-button>
     </v-radio-group>
     <v-radio-group class="v-Example-RadioGroup_Rating v-RadioGroup_Horizontal">
         <v-radio-button value="1"></v-radio-button>
         <v-radio-button value="2"></v-radio-button>
         <v-radio-button value="3"></v-radio-button>
         <v-radio-button value="4"></v-radio-button>
     </v-radio-group>
     <v-radio-group class="v-Example-RadioGroup_Rating v-RadioGroup_Horizontal">
         <v-radio-button value="1"></v-radio-button>
         <v-radio-button value="2"></v-radio-button>
         <v-radio-button value="3"></v-radio-button>
         <v-radio-button value="4"></v-radio-button>
     </v-radio-group>

     </file>
     <file name="script.js">

     angular.module('vRadioButtonExample', ['ngHaloUiLibrary']).controller('ExampleController', function () {
        this.model = 2;
     });

     </file>
     <file name="styles.css">

     .v-Example-RadioGroup_Horizontal {
        width: 276px;
     }

     .v-Example-RadioGroup_Rating {
        width: 208px;
        display: block;
     }

     .v-Example-RatingHeader {
        display: flex;
        justify-content: space-between;

        width: 193px;

        margin-bottom: 5px;
        padding-left: 4px;
        box-sizing: border-box;

        font-family: Roboto;
        font-size: 14px;
     }

     </file>
     </example>
     *
     **/
    var VRadioButton = (function () {
        function VRadioButton() {
            this.restrict = 'E';
            this.templateUrl = 'components/vRadioButton/vRadioButton.html';
            this.controller = NgHaloUiLibrary.VRadioButtonController;
            this.controllerAs = 'radioButtonVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                ngDisabled: '=?',
                value: '@?'
            };
        }
        VRadioButton.factory = function () {
            return function () { return new VRadioButton(); };
        };
        return VRadioButton;
    }());
    NgHaloUiLibrary.VRadioButton = VRadioButton;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VRadioButtonController = (function () {
        function VRadioButtonController() {
        }
        return VRadioButtonController;
    }());
    NgHaloUiLibrary.VRadioButtonController = VRadioButtonController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-radio-group
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Group for radio buttons.
     * Extended from angular-material <a href="https://material.angularjs.org/latest/demo/radioButton">md-radio-group</a>.<br>
     *
     * <br>
     * Design version: 1.2 ( UI-Controls-Checkbox-Radio-Button-1.2.pdf )<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-681">HALO-681</a> <br>
     *
     * @example
     <example module="vRadioGroupExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController">

     Model: {{exampleController.groupModel}}
     <br>
     <br>

     <v-radio-group  model="exampleController.groupModel" change="exampleController.changeAction()">
         <v-radio-button value="1">Radio 1</v-radio-button>
         <v-radio-button value="2">Radio 2</v-radio-button>
     </v-radio-group>

     </file>
     <file name="script.js">

     angular.module('vRadioGroupExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($timeout) {
        this.groupModel = null;
        var self = this;
        this.changeAction = function(){
            var that = this;
            $timeout(function(){
                alert('Change to '+ that.groupModel);
            });

        };
     });

     </file>
     </example>
     *
     **/
    var VRadioGroup = (function () {
        function VRadioGroup() {
            this.restrict = 'E';
            this.templateUrl = 'components/vRadioGroup/vRadioGroup.html';
            this.controller = NgHaloUiLibrary.VRadioGroupController;
            this.controllerAs = 'radioGroupVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                model: '=?',
                change: '&?'
            };
        }
        VRadioGroup.factory = function () {
            return function () { return new VRadioGroup(); };
        };
        return VRadioGroup;
    }());
    NgHaloUiLibrary.VRadioGroup = VRadioGroup;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VRadioGroupController = (function () {
        function VRadioGroupController() {
        }
        return VRadioGroupController;
    }());
    NgHaloUiLibrary.VRadioGroupController = VRadioGroupController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-search
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard link.
     *
     * <br>
     * Design version: 1.1<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-1701">HALO-1701</a> <br>
     *
     * @example
    <example module="vSearchExample" deps="" animate="false">
    <file name="index.html">
        <div ng-controller="ExampleController as exampleController">

            <div layout="row">
                <div flex="20">Mode:</div>
                <div flex="20">{{exampleController.mode || 'Default'}}</div>
                <div flex><v-button ng-click="exampleController.mode ? exampleController.mode = null : exampleController.mode = 'Slide'">Toggle mode</v-button></div>
            </div>
            <br/>
            <div class="example" ng-class="{'example-slide':  exampleController.mode === 'Slide'}" layout="row" layout-align="space-between center">
                <v-search
                    search-method="exampleController.search"
                    search-text="exampleController.searchText"
                    placeholder="Search"
                    mode="exampleController.mode">
                    <v-search-not-found class="example-not-found">
                        <div class="example-not-found-row">No matches.</div>
                        <div class="example-not-found-row">
                            You can add <b>{{exampleController.searchText}}</b> as a custom allergen.
                            <span class="example-not-found-highlight">Custom allergens are not included in any screening.</span>
                            <div class="example-not-found-row-sub">
                                <v-button ng-click="exampleController.action()">Add custom allergen</v-button>
                            </div>
                        </div>
                    </v-search-not-found>
                </v-search>

                <v-search placeholder="No autocomplete"
                          mode="exampleController.mode"></v-search>
            </div>
            <div class="example" ng-class="{'example-slide':  exampleController.mode === 'Slide'}" layout="row" layout-align="space-between center">
             <div>
                Search with delay:
                 <v-search
                     search-method="exampleController.search"
                     search-text="exampleController.searchText"
                     placeholder="Search"
                     mode="exampleController.mode"
                     delay="1000">
                     <v-search-not-found class="example-not-found">
                         <div class="example-not-found-row">No matches.</div>
                             <div class="example-not-found-row">
                                 You can add <b>{{exampleController.searchText}}</b> as a custom allergen.
                                 <span class="example-not-found-highlight">Custom allergens are not included in any screening.</span>
                                 <div class="example-not-found-row-sub">
                                 <v-button ng-click="exampleController.action()">Add custom allergen</v-button>
                             </div>
                         </div>
                     </v-search-not-found>
                 </v-search>
                </div>
            </div>

        </div>
    </file>
    <file name="style.css">

        .example {
            height: 40px;
            padding-left: 6px;
        }

        .example-slide {
            background-color: #F5F5F5;

        }

        .example-not-found {
            width: 240px;
            line-height: 20px;
            font-weight: 300;
        }
        .example-not-found-row {
            padding: 15px 20px;
            margin: 0;
            border-bottom: 1px solid #d9d9d9;
        }

        .example-not-found-p:last-child {
            border-bottom: 0 none;
        }

        .example-not-found-highlight {
            color: #e72100;
        }

        .example-not-found-row-sub {
            padding: 10px 0 0;
            text-align: right;
        }
    </file>
    <file name="script.js">
        angular.module('vSearchExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($filter, $scope) {

            var autocompleteData = ['Suggestion 1', 'Suggestion 2', 'Text 1', 'Text 2'];

            this.search = function (input) {
                return $filter('filter')(autocompleteData, input);
            };

            this.action = function () {
                alert('Action');
            };

        });
    </file>
    </example>
     *
     **/
    var VSearch = (function () {
        function VSearch() {
            this.restrict = 'E';
            this.templateUrl = 'components/vSearch/vSearch.html';
            this.transclude = true;
            this.controller = NgHaloUiLibrary.VSearchController;
            this.controllerAs = 'searchVm';
            this.bindToController = true;
            this.scope = {
                searchMethod: '=',
                searchText: '=?',
                mode: '=?',
                placeholder: '@?',
                delay: '@?'
            };
        }
        VSearch.factory = function () {
            return function () { return new VSearch(); };
        };
        return VSearch;
    }());
    NgHaloUiLibrary.VSearch = VSearch;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VSearchController = (function () {
        function VSearchController($scope, $element, $document) {
            var _this = this;
            this.$scope = $scope;
            this.$element = $element;
            this.onClickBody = function (e) {
                if (NgHaloUiLibrary.DomUtils.isEqualOrContains(e.target, _this.$element) ||
                    (VSearchController.EXCLUDE_SELECT_SELECTOR &&
                        NgHaloUiLibrary.DomUtils.isMatchSelector(e.target, VSearchController.EXCLUDE_SELECT_SELECTOR))) {
                    return;
                }
                _this.bodyEl.removeEventListener('click', _this.onClickBody, true);
                _this.$scope.$apply(function () { return _this.isFocused = false; });
            };
            this.$scope = $scope;
            this.$element = $element;
            this.bodyEl = $document.find('body').get(0);
            this.$element[0].addEventListener('click', function () {
                if (!_this.isFocused) {
                    _this.$scope.$apply(function () { return _this.isFocused = true; });
                    _this.bodyEl.addEventListener('click', _this.onClickBody, true);
                }
            });
        }
        VSearchController.EXCLUDE_SELECT_SELECTOR = '.v-Search-Menu *';
        return VSearchController;
    }());
    NgHaloUiLibrary.VSearchController = VSearchController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-select
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Select menu component.
     * Extended from angular-material <a href="https://material.angularjs.org/latest/demo/select">md-select</a>.<br>
     *
     * <br>
     * Design version: 1.1 ( UI-Controls-Dropdown-1.1.ai )<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-671">HALO-671</a> <br>
     *
     * @example
     <example module="vSelectExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController">
        Model: {{exampleController.selectedItem1}}<br>
        V-select header level with onchange event:<br />
        <div layout="row" layout-align="space-between">
            <v-select class="v-Select-HeaderView" no-border="true" model="exampleController.selectedItem1" data="exampleController.selectData" placeholder="example.vSelectPlaceholder" model-change="exampleController.change()"></v-select>
            <v-select  ng-disabled="true" class="v-Select-HeaderView" no-border="true" model="exampleController.selectedItem2" data="exampleController.selectData" placeholder="Disabled"></v-select><br />
        </div>
        V-select body level:<br />
        <v-select no-border="true" model="exampleController.selectedItem3" data="exampleController.selectData" placeholder="example.vSelectPlaceholder" tooltip="true"></v-select><br>
        <v-select ng-disabled="true" data="exampleController.selectData" placeholder="Disabled"></v-select>
        <v-select data="exampleController.selectDataWithSeparator" placeholder="Select item froum groups"></v-select><br>
        <v-select data="exampleController.selectData" placeholder="Top header or body selector"></v-select><br>
        <v-select text-field="title" value-field="id" data="exampleController.selectSpecialData" placeholder="Special structure"></v-select><br>
        <v-select data="exampleController.selectLongIssuesData" placeholder="Long issues"></v-select><br>
        <v-select data="exampleController.selectData" placeholder="Select wit label" label="Label"></v-select><br>
        <form name="form">
            <v-select data="exampleController.selectRequiredData"
            label="Label"
            required="true"
            form="form"
            placeholder="Required field"
            name="requiredSelect"></v-select><br>
        </form>
        <br>
     </div>

     </file>
     <file name="script.js">

     angular.module('vSelectExample', ['ngHaloUiLibrary']).controller('ExampleController', function () {
        this.selectedItem1 = null;
        this.selectedItem2 = null;
        this.selectedItem3 = null;

        this.selectData = [
            {text: 'Item 1', code: 1},
            {text: 'Item 2', code: 2},
            {text: 'Item 3', code: 3}
        ];

        this.selectDataWithSeparator = [
            {text: 'Item 1', code: 1},
            {text: 'Item 2', code: 2},
            {text: 'Item 3', code: 3, separatorAfter: true},
            {text: 'Item 4', code: 4},
            {text: 'Item 5', code: 5}
        ];

        this.selectSpecialData = [
            {title: 'Text 1', id: 1},
            {title: 'Text 2', id: 2},
            {title: 'Text 3', id: 3}
        ];

        this.selectLongIssuesData = [
            {text: 'Long text 1', code: 1},
            {text: 'Long text 2', code: 2},
            {text: 'Long text 3', code: 3}
        ];

        this.selectRequiredData = [
            {text: 'Item 1', code: 1},
            {text: 'Item 2', code: 2},
            {text: 'Item 3', code: 3}
        ];
        this.change = function(){
           alert('On change');
        };
     });

     </file>
     <file name="style.css">
     v-select{
        margin: 10px;
     }
     </file>
     </example>
     *
     **/
    var VSelect = (function () {
        function VSelect() {
            this.restrict = 'E';
            this.templateUrl = 'components/vSelect/vSelect.html';
            this.controller = NgHaloUiLibrary.VSelectController;
            this.controllerAs = 'selectVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                model: '=?',
                data: '=',
                valueField: '@?',
                textField: '@?',
                ngDisabled: '=?',
                placeholder: '@?',
                form: '=?',
                required: '@?',
                name: '@?',
                label: '@?',
                zIndexUp: '=?',
                tooltip: '@?',
                defaultOption: '@?',
                noBorder: '@?',
                modelChange: '&?',
                containerClass: '@?'
            };
        }
        VSelect.factory = function () {
            return function () { return new VSelect(); };
        };
        return VSelect;
    }());
    NgHaloUiLibrary.VSelect = VSelect;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VSelectController = (function () {
        function VSelectController($timeout) {
            this.style = {};
            this.timeout = $timeout;
            this.placeholder = this.placeholder || 'ngHaloUiLibrary.vSelectPlaceholder';
            this.valueField = this.valueField || VSelectController.DEFAULT_VALUE_FIELD;
            this.textField = this.textField || VSelectController.DEFAULT_TEXT_FIELD;
            this.messageRequired = this.messageRequired || 'ngHaloUiLibrary.vSelectMessageRequired';
            this.classesToContainer = 'v-Select-SelectContainer';
            if (this.zIndexUp) {
                this.classesToContainer += ' v-Select-SelectContainer_zIndexUp';
            }
            if (this.containerClass) {
                this.classesToContainer += ' ' + this.containerClass;
            }
        }
        VSelectController.prototype.onChange = function () {
            if (this.defaultOption && this.model === '') {
                this.text = this.defaultOption;
            }
            else {
                this.text = this.getTextByModel();
            }
            if (this.modelChange) {
                this.timeout(this.modelChange);
            }
        };
        VSelectController.prototype.getTextByModel = function () {
            var _this = this;
            var found = this.data.filter(function (item) {
                return (_this.model === ('' + item[_this.valueField]));
            });
            if (!found.length) {
                throw new Error('VSelectController: Text not found for model: ' + this.model);
            }
            return found[0][this.textField];
        };
        VSelectController.DEFAULT_VALUE_FIELD = 'code';
        VSelectController.DEFAULT_TEXT_FIELD = 'text';
        return VSelectController;
    }());
    NgHaloUiLibrary.VSelectController = VSelectController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-spinner
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard spinner.
     * Extended from angular-material <a href="https://material.angularjs.org/latest/demo/progressCircular">md-progress-circular</a>.<br>
     *
     * <br>
     * Design version: 1.1 ( UI-Controls-Progress-Spinner-1.1.pdf )<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-688">HALO-688</a><br>
     *
     * @example
    <example module="vSpinnerExample" deps="" animate="false">
    <file name="index.html">
     <div ng-controller="ExampleController as exampleController">
        <h3>Spinner with determinate mode:</h3>
        <div>value: {{exampleController.determinateValue}}</div>
        <v-spinner value="exampleController.determinateValue"></v-spinner>
        <br/>
        <br/>
        <h3>Spinner with indeterminate mode:</h3>
        <v-spinner></v-spinner>
     </div>
    </file>
    <file name="script.js">
        angular.module('vSpinnerExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($scope, $interval) {
            var self = this;
            this.determinateValue = 0;
            $interval(function() {
                self.determinateValue += 1;
                if (self.determinateValue > 100) {
                  self.determinateValue = 0;
                }
              }, 200);
         });
    </file>
    </example>
     *
     **/
    var VSpinner = (function () {
        function VSpinner() {
            this.restrict = 'E';
            this.templateUrl = 'components/vSpinner/vSpinner.html';
            this.controller = NgHaloUiLibrary.VSpinnerController;
            this.controllerAs = 'spinnerVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                value: '=?'
            };
        }
        VSpinner.factory = function () {
            return function () { return new VSpinner(); };
        };
        return VSpinner;
    }());
    NgHaloUiLibrary.VSpinner = VSpinner;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VSpinnerController = (function () {
        function VSpinnerController() {
        }
        return VSpinnerController;
    }());
    NgHaloUiLibrary.VSpinnerController = VSpinnerController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-switch
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard switch.
     * Extended from angular-material <a href="https://material.angularjs.org/latest/demo/switch">md-switch</a>.<br>
     *
     * <br>
     * Design version: 1.2 ( UI-Controls-Toggle-1.2.pdf )<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-744">HALO-744</a> <br>
     *
     * @example
    <example module="vSwitchExample" deps="" animate="false">
    <file name="index.html">

     Model: {{exampleController.model}}
     <br>
     <br>

        <v-switch model="exampleController.model">Choice</v-switch><br>
        <v-switch ng-disabled="true">Disabled</v-switch>

    </file>
    <file name="script.js">
        angular.module('vSwitchExample', ['ngHaloUiLibrary']).controller('ExampleController', function () {
            this.model = null;
        });
    </file>
    </example>
     *
     **/
    var VSwitch = (function () {
        function VSwitch() {
            this.restrict = 'E';
            this.templateUrl = 'components/vSwitch/vSwitch.html';
            this.controller = NgHaloUiLibrary.VSwitchController;
            this.controllerAs = 'switchVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                model: '=?',
                ngDisabled: '=?'
            };
        }
        VSwitch.factory = function () {
            return function () { return new VSwitch(); };
        };
        return VSwitch;
    }());
    NgHaloUiLibrary.VSwitch = VSwitch;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VSwitchController = (function () {
        function VSwitchController() {
        }
        return VSwitchController;
    }());
    NgHaloUiLibrary.VSwitchController = VSwitchController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-table
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard table.
     *
     * <br>
     * Design version: 1.1<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-749">HALO-749</a><br>
     *
     * @example
     <example module="vTableExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController">
        <div>
            <v-button
                ng-click="exampleController.options1.bulkSelect =! exampleController.options1.bulkSelect">
                Toggle Bulk Selection
            </v-button>
        </div>
        <div class="example-layout">
             <v-table
                 options="exampleController.options1"
                 data="exampleController.data1">
             </v-table>
            <br/>
            <div>
                Selected items:
                <ul>
                    <li ng-repeat="item in exampleController.data1 | filter:{selected: true}">{{item.title}}</li>
                </ul>
            </div>
        </div>
        <div class="example-layout example-dark-bg">
             <v-table
                 options="exampleController.options2"
                 data="exampleController.data2">
             </v-table>
        </div>
     </div>
     </file>
     <file name="style.css">
        .example-layout {
            padding: 10px;
            margin-bottom: 10px;
        }

        .example-dark-bg {
            background-color: #F5F5F5;
        }
     </file>
     <file name="script.js">
     angular.module('vTableExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($scope) {
            this.options1 = {
                fields: [
                    {key: "title", title: "Title", sortable: true},
                    {key: "sortable_column", title: "Sortable column", sortable: true},
                    {key: "link", title: "Link", template: '<a ng-href="{{item.link}}">{{item.title}}</a>'}
                ],
                actions: [
                    {text: "Action 1", action: function() { alert("Action 1"); }, main: true },
                    {text: "Action 2", action: function() { alert("Action 2"); } }
                ],
                order: {field: 'order', reverse: false}
            };
            this.options2 = {
                fields: [
                    {key: "title", title: "Title", sortable: true},
                    {key: "sortable_column", title: "Sortable column", sortable: true},
                    {key: "link", title: "Link", template: '<a ng-href="{{item.link}}">{{item.title}}</a>'}
                ],
                actions: [
                    {text: "Action 1", action: function() { alert("Action 1"); }, main: true },
                    {text: "Action 2", action: function() { alert("Action 2"); } }
                ],
                order: {field: 'order', reverse: false}
            };
            this.data1 = [
                {order: 2, title: "Test", sortable_column: '1', link: 'http://test.com/22'},
                {order: 3, title: "Test 2", sortable_column: '3', link: 'http://test.com/33'},
                {order: 1, title: "Test 3", sortable_column: '2', link: 'http://test.com/66'}
            ];

            this.data2 = [
                {order: 2, title: "Test", sortable_column: '1', link: 'http://test.com/22'},
                {order: 3, title: "Test 2", sortable_column: '3', link: 'http://test.com/33'},
                {order: 1, title: "Test 3", sortable_column: '2', link: 'http://test.com/66'}
            ];
     });
     </file>
     </example>
     *
     *
     **/
    var VTable = (function () {
        function VTable() {
            this.restrict = 'E';
            this.templateUrl = 'components/vTable/vTable.html';
            this.controller = NgHaloUiLibrary.VTableController;
            this.controllerAs = 'tableVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                options: '=',
                data: '='
            };
        }
        VTable.factory = function () {
            return function () { return new VTable(); };
        };
        return VTable;
    }());
    NgHaloUiLibrary.VTable = VTable;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VTableController = (function () {
        function VTableController() {
        }
        VTableController.prototype.toggleAllSelected = function () {
            var _this = this;
            this.data.forEach(function (i) { return i.selected = _this.allSelected; });
        };
        ;
        VTableController.prototype.checkAllSelected = function () {
            var count = 0;
            this.data.forEach(function (i) { return i.selected && count++; });
            this.allSelected = count === this.data.length;
        };
        ;
        VTableController.prototype.sortableAction = function (field) {
            if (field.sortable) {
                if (!this.options.order) {
                    this.options.order = { field: '' };
                }
                if (this.options.order.field === field.key) {
                    this.options.order.reverse = !this.options.order.reverse;
                }
                else {
                    this.options.order.field = field.key;
                    this.options.order.reverse = false;
                }
            }
        };
        ;
        return VTableController;
    }());
    NgHaloUiLibrary.VTableController = VTableController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-tabs
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard tabs.
     *
     * <br>
     * Design version: 1.1<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-682">HALO-682</a><br>
     *
     * @example
     <example module="vTabsExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController">
        <v-tabs mode="exampleController.mainTabsMode">
            <md-tabs>
                 <md-tab>
                     <md-tab-label>
                        <span>Lorem ipsum dolor sit amet,</br>
                        consectetur adipisicing elit.</span>
                     </md-tab-label>
                     <md-tab-body>
                        <v-tabs mode="exampleController.subTabsMode">
                            <md-tabs>
                                <md-tab>
                                     <md-tab-label>
                                        Left Mode Item 1
                                     </md-tab-label>
                                     <md-tab-body >
                                        <md-content class="md-padding">
                                                Content 1
                                            <br/>
                                            <div>
                                                <v-button ng-click="exampleController.toggleMainTabsMode()">Toggle main tabs mode</v-button>
                                                <v-button ng-click="exampleController.toggleSubTabsMode()">Toggle sub tabs mode</v-button>
                                            </div>
                                        </md-content>
                                     </md-tab-body>
                                </md-tab>
                                <md-tab>
                                    <md-tab-label>
                                        Left Mode Item With Text 2
                                    </md-tab-label>
                                     <md-tab-body >
                                         <md-content class="md-padding">
                                             Content 2
                                             <br/>
                                             <div>
                                                 <v-button ng-click="exampleController.toggleMainTabsMode()">Toggle main tabs mode</v-button>
                                                 <v-button ng-click="exampleController.toggleSubTabsMode()">Toggle sub tabs mode</v-button>
                                             </div>
                                             <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare rutrum ante at molestie. Sed venenatis finibus elit mollis ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu erat eget neque placerat ultricies eget a risus. Vivamus venenatis sodales blandit. Donec ornare bibendum elit sit amet ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut enim ex, varius sit amet euismod at, lacinia non leo. Nullam dictum a leo in scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                             </p>
                                             <p>
                                             Nulla vulputate ut nulla vel hendrerit. Curabitur vulputate facilisis ante, sed elementum dolor. Pellentesque ut nisi et elit congue gravida. Vivamus vestibulum sed purus et ultricies. Cras vitae purus ultricies, venenatis sapien eu, suscipit enim. Suspendisse potenti. Nunc volutpat tempus maximus. Vestibulum rutrum interdum dapibus. Phasellus bibendum risus erat, non dictum nibh fringilla eget. Phasellus volutpat orci eget tortor placerat, non vulputate tellus tempus.
                                             </p>
                                             <p>
                                             Phasellus lacinia finibus diam eu cursus. Etiam vel placerat est. Vestibulum pretium tortor non tortor congue, at aliquam urna pellentesque. Curabitur magna enim, imperdiet eget ullamcorper sed, euismod sed dolor. Mauris tincidunt, mi semper egestas dignissim, purus mauris ornare mauris, sit amet egestas lectus enim ac lacus. Cras imperdiet urna ornare, tincidunt massa eu, placerat mauris. Etiam iaculis cursus libero sed suscipit. Duis a fermentum nulla, et placerat neque. Vivamus ut quam sed leo sagittis pulvinar. Nullam egestas quam bibendum quam imperdiet, non vestibulum odio varius. Proin pulvinar tellus et tellus condimentum sollicitudin.
                                             </p>
                                             <p>
                                             Ut placerat interdum lorem, ut maximus purus accumsan a. Suspendisse feugiat ex vitae erat varius vehicula. Aenean id rhoncus dui, vel cursus tortor. Donec risus ex, auctor ac nisi ac, vulputate efficitur risus. Pellentesque id mollis velit, ac ultricies purus. Ut lacinia, sem accumsan sagittis fermentum, quam leo commodo urna, eu sagittis diam tellus vitae felis. Quisque vitae quam pretium urna rhoncus egestas. Suspendisse neque augue, accumsan ac dapibus et, lobortis vel ipsum.
                                             </p>
                                             <p>
                                             Vivamus mattis, nibh id euismod auctor, lectus nunc aliquet dui, sit amet tincidunt nisl elit et dui. Praesent bibendum tortor sed odio molestie lobortis. Ut posuere diam eros, nec pretium dui volutpat eu. Donec et pharetra libero. Maecenas ut neque maximus mauris auctor placerat. In ut est in eros finibus bibendum. Sed facilisis luctus lectus, ac elementum purus condimentum in. Ut euismod risus tellus, sed eleifend elit euismod a. Maecenas tempor fermentum laoreet.
                                             </p>
                                         </md-content>
                                     </md-tab-body>
                                </md-tab>
                            </md-tabs>
                        </v-tabs>
                     </md-tab-body>
                 </md-tab>
                 <md-tab>
                     <md-tab-label>Second Item</md-tab-label>
                     <md-tab-body>
                     Content
                     </md-tab-body>
                 </md-tab>
             </md-tabs>
        </v-tabs>
     </div>
     </file>
     <file name="script.js">
     angular.module('vTabsExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($scope) {
        this.mainTabsMode = '';
        this.subTabsMode = 'Left';
        this.toggleMainTabsMode = function () {
            this.mainTabsMode = this.mainTabsMode ? undefined : 'Left';
        };
        this.toggleSubTabsMode = function () {
            this.subTabsMode = this.subTabsMode ? undefined : 'Left';
        };
     });
     </file>
     </example>
     *
     *
     **/
    var VTabs = (function () {
        function VTabs() {
            this.restrict = 'E';
            this.templateUrl = 'components/vTabs/vTabs.html';
            this.transclude = true;
            this.scope = {
                mode: '=?'
            };
        }
        VTabs.factory = function () {
            return function () { return new VTabs(); };
        };
        return VTabs;
    }());
    NgHaloUiLibrary.VTabs = VTabs;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-textarea
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard toolbar.
     *
     * <br>
     * Design version: 1.1<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-685">HALO-685</a> <br>
     *
     * @example
    <example module="vTextareaExample" deps="" animate="false">
    <file name="index.html">
        <div ng-controller="ExampleController as exampleController">
             <br />
             <v-textarea
                name="text"
                max-length="160"
                min-length="100"
                model="exampleController.model"
                label="Label"
                required="false">

             </v-textarea>

         <br />
            <v-textarea
            name="text"
            max-length="160"
            min-length="100"
            model="exampleController.model"
            label="Disabled"
            required="false"
            ng-disabled="exampleController.disable">
        </v-textarea>
        <br />
        <v-button ng-click="exampleController.disable = !exampleController.disable;">Toggle disable</v-button>
        </div>
    </file>
    <file name="script.js">
        angular.module('vTextareaExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($scope) {
            this.model = "";
            this.disable = true;
        });
    </file>
    </example>
     *
     **/
    var VTextarea = (function () {
        function VTextarea() {
            this.restrict = 'E';
            this.templateUrl = 'components/vTextarea/vTextarea.html';
            this.scope = {
                model: '=?',
                name: '@?',
                label: '@?',
                minLength: '@?',
                maxLength: '@?',
                required: '=?',
                ngDisabled: '=?'
            };
        }
        VTextarea.factory = function () {
            return function () { return new VTextarea(); };
        };
        return VTextarea;
    }());
    NgHaloUiLibrary.VTextarea = VTextarea;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-toggle
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Default toggle button. Toggle is also allowed for icon buttons.
     *
     * <br>
     * Design version: 1.2 ( UI-Controls-Toggle-1.2.pdf )<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-684">HALO-684</a> <br>
     *
     * @example
    <example module="vToggleExample" deps="" animate="false">
    <file name="index.html">

     <div ng-controller="ExampleController as exampleController">
         Model for toggle with one buttons: {{exampleController.modelOne}}

         <br>
         <br>

         <v-toggle model="exampleController.modelOne">
            <v-icon icon="pin"></v-icon>
         </v-toggle>
         <br>
         <br>

         Model for toggle with one button and text: {{exampleController.modelFive}}

         <br>
         <br>

         <v-toggle model="exampleController.modelFive">
            <div class="v-Toggle-Button_WithText"><v-icon icon="pin"></v-icon>Pin</div>
         </v-toggle>
         <br>
         <br>

         Model for toggle with buttons and text: {{exampleController.modelFour}}

         <br>
         <br>

         <v-toggle model="exampleController.modelFour">
             <div v-toggle-value="list-view" class="v-Toggle-Button_WithText"><v-icon icon="list-view"></v-icon>List View</div>
             <div v-toggle-value="icon-view" class="v-Toggle-Button_WithText"><v-icon icon="icon-view"></v-icon>Icon View</div>
         </v-toggle>
         <br>
         <br>

         Model for toggle with two buttons: {{exampleController.modelTwo}}
         <br>
         <br>

         <v-toggle model="exampleController.modelTwo">
            <v-icon icon="list-view" v-toggle-value="list-view"></v-icon>
            <v-icon icon="icon-view" v-toggle-value="icon-view"></v-icon>
         </v-toggle>

         <br>
         <br>


         Model for toggle with many buttons: {{exampleController.modelMany}}
         <br>
         <br>

         <v-toggle model="exampleController.modelMany">
             <v-icon icon="list-view" v-toggle-value="list-view"></v-icon>
             <v-icon icon="icon-view" v-toggle-value="icon-view"></v-icon>
             <v-icon icon="chain-view" v-toggle-value="chain-view"></v-icon>
         </v-toggle>

         <br>
         <br>

         Model for toggle with many buttons: {{exampleController.modelMany2}}

         <br>
         <br>

         <v-toggle model="exampleController.modelMany2">
             <v-icon icon="list-view" v-toggle-value="list-view"></v-icon>
             <v-icon icon="icon-view" v-toggle-value="icon-view"></v-icon>
             <v-icon icon="chain-view" v-toggle-value="chain-view"></v-icon>
         </v-toggle>
     </div>

    </file>
    <file name="script.js">
        angular.module('vToggleExample', ['ngHaloUiLibrary']).controller('ExampleController', function () {
            this.modelOne = true;
            this.modelTwo = null;
            this.modelMany = null;
            this.modelMany2 = "list-view";
        });
    </file>
    <file name="styles.css">

        v-button v-icon {
            margin-right: 10px;
        }

        .v-ExampleToggle-Icon {
            padding-right: 10px;
        }

        .v-ExampleToggle-Icon:last-child {
            padding-right: 0;
        }
    </file>
    </example>
     *
     **/
    var VToggle = (function () {
        function VToggle() {
            this.restrict = 'E';
            this.templateUrl = 'components/vToggle/vToggle.html';
            this.controller = NgHaloUiLibrary.VToggleController;
            this.controllerAs = 'toggleVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                model: '=',
                onToggle: '&?',
                buttonActiveClass: '@'
            };
        }
        VToggle.factory = function () {
            return function () { return new VToggle(); };
        };
        VToggle.prototype.link = function (scope, element, attrs, controller) {
            controller.link.apply(controller, arguments);
        };
        return VToggle;
    }());
    NgHaloUiLibrary.VToggle = VToggle;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VToggleController = (function () {
        function VToggleController($scope, $element, $timeout) {
            this.$scope = $scope;
            this.$element = $element;
            this.$timeout = $timeout;
            this.cssClasses = {
                button: 'v-Toggle-Button',
                buttonActive: 'v-Toggle-Button_Active'
            };
            // empty
        }
        VToggleController.prototype.link = function () {
            this.onTranscludeFinished();
        };
        VToggleController.prototype.onTranscludeFinished = function () {
            this.buttonEls = this.findButtonEls();
            this.initElements();
            this.onEvents();
            this.setupActive();
        };
        VToggleController.prototype.setupActive = function () {
            if (this.model) {
                var self = this;
                if (this.buttonEls.length > 1) {
                    angular.forEach(this.buttonEls, function (elem) {
                        if ($(elem).attr('v-toggle-value') === self.model) {
                            self.onClickButton({ 'currentTarget': elem });
                        }
                    });
                }
                else {
                    /* istanbul ignore else  */
                    if (self.model) {
                        self.onClickButton({ 'currentTarget': this.buttonEls[0] });
                    }
                }
            }
        };
        VToggleController.prototype.onEvents = function () {
            // Element events
            var _this = this;
            this.buttonEls.on('click' + VToggleController.EL_EVENT_SUFFIX, function (e) { return _this.onClickButton(e); });
        };
        VToggleController.prototype.initElements = function () {
            this.buttonEls.addClass(this.cssClasses.button);
        };
        VToggleController.prototype.onClickButton = function (e) {
            switch (this.buttonEls.length) {
                case VToggleController.COUNT_ONE_BUTTON:
                    this.onClickButtonOneButton(e);
                    break;
                default:
                    this.onClickButtonManyButtons(e);
                    break;
            }
        };
        VToggleController.prototype.onClickButtonOneButton = function (e) {
            var buttonActiveClasses = this.getButtonActiveClasses();
            var buttonEl = this.buttonEls;
            if (buttonEl.hasClass(this.cssClasses.buttonActive)) {
                buttonEl.removeClass(buttonActiveClasses);
                this.applyValue(false);
            }
            else {
                buttonEl.addClass(buttonActiveClasses);
                this.applyValue(true);
            }
            this.fireToggle(NgHaloUiLibrary.DomUtils.getDomElement(buttonEl));
        };
        VToggleController.prototype.onClickButtonManyButtons = function (e) {
            var buttonEl = e.currentTarget;
            var buttonActiveClasses = this.getButtonActiveClasses();
            this.buttonEls.removeClass(buttonActiveClasses);
            NgHaloUiLibrary.DomUtils.getAugmentedJQueryElement(buttonEl).addClass(buttonActiveClasses);
            this.applyButtonValue(buttonEl);
            this.fireToggle(buttonEl);
        };
        VToggleController.prototype.applyButtonValue = function (buttonEl) {
            var valueAttrName = 'v-toggle-value';
            if (!NgHaloUiLibrary.DomUtils.hasAttribute(buttonEl, valueAttrName)) {
                throw new Error('VToggleController: Attribute "v-toggle-value" is not defined');
            }
            var buttonValue = NgHaloUiLibrary.DomUtils.getAugmentedJQueryElement(buttonEl).attr(valueAttrName);
            this.applyValue(buttonValue);
        };
        VToggleController.prototype.applyValue = function (value) {
            var self = this;
            this.$timeout(function () {
                self.model = value;
            });
        };
        VToggleController.prototype.fireToggle = function (buttonEl) {
            var _this = this;
            if (this.onToggle) {
                this.$timeout(function () { return _this.onToggle({ event: { element: buttonEl } }); });
            }
        };
        VToggleController.prototype.getButtonActiveClasses = function () {
            return this.cssClasses.buttonActive + ' ' + (this.buttonActiveClass || '');
        };
        VToggleController.prototype.findButtonEls = function () {
            return this.$element.children('ng-transclude').children();
        };
        VToggleController.EL_EVENT_SUFFIX = '.VToggleController';
        VToggleController.COUNT_ONE_BUTTON = 1;
        return VToggleController;
    }());
    NgHaloUiLibrary.VToggleController = VToggleController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-toolbar
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Standard toolbar.
     *
     * <br>
     * Design version: 1.1<br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-685">HALO-685</a> <br>
     *
     * @example
    <example module="vToolbarExample" deps="" animate="false">
    <file name="index.html">
        <div class="demo-v-toolbar" ng-controller="ExampleController as exampleController">
             <v-toolbar>
                <v-select data="exampleController.selectData"></v-select>
                <v-select data="exampleController.selectData"></v-select>
             </v-toolbar>
        </div>
    </file>
    <file name="script.js">
        angular.module('vToolbarExample', ['ngHaloUiLibrary']).controller('ExampleController', function ($scope) {
            this.selectData = [
                {text: 'Item 1', code: 1},
                {text: 'Item 2', code: 2},
                {text: 'Item 3', code: 3}
            ];
        });
    </file>
    <file name="style.css">
        .demo-v-toolbar {
            background-color: #F5F5F5;
            min-height: 100%;
        }
    </file>
    </example>
     *
     **/
    var VToolbar = (function () {
        function VToolbar() {
            this.restrict = 'E';
            this.templateUrl = 'components/vToolbar/vToolbar.html';
            this.transclude = true;
            this.scope = {};
        }
        VToolbar.factory = function () {
            return function () { return new VToolbar(); };
        };
        return VToolbar;
    }());
    NgHaloUiLibrary.VToolbar = VToolbar;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-tooltip
     * @restrict E
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Tooltip.
     * Extended from angular-material <a href="https://material.angularjs.org/latest/demo/tooltip">md-chips</a>.<br>
     *
     * <br>
     * Design version: 1.1 <br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-686">HALO-686</a> <br>
     *
     * @example
     <example module="vTooltipExample" deps="" animate="false">
     <file name="index.html">

     <div ng-controller="ExampleController as exampleController">
        <div style="text-align: center; padding: 35px;">
        <v-button>
            Tooltip here on hover
            <v-tooltip visible="exampleController.isVisible" direction="exampleController.direction">
                Tooltip
            </v-tooltip>
        </v-button>
        </div>
        <br/>
        <br/>
        <div>
            <v-checkbox model="exampleController.isVisible">Is visible</v-checkbox>
        </div>
        <br/>
        <div>
            <v-radio-group model="exampleController.direction">
                <v-radio-button value="left">Left</v-radio-button>
                <v-radio-button value="top">Top</v-radio-button>
                <v-radio-button value="bottom">Bottom</v-radio-button>
                <v-radio-button value="right">Right</v-radio-button>
            </v-radio-group>
        </div>
     </div>

     </file>
     <file name="script.js">
     angular.module('vTooltipExample', ['ngHaloUiLibrary']).controller('ExampleController', function () {

     });
     </file>
     </example>
     *
     **/
    var VTooltip = (function () {
        function VTooltip() {
            this.restrict = 'E';
            this.templateUrl = 'components/vTooltip/vTooltip.html';
            this.controller = NgHaloUiLibrary.VTooltipController;
            this.controllerAs = 'tooltipVm';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                visible: '=?',
                direction: '=?'
            };
        }
        VTooltip.factory = function () {
            return function () { return new VTooltip(); };
        };
        return VTooltip;
    }());
    NgHaloUiLibrary.VTooltip = VTooltip;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VTooltipController = (function () {
        function VTooltipController() {
        }
        return VTooltipController;
    }());
    NgHaloUiLibrary.VTooltipController = VTooltipController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * @ngdoc directive
     * @name v-wizard
     * @restrict EA
     * @module ngHaloUiLibrary
     *
     * @description
     *
     * Wizard.
     * Extended from angular-wizard <a href="https://github.com/mgonto/angular-wizard">angular-wizard</a>.<br>
     *
     * <br>
     * Design version: 1.1 <br>
     * JIRA tickets: <a href="https://vocscs.atlassian.net/browse/HALO-1155">HALO-1155</a> <br>
     *
     * @example
     <example module="vWizardExample" deps="" animate="false">
     <file name="index.html">

     <section ng-controller="ExampleController">

     <v-button ng-click="getSteps()">Click to console current step and available steps</v-button>
     <v-wizard name="firstWizard">
            <wz-step wz-title="Selected">
                <h1>First form</h1>
                <v-button wz-next="logStep()">To the second form</v-button>
            </wz-step>
            <wz-step wz-title="Inactive" canexit="exitValidation">
                <h1>Second form</h1>
                <v-button ng-click="exitToggle()">Toggle Validation!</v-button> Value is currently: {{canExit}}
                <br><br>
                <v-button ng-click="stepToggle()">Clicking Me Will Toggle Steps On and Off Dynamically</v-button>
                <br>
                <br>
                <v-button wz-previous="logStep()">BACK</v-button>
                <v-button wz-next="logStep()">NEXT</v-button>
            </wz-step>
            <wz-step wz-title="Inactive" canexit="exitValidation" wz-disabled="{{!stepActive}}">
                <h1>Optinal form is thirdForm</h1>
                <br>
                <br>
                <v-button wz-previous="logStep()">BACK</v-button>
                <v-button wz-next="logStep()">NEXT</v-button>
            </wz-step>
            <wz-step wz-title="Inactive">
                <h1>Third form</h1>
                <v-button wz-previous="logStep()">BACK</v-button>
                <v-button wz-finish="wizardFinished()">NEXT</v-button>
                <v-button wz-reset>Reset Form</v-button>
                <v-button wz-cancel>Return to the first step</v-button>
            </wz-step>
        </v-wizard>
     <br>
     <br>
     <div v-wizard hide-indicators="false">
        <wz-step wz-title="Selected">
            <h1>First form </h1>
            <p>indicators are hidden</p>
            <v-button wz-next>To the second form</v-button>
        </wz-step>
        <wz-step wz-title="Inactive" canexit="exitValidation">
            <h1>Second form</h1>
            <v-button ng-click="exitToggle()">Toggle Validation!</v-button> Value is currently: {{canExit}}
            <br>
            <br>
            <v-button wz-previous="logStep()">BACK</v-button>
            <v-button wz-next="logStep()">NEXT</v-button>
        </wz-step>
        <wz-step wz-title="Inactive">
            <h1>Third form</h1>
            <v-button wz-previous="logStep()">BACK</v-button>
            <v-button wz-next="logStep()">NEXT</v-button>
        </wz-step>
     </div>

     </section>

     </file>
     <file name="script.js">
     angular.module('vWizardExample', ['ngHaloUiLibrary'])
     .controller('ExampleController', function ($scope, $q, $timeout, WizardHandler) {

        $scope.canExit = true;
        $scope.stepActive = true;

        $scope.logStep = function () {
            console.log("step changed");
        };

        $scope.exitToggle = function () {
            $scope.canExit = !$scope.canExit;
        };

        $scope.exitValidation = function () {
            return $scope.canExit;
        };

        $scope.wizardFinished = function (){
            alert('last step reached');
        };

        $scope.getSteps = function(){
            console.log('You are on ', WizardHandler.wizard('firstWizard').currentStepNumber(), 'of ', WizardHandler.wizard('firstWizard').totalStepCount(), 'and current step title is ', WizardHandler.wizard('firstWizard').currentStepTitle());
        }

        $scope.stepToggle = function() {
            $scope.stepActive = !$scope.stepActive;
        }

    });
     </file>
     </example>
     *
     **/
    var VWizard = (function () {
        function VWizard() {
            this.restrict = 'EA';
            this.templateUrl = 'components/vWizard/vWizard.html';
            this.controller = NgHaloUiLibrary.VWizardController;
            this.controllerAs = 'wizardVM';
            this.bindToController = true;
            this.transclude = true;
            this.scope = {
                hideIndicators: '=?',
                name: '@?'
            };
        }
        VWizard.factory = function () {
            return function () { return new VWizard(); };
        };
        return VWizard;
    }());
    NgHaloUiLibrary.VWizard = VWizard;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VWizardController = (function () {
        function VWizardController() {
        }
        return VWizardController;
    }());
    NgHaloUiLibrary.VWizardController = VWizardController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VAnimateHeight = (function () {
        function VAnimateHeight() {
            this.restrict = 'A';
        }
        VAnimateHeight.factory = function () {
            return function () { return new VAnimateHeight(); };
        };
        VAnimateHeight.prototype.link = function (scope, element, attrs) {
            var EXPANDED_CLASS = 'v-AnimateHeight-Expanded';
            var el = element[0];
            scope.$watch(attrs.vAnimateHeight, function (isExpand) {
                var newHeight = isExpand ? getElementAutoHeight() : 0;
                if (isExpand) {
                    el.style.height = newHeight + "px";
                    el.classList.add(EXPANDED_CLASS);
                }
                else {
                    el.style.height = getElementCurrentHeight() + "px";
                    getElementCurrentHeight();
                    el.style.height = newHeight + "px";
                    el.classList.remove(EXPANDED_CLASS);
                }
                el.addEventListener('transitionend', animationEnd, false);
            });
            function animationEnd() {
                el.removeEventListener('transitionend', animationEnd, false);
                el.style.height = '';
            }
            function getElementAutoHeight() {
                var currentHeight;
                var autoHeight;
                currentHeight = getElementCurrentHeight();
                el.style.height = 'auto';
                autoHeight = getElementCurrentHeight();
                el.style.height = currentHeight + "px";
                getElementCurrentHeight();
                return autoHeight;
            }
            function getElementCurrentHeight() {
                return el.offsetHeight;
            }
        };
        return VAnimateHeight;
    }());
    NgHaloUiLibrary.VAnimateHeight = VAnimateHeight;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VClickOff = (function () {
        function VClickOff() {
            this.controller = NgHaloUiLibrary.VClickOffController;
        }
        VClickOff.factory = function () {
            return function () { return new VClickOff(); };
        };
        VClickOff.prototype.link = function (scope, element, attrs, controller) {
            controller.link.apply(controller, arguments);
        };
        return VClickOff;
    }());
    NgHaloUiLibrary.VClickOff = VClickOff;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VClickOffController = (function () {
        function VClickOffController($scope, $element, $document, $parse, $timeout) {
            var _this = this;
            this.$scope = $scope;
            this.$element = $element;
            this.$parse = $parse;
            this.$timeout = $timeout;
            this.onClickBody = function (e) {
                if (NgHaloUiLibrary.DomUtils.isEqualOrContains(e.target, _this.$element) ||
                    (_this.excludeSelector &&
                        NgHaloUiLibrary.DomUtils.isMatchSelector(e.target, _this.excludeSelector))) {
                    return;
                }
                _this.$timeout(function () { return _this.toggleFlagExpression.assign(_this.$scope, false); });
            };
            this.bodyEl = $document[0].body;
        }
        VClickOffController.prototype.link = function (scope, element, attrs) {
            var _this = this;
            this.toggleFlagExpression = this.$parse(attrs.vClickOff);
            this.excludeSelector = this.$scope.$eval(attrs.vClickOffExcludeSelector);
            this.$scope.$watch(attrs.vClickOff, function (newValue, oldValue) {
                return newValue ? _this.addEventListenerToTheBody() : _this.removeEventListenerFromTheBody();
            });
            this.$scope.$on('$destroy', function () {
                _this.removeEventListenerFromTheBody();
            });
        };
        VClickOffController.prototype.addEventListenerToTheBody = function () {
            this.bodyEl.addEventListener('click', this.onClickBody, true);
        };
        VClickOffController.prototype.removeEventListenerFromTheBody = function () {
            this.bodyEl.removeEventListener('click', this.onClickBody, true);
        };
        return VClickOffController;
    }());
    NgHaloUiLibrary.VClickOffController = VClickOffController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VFocusMeHalo = (function () {
        function VFocusMeHalo() {
            this.controller = NgHaloUiLibrary.VFocusMeHaloController;
        }
        VFocusMeHalo.factory = function () {
            return function () { return new VFocusMeHalo(); };
        };
        VFocusMeHalo.prototype.link = function (scope, element, attrs, controller) {
            controller.link.apply(controller, arguments);
        };
        return VFocusMeHalo;
    }());
    NgHaloUiLibrary.VFocusMeHalo = VFocusMeHalo;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var VFocusMeHaloController = (function () {
        function VFocusMeHaloController($scope, $element, $timeout) {
            this.$element = $element;
            this.$scope = $scope;
            this.$timeout = $timeout;
        }
        VFocusMeHaloController.prototype.link = function (scope, element, attrs) {
            var _this = this;
            this.$scope.$watch(attrs.vFocusMeHalo, function (value) {
                if (value === true) {
                    if (attrs.vFocusMeSelectorHalo) {
                        _this.$timeout(function () {
                            _this.$element.find(attrs.vFocusMeSelectorHalo)[0].focus();
                        });
                    }
                    else {
                        _this.$element[0].focus();
                    }
                    _this.$scope[attrs.vFocusMeHalo] = false;
                }
            });
        };
        return VFocusMeHaloController;
    }());
    NgHaloUiLibrary.VFocusMeHaloController = VFocusMeHaloController;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    /**
     * See http://stackoverflow.com/questions/14474555/how-to-format-a-date-using-ng-model
     */
    var VModelFormatter = (function () {
        function VModelFormatter() {
            this.restrict = 'A';
            this.require = '^ngModel';
            this.scope = {
                vModelFormatter: '&',
                vModelFormatterParser: '&'
            };
        }
        VModelFormatter.factory = function () {
            return function () { return new VModelFormatter(); };
        };
        VModelFormatter.prototype.link = function (scope, element, attrs, ngModelController) {
            ngModelController.$formatters.push(function (value) {
                return scope.vModelFormatter({
                    value: value
                });
            });
            if (attrs.vModelFormatterParser) {
                ngModelController.$parsers.push(function (value) {
                    return scope.vModelFormatterParser({
                        value: value
                    });
                });
            }
        };
        return VModelFormatter;
    }());
    NgHaloUiLibrary.VModelFormatter = VModelFormatter;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var DomUtils = (function () {
        function DomUtils() {
        }
        DomUtils.isMatchSelector = function (el, selector) {
            var elDom = DomUtils.getDomElement(el);
            var matches = elDom.matches || elDom.webkitMatchesSelector || elDom.mozMatchesSelector || elDom.msMatchesSelector;
            if (!matches) {
                throw new Error('NgHaloUiLibrary.DomUtils: Element.matches or vendor version are not found');
            }
            return matches.call(elDom, selector);
        };
        DomUtils.isEqualOrContains = function (el, rootEl) {
            var rootElDom = DomUtils.getDomElement(rootEl);
            var elDom = DomUtils.getDomElement(el);
            return elDom === rootElDom || jQuery.contains(rootElDom, elDom);
        };
        DomUtils.hasAttribute = function (el, attrName) {
            return DomUtils.getDomElement(el).hasAttribute(attrName);
        };
        DomUtils.getDomElement = function (el) {
            return el instanceof jQuery ? el.get(0) : el;
        };
        DomUtils.getAugmentedJQueryElement = function (el) {
            return el instanceof jQuery ? el : angular.element(el);
        };
        return DomUtils;
    }());
    NgHaloUiLibrary.DomUtils = DomUtils;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    function isUndefinedOrNull(value) {
        return (angular.isUndefined(value) || value === null);
    }
    NgHaloUiLibrary.isUndefinedOrNull = isUndefinedOrNull;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    function VGetMyPath() {
        var scripts = document.getElementsByTagName('script');
        var basePath = NgHaloUiLibrary.DEFAULT_DEV_PATH;
        for (var i = scripts.length - 1; i >= 0; --i) {
            var src = scripts[i].getAttribute('src');
            if (src) {
                var index = src.indexOf(NgHaloUiLibrary.DEFAULT_HALO_UI_NAME);
                if (index !== -1) {
                    basePath = src.substr(0, index);
                    basePath = basePath.replace(/\/$/, '');
                }
            }
        }
        return basePath;
    }
    NgHaloUiLibrary.VGetMyPath = VGetMyPath;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var PrecisionDate = (function () {
        function PrecisionDate() {
        }
        PrecisionDate.EMPTY = 1002000;
        PrecisionDate.UNKNOWN = 1002001;
        PrecisionDate.YEAR = 1002002;
        PrecisionDate.MONTH = 1002003;
        PrecisionDate.DAY = 1002004;
        PrecisionDate.MONTH_ARRAY = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return PrecisionDate;
    }());
    NgHaloUiLibrary.PrecisionDate = PrecisionDate;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    NgHaloUiLibrary.DEFAULT_DEV_PATH = '../..';
    NgHaloUiLibrary.DEFAULT_HALO_UI_NAME = 'angular-halo-ui-library';
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    var UiDefaultsProvider = (function () {
        function UiDefaultsProvider() {
            this.DEFAULTS = {
                dateFormat: 'MM/dd/yyyy'
            };
        }
        UiDefaultsProvider.prototype.config = function (opt) {
            angular.extend(this.DEFAULTS, opt);
        };
        UiDefaultsProvider.prototype.$get = function () {
            return this.DEFAULTS;
        };
        return UiDefaultsProvider;
    }());
    NgHaloUiLibrary.UiDefaultsProvider = UiDefaultsProvider;
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

var NgHaloUiLibrary;
(function (NgHaloUiLibrary) {
    'use strict';
    // "try catch" checker for dgeni documentation
    // http://stackoverflow.com/questions/19206553/how-to-check-for-the-existence-of-a-module-without-an-error-being-raised
    try {
        angular.module('ngHaloUiLibrary');
    }
    catch (e) {
        angular.module('ngHaloUiLibrary', [
            'ngMaterial',
            // 'ngLocalize',
            // 'ngLocalize.Config',
            // 'ngLocalize.InstalledLanguages',
            // 'angularMoment',
            // 'ngMask',
            // 'mgo-angular-wizard',
            // 'ngDropzone',
            // 'angular-bind-html-compile',
            // 'datetime'
        ]);
    }
    var ngHaloUiLibrary = angular.module('ngHaloUiLibrary');
    // Providers
    ngHaloUiLibrary.provider('uiDefaults', NgHaloUiLibrary.UiDefaultsProvider);
    // Directives
    ngHaloUiLibrary.directive('vFocusMeHalo', [NgHaloUiLibrary.VFocusMeHalo.factory()]);
    ngHaloUiLibrary.directive('vClickOff', [NgHaloUiLibrary.VClickOff.factory()]);
    ngHaloUiLibrary.directive('vModelFormatter', [NgHaloUiLibrary.VModelFormatter.factory()]);
    ngHaloUiLibrary.directive('vAnimateHeight', [NgHaloUiLibrary.VAnimateHeight.factory()]);
    ngHaloUiLibrary.directive('vCalendarMonth', [NgHaloUiLibrary.VCalendarMonth.factory()]);
    // Components directives
    ngHaloUiLibrary.directive('vMenu', [NgHaloUiLibrary.VMenu.factory()]);
    ngHaloUiLibrary.directive('vActionMenu', [NgHaloUiLibrary.VActionMenu.factory()]);
    ngHaloUiLibrary.directive('vAutocomplete', [NgHaloUiLibrary.VAutocomplete.factory()]);
    ngHaloUiLibrary.directive('vButton', [NgHaloUiLibrary.VButton.factory()]);
    ngHaloUiLibrary.directive('vCheckbox', [NgHaloUiLibrary.VCheckbox.factory()]);
    ngHaloUiLibrary.directive('vDatepick', [NgHaloUiLibrary.VDatepick.factory()]);
    ngHaloUiLibrary.directive('vDatepickPrecision', [NgHaloUiLibrary.VDatepickPrecision.factory()]);
    ngHaloUiLibrary.directive('vDropdownContent', [NgHaloUiLibrary.VDropdownContent.factory()]);
    ngHaloUiLibrary.directive('vIcon', [NgHaloUiLibrary.VIcon.factory()]);
    ngHaloUiLibrary.directive('vInput', [NgHaloUiLibrary.VInput.factory()]);
    ngHaloUiLibrary.directive('vProgressLinear', [NgHaloUiLibrary.VProgressLinear.factory()]);
    ngHaloUiLibrary.directive('vRadioButton', [NgHaloUiLibrary.VRadioButton.factory()]);
    ngHaloUiLibrary.directive('vRadioGroup', [NgHaloUiLibrary.VRadioGroup.factory()]);
    ngHaloUiLibrary.directive('vSelect', [NgHaloUiLibrary.VSelect.factory()]);
    ngHaloUiLibrary.directive('vSpinner', [NgHaloUiLibrary.VSpinner.factory()]);
    ngHaloUiLibrary.directive('vSwitch', [NgHaloUiLibrary.VSwitch.factory()]);
    ngHaloUiLibrary.directive('vToggle', [NgHaloUiLibrary.VToggle.factory()]);
    ngHaloUiLibrary.directive('vCard', [NgHaloUiLibrary.VCard.factory()]);
    ngHaloUiLibrary.directive('vTable', [NgHaloUiLibrary.VTable.factory()]);
    ngHaloUiLibrary.directive('vLink', [NgHaloUiLibrary.VLink.factory()]);
    ngHaloUiLibrary.directive('vTooltip', [NgHaloUiLibrary.VTooltip.factory()]);
    ngHaloUiLibrary.directive('vDialog', [NgHaloUiLibrary.VDialog.factory()]);
    ngHaloUiLibrary.directive('vChips', [NgHaloUiLibrary.VChips.factory()]);
    ngHaloUiLibrary.directive('vTabs', [NgHaloUiLibrary.VTabs.factory()]);
    ngHaloUiLibrary.directive('vCalendar', [NgHaloUiLibrary.VCalendar.factory()]);
    ngHaloUiLibrary.directive('vWizard', [NgHaloUiLibrary.VWizard.factory()]);
    ngHaloUiLibrary.directive('vDocumentManagement', [NgHaloUiLibrary.VDocumentManagement.factory()]);
    ngHaloUiLibrary.directive('vToolbar', [NgHaloUiLibrary.VToolbar.factory()]);
    ngHaloUiLibrary.directive('vTextarea', [NgHaloUiLibrary.VTextarea.factory()]);
    ngHaloUiLibrary.directive('vSearch', [NgHaloUiLibrary.VSearch.factory()]);
    /*svg polyfill for svg sprite use tag at lte ie11*/
    svg4everybody();
    /* Set/Get base path for icons */
    ngHaloUiLibrary.constant('HALO_UI_PATH', NgHaloUiLibrary.VGetMyPath());
})(NgHaloUiLibrary || (NgHaloUiLibrary = {}));

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vActionMenu/vActionMenu.html',
    '<v-button\n' +
    '    ng-if="actionMenuVm.getMainActions().length>0 && actionMenuVm.getMenuActions().length===0"\n' +
    '    ng-click="actionMenuVm.data[0].action(actionMenuVm.context);"\n' +
    '    aria-label="{{actionMenuVm.data[0].text}}"\n' +
    '    ng-disabled="actionMenuVm.ngDisabled || actionMenuVm.data[0].disabled">\n' +
    '    <v-icon ng-if="actionMenuVm.data[0].icon" icon="{{actionMenuVm.data[0].icon}}"></v-icon>\n' +
    '    {{actionMenuVm.data[0].text}}\n' +
    '</v-button>\n' +
    '<md-menu  ng-if="actionMenuVm.getMenuActions().length>0" class="v-ActionMenu-Menu" md-position-mode="target-right target" md-offset="0 31">\n' +
    '    <div class="v-ActionMenu-Group">\n' +
    '        <md-button\n' +
    '                ng-if="actionMenuVm.getMainActions().length>0"\n' +
    '                class="v-ActionMenu-ButtonMain"\n' +
    '                ng-repeat="item in actionMenuVm.getMainActions()"\n' +
    '                ng-click="item.action(actionMenuVm.context);"\n' +
    '                aria-label="{{item.text}}"\n' +
    '                ng-disabled="actionMenuVm.ngDisabled || item.disabled"><v-icon ng-if="item.icon" icon="{{item.icon}}"></v-icon>{{item.text}}</md-button>\n' +
    '        <md-button\n' +
    '            md-menu-origin\n' +
    '            class="v-ActionMenu-ButtonDropdown"\n' +
    '            ng-class="{\'v-ActionMenu-ButtonDropdown_OnlyButtonDropdown\': actionMenuVm.getMainActions().length===0, \'v-ActionMenu-ButtonDropdown_Disabled\': actionMenuVm.ngDisabled || actionMenuVm.disabledMenu}"\n' +
    '            ng-click="$mdOpenMenu()"\n' +
    '            ng-disabled="actionMenuVm.ngDisabled || actionMenuVm.disabledMenu">\n' +
    '        </md-button>\n' +
    '    </div>\n' +
    '    <md-menu-content class="v-ActionMenu-MenuContent">\n' +
    '        <md-menu-item\n' +
    '            class="v-ActionMenu-MenuItem"\n' +
    '            ng-repeat="item in actionMenuVm.getMenuActions()">\n' +
    '            <md-button\n' +
    '                ng-disabled="actionMenuVm.ngDisabled || item.disabled"\n' +
    '                ng-click="item.action(actionMenuVm.context);" aria-label="{{item.text}}"><v-icon ng-if="item.icon" icon="{{item.icon}}"></v-icon>{{item.text}}</md-button>\n' +
    '        </md-menu-item>\n' +
    '    </md-menu-content>\n' +
    '</md-menu>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vAutocomplete/vAutocomplete.html',
    '<md-autocomplete\n' +
    '        class="v-Autocomplete-Autocomplete"\n' +
    '        md-selected-item="autocompleteVm.model"\n' +
    '        md-search-text="autocompleteVm.searchText"\n' +
    '        md-items="item in autocompleteVm.searchMethod(autocompleteVm.searchText)"\n' +
    '        md-item-text="item"\n' +
    '        md-floating-label="{{::autocompleteVm.label}}"\n' +
    '        ng-class="{\'no-label\': autocompleteVm.labelStatus==\'no-label\', \'no-empty\': autocompleteVm.searchText.length>0}"\n' +
    '        md-selected-item-change="autocompleteVm.selectedChange(item)"\n' +
    '        md-min-length="::autocompleteVm.minLength"\n' +
    '        md-select-on-match="autocompleteVm.selectOnMatch"\n' +
    '        md-menu-class="{{autocompleteVm.menuClass}}"\n' +
    '        md-no-cache="autocompleteVm.noCache"\n' +
    '        ng-disabled="autocompleteVm.ngDisabled"\n' +
    '        md-min-length="autocompleteVm.minLength"\n' +
    '        md-autoselect="autocompleteVm.autoSelect || false"\n' +
    '        md-delay="autocompleteVm.delay">\n' +
    '</md-autocomplete>\n' +
    '<button ng-if="autocompleteVm.searchText"\n' +
    '        class="v-Autocomplete-ButtonClear"\n' +
    '        ng-class="{\'v-Autocomplete-ButtonClear_withoutLabel\': !autocompleteVm.label}"\n' +
    '        ng-click="autocompleteVm.model = undefined; autocompleteVm.searchText = \'\';">\n' +
    '</button>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vButton/vButton.html',
    '<md-button\n' +
    '    class="v-Button-Button"><ng-transclude></ng-transclude></md-button>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vCalendar/vCalendar.html',
    '<div class="v-Calendar-Wrapper">\n' +
    '    <table class="v-Calendar-Table" role="grid" tabindex="0" aria-readonly="true">\n' +
    '        <thead class="v-Calendar-Thead">\n' +
    '            <tr class="v-Calendar-Tr v-Calendar-WeekDays">\n' +
    '                <th class="v-Calendar-Td"\n' +
    '                    ng-repeat="weekDay in ::calendarVm.weekDays">\n' +
    '                    <div class="v-Calendar-TdInner"\n' +
    '                        i18n="{{::calendarVm.WEEKDAYS[weekDay] + \'_short\'}}">\n' +
    '                    </div>\n' +
    '                </th>\n' +
    '            </tr>\n' +
    '        </thead>\n' +
    '    </table>\n' +
    '    <div class="v-Calendar-RepeatWrapper">\n' +
    '        <md-virtual-repeat-container class="v-Calendar-MdVirtualRepeatContainer"\n' +
    '                                     md-top-index="calendarVm.topIndex">\n' +
    '            <div class="v-Calendar-ScrollItem"\n' +
    '                 md-virtual-repeat="month in calendarVm.months"\n' +
    '                 v-calendar-month="month"\n' +
    '                 md-start-index="calendarVm.startMonthIndex">\n' +
    '\n' +
    '            </div>\n' +
    '        </md-virtual-repeat-container>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vCard/vCard.html',
    '<div class="v-Card-Wrapper"\n' +
    '    ng-class="{\n' +
    '      \'v-Card-Appointment\': cardVm.appointment,\n' +
    '      \'v-Card-Expanded\': cardVm.toggleExpansion,\n' +
    '      \'v-Card-ExpandedHorizontal\': cardVm.toggleExpansion && cardVm.expandHorizontal,\n' +
    '      \'v-Card-Mode_Minimal\': cardVm.mode === \'Minimal\',\n' +
    '      \'v-Card-Wrapper_Hover\': cardVm.isMenuOpened,\n' +
    '      \'v-Card-Urgent\': cardVm.urgent\n' +
    '    }"\n' +
    '    ng-click="!cardVm.toggleExpansion && (cardVm.toggleExpansion = !cardVm.toggleExpansion)"\n' +
    '    >\n' +
    '    <v-icon ng-if="cardVm.pinned" icon="pin" class="v-Card-IconPinned"></v-icon>\n' +
    '    <div class="v-Card-Inner">\n' +
    '        <div class="v-Card-Header"\n' +
    '             ng-click="cardVm.toggleExpansion = !cardVm.toggleExpansion; $event.stopPropagation();" layout="row" layout-align="start start"\n' +
    '             ng-include="\'components/vCard/templates/header.\' + (cardVm.appointment ? \'appointment\' : \'default\') + \'.html\'">\n' +
    '        </div>\n' +
    '        <div class="v-Card-Content">\n' +
    '            <div class="v-Card-Person" ng-if="(cardVm.person || cardVm.addPerson) && cardVm.appointment"\n' +
    '                 ng-include="\'components/vCard/templates/person.html\'">\n' +
    '            </div>\n' +
    '            <div class="v-Card-Body" v-animate-height="cardVm.toggleExpansion">\n' +
    '                <ng-transclude></ng-transclude>\n' +
    '            </div>\n' +
    '            <div class="v-Card-Footer" ng-class="{\'v-Card-Footer_LayoutColumn\': cardVm.status}">\n' +
    '                <div class="v-Card-Person" ng-if="(cardVm.person || cardVm.addPerson) && !cardVm.appointment"\n' +
    '                     ng-include="\'components/vCard/templates/person.html\'">\n' +
    '                </div>\n' +
    '                <div class="v-Card-FooterSection">\n' +
    '                    <div class="v-Card-Status" ng-if="cardVm.status" flex>\n' +
    '                        {{cardVm.status}}\n' +
    '                    </div>\n' +
    '                    <div class="v-Card-BtnContainer" ng-if="cardVm.actions">\n' +
    '                        <v-button class="v-Card-Actions" ng-if="cardVm.actions.length == 1" ng-click="cardVm.actions[0].action(cardVm); $event.stopPropagation();">\n' +
    '                            {{cardVm.actions[0].text}}</v-button>\n' +
    '                        <v-action-menu class="v-Card-Actions" ng-if="cardVm.actions.length > 1"\n' +
    '                                       ng-click="$event.stopPropagation();"\n' +
    '                            data="cardVm.actions"></v-action-menu>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vCheckbox/vCheckbox.html',
    '<md-checkbox\n' +
    '    class="v-Checkbox-Checkbox"\n' +
    '    ng-model="checkboxVm.model"\n' +
    '    ng-change="checkboxVm.change()"\n' +
    '    ng-disabled="checkboxVm.ngDisabled"><ng-transclude></ng-transclude></md-checkbox>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vChips/vChips.html',
    '<div class="v-Chips-Wrapper"\n' +
    '     ng-class="{\n' +
    '        \'v-Chips-Mode_Tags\': chipsVm.mode === \'Tags\'\n' +
    '     }">\n' +
    '    <div class="v-Chips-Main">\n' +
    '        <label class="v-Chips-Label" ng-if="::chipsVm.label">{{::chipsVm.label | i18n}}</label>\n' +
    '        <v-icon icon="search" class="v-Chips-Icon"></v-icon>\n' +
    '        <md-chips class="v-Chips-Chips"\n' +
    '                  ng-model="chipsVm.model" md-autocomplete-snap\n' +
    '                  md-require-match="chipsVm.requireMatch"\n' +
    '                  md-max-chips="{{::chipsVm.max}}"\n' +
    '                  md-on-add="chipsVm.onAdd()"\n' +
    '                  md-on-remove="chipsVm.onRemove()">\n' +
    '            <md-autocomplete\n' +
    '                class="v-Chips-Autocomplete"\n' +
    '                md-selected-item="chipsVm.model.selectedItem"\n' +
    '                md-search-text="chipsVm.searchText"\n' +
    '                md-items="item in chipsVm.searchMethod(chipsVm.searchText)"\n' +
    '                md-item-text="item"\n' +
    '                md-no-cache="::chipsVm.noCache"\n' +
    '                placeholder="{{::chipsVm.placeholder | i18n}}">\n' +
    '                <span md-highlight-text="chipsVm.searchText">{{item}}</span>\n' +
    '            </md-autocomplete>\n' +
    '            <md-chip-template>\n' +
    '                <span>{{$chip}}</span>\n' +
    '            </md-chip-template>\n' +
    '        </md-chips>\n' +
    '    </div>\n' +
    '    <div class="v-Chips-Model" ng-if="chipsVm.mode === \'Tags\'">\n' +
    '        <ul class="v-Chips-ChipsList">\n' +
    '           <li class="v-Chips-Chip"\n' +
    '               ng-repeat="i in chipsVm.model">\n' +
    '               <div class="md-chip-content">{{i}}</div>\n' +
    '               <v-icon icon="cross" class="v-Chips-ChipRemove" ng-click="chipsVm.model.splice($index, 1)"></v-icon>\n' +
    '           </li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vDatepick/vDatepick.html',
    '<div class="v-Datepick-Wrapper"\n' +
    '     ng-class="{\n' +
    '      \'v-Datepick-Mode_Large\': datepickVm.mode === \'Large\',\n' +
    '      \'v-Datepick-Format_European\': (datepickVm.format || datepickVm.FORMAT_DEFAULT).toLowerCase().indexOf(\'d\') === 0,\n' +
    '      \'v-Datepick-Error\': (datepickVm.minDate && datepickVm.model < datepickVm.minDate) || (datepickVm.maxDate && datepickVm.model > datepickVm.maxDate)\n' +
    '    }">\n' +
    '    <div class="v-Datepick-Main" ng-click="datepickVm.toggle()">\n' +
    '        <span class="v-Datepick-Navigation v-Datepick-Navigation_Left"\n' +
    '              ng-if="datepickVm.navigation"\n' +
    '              ng-class="{\'v-Datepick-Navigation_Disabled\': datepickVm.prevDisabled = datepickVm.minDate && datepickVm.model.getTime() - 1000*60*60*24 <= datepickVm.minDate.getTime() }"\n' +
    '              ng-click="!datepickVm.prevDisabled && datepickVm.navPrev(); $event.stopPropagation()">\n' +
    '            <v-icon icon="arrow-left" class="v-Datepick-NavigationIcon"></v-icon>\n' +
    '        </span>\n' +
    '        <v-icon class="v-Datepick-Icon" icon="datepicker" ng-if="datepickVm.icon"></v-icon>\n' +
    '        <span class="v-Datepick-SelectedDate"\n' +
    '              ng-if="!datepickVm.inputEnabled"\n' +
    '              ng-click="datepickVm.allowInput && (datepickVm.toggleInput() || $event.stopPropagation())">\n' +
    '            <span class="v-Datepick-SelectedDateInner" ng-include="\'components/vDatepick/templates/selected-date.html\'"\n' +
    '                  ng-if="datepickVm.mode === \'Large\'"></span>\n' +
    '            <span class="v-Datepick-SelectedDateInner" ng-include="\'components/vDatepick/templates/selected-date-string.html\'"\n' +
    '                  ng-if="datepickVm.mode !== \'Large\'"></span>\n' +
    '        </span>\n' +
    '\n' +
    '        <input type="text"\n' +
    '               class="v-Datepick-SelectedDateEditInput"\n' +
    '               ng-model="datepickVm.inputDateModel"\n' +
    '               ng-if="datepickVm.inputEnabled"\n' +
    '               ng-click="$event.stopPropagation()"\n' +
    '               datetime="{{datepickVm.format || datepickVm.FORMAT_DEFAULT}}"\n' +
    '               ng-blur="datepickVm.toggleInput()"\n' +
    '               v-focus-me-halo="datepickVm.inputEnabled"/>\n' +
    '        <span class="v-Datepick-ButtonOpen" ng-if="!datepickVm.navigation"></span>\n' +
    '        <span class="v-Datepick-Navigation v-Datepick-Navigation_Right"\n' +
    '              ng-if="datepickVm.navigation"\n' +
    '              ng-class="{\'v-Datepick-Navigation_Disabled\': datepickVm.nextDisabled = datepickVm.maxDate && datepickVm.model.getTime() + 1000*60*60*24 >= datepickVm.maxDate.getTime()}"\n' +
    '              ng-click="!datepickVm.nextDisabled && datepickVm.navNext(); $event.stopPropagation()">\n' +
    '            <v-icon icon="arrow-left" class="v-Datepick-NavigationIcon"></v-icon>\n' +
    '        </span>\n' +
    '    </div>\n' +
    '    <div class="v-Datepick-Holder" ng-if="datepickVm.isShow">\n' +
    '        <div class="v-Datepick-HolderHeader">\n' +
    '            <span class="v-Datepick-SelectedDate v-Datepick-HolderDate" ng-click="datepickVm.toggle()">\n' +
    '                <span class="v-Datepick-SelectedDateInner" ng-if="datepickVm.mode === \'Large\'"\n' +
    '                      ng-include="\'components/vDatepick/templates/selected-date.html\'"></span>\n' +
    '                <span class="v-Datepick-SelectedDateInner" ng-if="datepickVm.mode !== \'Large\'"\n' +
    '                      ng-include="\'components/vDatepick/templates/selected-date-string.html\'"></span>\n' +
    '            </span>\n' +
    '            <v-select data="datepickVm.selectMonthsData"\n' +
    '                      model="datepickVm.selectedMonth"\n' +
    '                      model-change="datepickVm.setDisplayMonth(datepickVm.selectedMonth)"\n' +
    '                      container-class="v-Datepick-SelectContainer"\n' +
    '                      class="v-Datepick-Select v-Select-No-Border"></v-select>\n' +
    '            <v-select data="datepickVm.selectYearsData"\n' +
    '                      model="datepickVm.selectedYear"\n' +
    '                      model-change="datepickVm.setDisplayFullYear(datepickVm.selectedYear)"\n' +
    '                      container-class="v-Datepick-SelectContainer"\n' +
    '                      class="v-Datepick-Select v-Select-No-Border"></v-select>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="v-Datepick-CalendarWrapper">\n' +
    '            <v-calendar model="datepickVm.model"\n' +
    '                        min-date="datepickVm.minDate"\n' +
    '                        max-date="datepickVm.maxDate"\n' +
    '                        display-date="datepickVm.displayDate"\n' +
    '                        years-offset="datepickVm.yearsOffset"></v-calendar>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vDatepickPrecision/vDatepickPrecision.html',
    '<div class="v-DatepickPrecision-Main" ng-class="{\'v-DatepickPrecision-Disabled\': datepickPrecisionVm.ngDisabled, \'v-DatepickPrecision-Empty\': datepickPrecisionVm.model.datePrecisionId == 1002000}">\n' +
    '    <md-input-container  tabindex="-1">\n' +
    '        <label ng-if="::datepickPrecisionVm.label">{{datepickPrecisionVm.label}}</label>\n' +
    '        <label ng-if="::!datepickPrecisionVm.label" i18n="ngHaloUiLibrary.vDatepickPrecisionAutocompleteLabelDate"></label>\n' +
    '        <input readonly\n' +
    '               ng-disabled="datepickPrecisionVm.ngDisabled"\n' +
    '               class="v-DatepickPrecision-SelectedDate"\n' +
    '               ng-model="datepickPrecisionVm.newDateMoment"\n' +
    '               v-model-formatter="::datepickPrecisionVm.formatDate(value)"\n' +
    '               v-model-formatter-parser="::datepickPrecisionVm.parseDate(value)"\n' +
    '               ng-click="datepickPrecisionVm.openClose()">\n' +
    '    </md-input-container>\n' +
    '    <button  tabindex="-1" class="v-DatepickPrecision-ButtonOpen" ng-click="datepickPrecisionVm.openClose()"></button>\n' +
    '    <div  tabindex="-1"\n' +
    '          class="v-DatepickPrecision-Error"\n' +
    '          ng-show="!datepickPrecisionVm.isDateInRange(datepickPrecisionVm.model.date, datepickPrecisionVm.model.datePrecisionId) && datepickPrecisionVm.model.date!==\'\'"\n' +
    '          i18n="ngHaloUiLibrary.vDatepickPrecisionDateNotInRange"></div>\n' +
    '</div>\n' +
    '<div\n' +
    '     class="v-DatepickPrecision-Holder"\n' +
    '     ng-class="{\'v-DatepickPrecision-Holder_AllowUnknown\': datepickPrecisionVm.allowUnknown, \'v-DatepickPrecision-Holder_rightPosition\': datepickPrecisionVm.rightPosition}"\n' +
    '     ng-show="datepickPrecisionVm.isHolderOpened">\n' +
    '\n' +
    '    <div tabindex="-1"\n' +
    '         class="v-DatepickPrecision-HolderError"\n' +
    '         ng-show="!datepickPrecisionVm.isDateInRange(datepickPrecisionVm.newDateMoment, datepickPrecisionVm.model.datePrecisionId) && datepickPrecisionVm.newDateMoment!==\'\'"\n' +
    '         i18n="ngHaloUiLibrary.vDatepickPrecisionDateNotInRange"></div>\n' +
    '\n' +
    '    <div class="v-DatepickPrecision-AutocompleteWrapper">\n' +
    '        <div class="v-DatepickPrecision-Autocomplete">\n' +
    '            <md-autocomplete\n' +
    '                    ng-click="datepickPrecisionVm.clearYear()"\n' +
    '                    class="v-Autocomplete-Autocomplete v-Autocomplete-Year"\n' +
    '                    md-floating-label="Year"\n' +
    '                    md-selected-item="datepickPrecisionVm.selectedYear"\n' +
    '                    md-search-text="datepickPrecisionVm.searchYearText"\n' +
    '                    md-items="item in datepickPrecisionVm.searchYear(datepickPrecisionVm.searchYearText)"\n' +
    '                    md-item-text="item"\n' +
    '                    md-min-length="0"\n' +
    '                    md-select-on-match="true"\n' +
    '                    md-no-cache="true"\n' +
    '                    md-menu-class="v-DatepickPrecision-AutocompleteMenu"\n' +
    '                    md-input-name="datepickPrecisionYear">\n' +
    '                <md-item-template>\n' +
    '                    <span md-highlight-text="datepickPrecisionVm.searchYearText" md-highlight-flags="^i">{{item}}</span>\n' +
    '                </md-item-template>\n' +
    '                <md-not-found>\n' +
    '                    {{\'ngHaloUiLibrary.vDatepickPrecisionNotFoundYear\' | i18n}}\n' +
    '                </md-not-found>\n' +
    '            </md-autocomplete>\n' +
    '            <button ng-if="datepickPrecisionVm.searchYearText"\n' +
    '                    tabindex="-1"\n' +
    '                    class="v-Autocomplete-ButtonClear"\n' +
    '                    ng-click="datepickPrecisionVm.selectedYear = undefined; datepickPrecisionVm.searchYearText = \'\'; datepickPrecisionVm.setDirty()">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="v-DatepickPrecision-AutocompleteWrapper">\n' +
    '        <div class="v-DatepickPrecision-Autocomplete">\n' +
    '            <md-autocomplete\n' +
    '                    ng-click="datepickPrecisionVm.clearMonth(); datepickPrecisionVm.clearDay();"\n' +
    '                    class="v-Autocomplete-Autocomplete v-Autocomplete-Month"\n' +
    '                    md-floating-label="Month"\n' +
    '                    md-selected-item="datepickPrecisionVm.selectedMonth"\n' +
    '                    md-search-text="datepickPrecisionVm.searchMonthText"\n' +
    '                    md-items="item in datepickPrecisionVm.searchMonth(datepickPrecisionVm.searchMonthText)"\n' +
    '                    md-item-text="item"\n' +
    '                    md-min-length="0"\n' +
    '                    md-select-on-match="true"\n' +
    '                    md-no-cache="true"\n' +
    '                    md-menu-class="v-DatepickPrecision-AutocompleteMenu"\n' +
    '                    md-input-name="datepickPrecisionMonth">\n' +
    '                <md-item-template>\n' +
    '                    <span md-highlight-text="datepickPrecisionVm.searchMonthText" md-highlight-flags="^i">{{item}}</span>\n' +
    '                </md-item-template>\n' +
    '                <md-not-found>\n' +
    '                    {{\'ngHaloUiLibrary.vDatepickPrecisionNotFoundMonth\' | i18n}}\n' +
    '                </md-not-found>\n' +
    '            </md-autocomplete>\n' +
    '            <button ng-if="datepickPrecisionVm.searchMonthText"\n' +
    '                    tabindex="-1"\n' +
    '                    class="v-Autocomplete-ButtonClear"\n' +
    '                    ng-click="datepickPrecisionVm.clearMonth(); datepickPrecisionVm.setDirty()">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="v-DatepickPrecision-AutocompleteWrapper">\n' +
    '        <div class="v-DatepickPrecision-Autocomplete">\n' +
    '            <md-autocomplete ng-click="datepickPrecisionVm.clearDay()"\n' +
    '                    class="v-Autocomplete-Autocomplete v-Autocomplete-Day"\n' +
    '                    md-floating-label="Day"\n' +
    '                    md-selected-item="datepickPrecisionVm.selectedDay"\n' +
    '                    md-search-text="datepickPrecisionVm.searchDayText"\n' +
    '                    md-items="item in datepickPrecisionVm.searchDay(datepickPrecisionVm.searchDayText)"\n' +
    '                    md-item-text="item"\n' +
    '                    md-min-length="0"\n' +
    '                    md-select-on-match="true"\n' +
    '                    md-no-cache="true"\n' +
    '                    md-menu-class="v-DatepickPrecision-AutocompleteMenu"\n' +
    '                    md-input-name="datepickPrecisionDay">\n' +
    '                <md-item-template>\n' +
    '                    <span md-highlight-text="datepickPrecisionVm.searchDayText" md-highlight-flags="^i">{{item}}</span>\n' +
    '                </md-item-template>\n' +
    '                <md-not-found>\n' +
    '                    {{\'ngHaloUiLibrary.vDatepickPrecisionNotFoundDay\' | i18n}}\n' +
    '                </md-not-found>\n' +
    '            </md-autocomplete>\n' +
    '            <button ng-if="datepickPrecisionVm.searchDayText"\n' +
    '                    tabindex="-1"\n' +
    '                    class="v-Autocomplete-ButtonClear"\n' +
    '                    ng-click="datepickPrecisionVm.selectedDay = undefined; datepickPrecisionVm.searchDayText = \'\'; datepickPrecisionVm.setDirty()">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <button ng-blur="datepickPrecisionVm.closeAfterBlurWithUnknown()"\n' +
    '            class="v-DatepickPrecision-ButtonUnknown"\n' +
    '            ng-if="datepickPrecisionVm.allowUnknown"\n' +
    '            ng-click="datepickPrecisionVm.unknown(); "\n' +
    '            i18n="ngHaloUiLibrary.vDatepickPrecisionUnknown"></button>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vDialog/vDialog.html',
    ' <div class="v-Dialog-Inner">\n' +
    '    <md-toolbar ng-if="dialogVm.dialogTitle" class="v-Dialog-Toolbar">\n' +
    '        <div class="md-toolbar-tools v-Dialog-ToolbarTools">\n' +
    '            <span>{{dialogVm.dialogTitle}}</span>\n' +
    '            <span flex></span>\n' +
    '            <md-button class="md-icon-button" ng-click="dialogVm.cancel()">\n' +
    '                <v-icon icon="cross" class="v-Dialog-CloseIcon"></v-icon>\n' +
    '            </md-button>\n' +
    '        </div>\n' +
    '    </md-toolbar>\n' +
    '    <md-dialog-content ng-class="dialogVm.contentClass">\n' +
    '        <div class="md-dialog-content v-Dialog-Content">\n' +
    '            <ng-transclude></ng-transclude>\n' +
    '        </div>\n' +
    '    </md-dialog-content>\n' +
    '    <md-dialog-actions layout="row" class="v-Dialog-Actions">\n' +
    '        <v-button ng-repeat="i in dialogVm.actions" ng-disabled="i.disabled" ng-click="i.disabled || i.action()">{{i.title}}</v-button>\n' +
    '    </md-dialog-actions>\n' +
    '</div>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vDocumentManagement/vDocumentManagement.html',
    '<div class="v-DocumentManagement-Wrapper">\n' +
    '    <div class="v-DocumentManagement-Row" layout="row">\n' +
    '        <div flex="50" class="v-DocumentManagement-Column">\n' +
    '            <div class="v-DocumentManagement-Row v-DocumentManagement-ColumnHeader">\n' +
    '                <div class="v-DocumentManagement-Person" ng-if="docmanageVm.person">\n' +
    '                    <div class="v-DocumentManagement-PersonImage"></div>\n' +
    '                    <span class="v-DocumentManagement-PersonName" flex>From {{docmanageVm.person.givenName}} {{cardVm.person.familyName}}\'s chart</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="v-DocumentManagement-Row v-DocumentManagement-Row-Tools" layout="row" layout-align="space-between">\n' +
    '                <div class="v-DocumentManagement-SearchContainer">\n' +
    '                    <v-icon icon="search" class="v-DocumentManagement-SearchIcon"></v-icon>\n' +
    '                    <v-input class="v-DocumentManagement-Input v-DocumentManagement-SearchInput"\n' +
    '                        placeholder="{{\'ngHaloUiLibrary.vDocumentManagementSearchPlaceholder\' | i18n}}"\n' +
    '                        model="docmanageVm.personDocumentsTableOptions.filter.name"></v-input>\n' +
    '                </div>\n' +
    '                <div>\n' +
    '                    <v-select\n' +
    '                        class="v-DocumentManagement-Select v-DocumentManagement-FilterSelect"\n' +
    '                        model="docmanageVm.personDocumentsTableOptions.filter.type"\n' +
    '                        data="docmanageVm.types"\n' +
    '                        default-option="{{\'ngHaloUiLibrary.vDocumentManagementViewAllTypes\' | i18n}}" no-border="true"></v-select>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="v-DocumentManagement-Row">\n' +
    '                <v-table class="v-DocumentManagement-Table v-DocumentManagement-PersonDocumentsTable"\n' +
    '                    options="docmanageVm.personDocumentsTableOptions"\n' +
    '                         data="docmanageVm.personDocuments | filter:filterPatientDocuments"></v-table>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div flex="50" class="v-DocumentManagement-Column">\n' +
    '            <div class="v-DocumentManagement-Row v-DocumentManagement-ColumnHeader">\n' +
    '                <span>Missing: </span>\n' +
    '                <span>\n' +
    '                    <span class="v-DocumentManagement-MissedType"\n' +
    '                          ng-repeat="requiredType in docmanageVm.types | filter: docmanageVm.filterMissedTypes">\n' +
    '                        {{requiredType.text}}</span>\n' +
    '                </span>\n' +
    '            </div>\n' +
    '            <div class="v-DocumentManagement-Row" layout="row" layout-align="space-between">\n' +
    '                <div class="v-DocumentManagement-FilesTitle">Selected files</div>\n' +
    '                <div class="v-DocumentManagement-UploadButton">\n' +
    '                    <v-button ng-click="docmanageVm.dzOpenChooseDialog()">\n' +
    '                        {{ \'ngHaloUiLibrary.vDocumentManagementUploadDocuments\' | i18n }}\n' +
    '                    </v-button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="v-DocumentManagement-Row v-DocumentManagement-AddDocSection" layout="column">\n' +
    '                <div class="v-DocumentManagement-Row">\n' +
    '                    <v-table class="v-DocumentManagement-Table"\n' +
    '                            options="docmanageVm.documentsTableOptions"\n' +
    '                             data="docmanageVm.documents"></v-table>\n' +
    '                </div>\n' +
    '                <div class="v-DocumentManagement-Dropzone" layout layout-align="center center"\n' +
    '                     ng-dropzone\n' +
    '                     dropzone="docmanageVm.uploadSettings.dropzone"\n' +
    '                     dropzone-config="docmanageVm.uploadSettings.dropzoneConfig"\n' +
    '                     event-handlers="{\n' +
    '                    \'addedfile\': docmanageVm.dzAddedFile,\n' +
    '                    \'error\': docmanageVm.dzError,\n' +
    '                    \'uploadprogress\': docmanageVm.dzUploadProgress,\n' +
    '                    \'success\': docmanageVm.dzSuccess\n' +
    '                    }">\n' +
    '                    <div class="v-DocumentManagement-DropzoneErrors" ng-show="docmanageVm.uploadErrors.length">\n' +
    '                        <div class="v-DocumentManagement-DropzoneError"\n' +
    '                             ng-repeat="error in docmanageVm.uploadErrors track by $index">\n' +
    '                            <span i18n="ngHaloUiLibrary.vDocumentManagementDropzoneFile"></span> "{{error.file}}"\n' +
    '                            <span i18n="ngHaloUiLibrary.vDocumentManagementDropzoneFileUploadError"></span> "{{error.text}}"\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="dz-message v-DocumentManagement-DropzoneMessage" i18n="ngHaloUiLibrary.vDocumentManagementDropzoneMessage">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vDropdownContent/vDropdownContent.html',
    '<div class="v-DropdownContent-Wrapper">\n' +
    '  <div>\n' +
    '    <v-button\n' +
    '        ng-class="{\n' +
    '          \'v-DropdownContent-Button_Active\': dropdownContentVm.isShow\n' +
    '        }"\n' +
    '        ng-click="dropdownContentVm.isShow =! dropdownContentVm.isShow; $event.stopPropagation();">\n' +
    '      {{dropdownContentVm.buttonTitle}}</v-button>\n' +
    '  </div>\n' +
    '  <div class="v-DropdownContent-Container"\n' +
    '       ng-if="dropdownContentVm.isShow"\n' +
    '       v-click-off="dropdownContentVm.isShow"\n' +
    '       v-click-off-exclude-selector="dropdownContentVm.excludeSelector"\n' +
    '       ng-class="{\n' +
    '        \'v-DropdownContent-Container_PositionLeft\': !dropdownContentVm.containerPosition || dropdownContentVm.containerPosition === \'left\',\n' +
    '        \'v-DropdownContent-Container_PositionRight\': dropdownContentVm.containerPosition === \'right\',\n' +
    '        \'v-DropdownContent-Container_Active\': dropdownContentVm.isShow\n' +
    '       }">\n' +
    '    <ng-transclude></ng-transclude>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vIcon/vIcon.html',
    '<svg>\n' +
    '    <use xlink:href="" ng-href="{{iconVm.getSvgIcon(iconVm.icon)}}"></use>\n' +
    '</svg>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vInput/vInput.html',
    '<md-input-container\n' +
    '    class="v-Input-InputContainer" ng-class="{\'md-input-has-placeholder\': inputVm.placeholder}">\n' +
    '    <label\n' +
    '        ng-if="::inputVm.label"\n' +
    '        class="v-Input-Label"\n' +
    '        i18n="{{::inputVm.label}}"></label>\n' +
    '    <input\n' +
    '        ng-attr-placeholder="{{inputVm.placeholder || \'\'}}"\n' +
    '        class="v-Input-Input"\n' +
    '        type="{{::inputVm.type}}"\n' +
    '        name="{{::inputVm.name}}"\n' +
    '        ng-model="inputVm.model"\n' +
    '        ng-attr-min="{{inputVm.min === 0 ? 0 : inputVm.min || undefined}}"\n' +
    '        ng-attr-max="{{inputVm.max === 0 ? 0 : inputVm.max || undefined}}"\n' +
    '        clean="{{::inputVm.maskClean}}"\n' +
    '        restrict="{{inputVm.maskRestrict || \'reject\'}}"\n' +
    '        ng-disabled="inputVm.ngDisabled"\n' +
    '        ng-required="inputVm.required">\n' +
    '\n' +
    '    <div\n' +
    '        class="v-Input-MessageList"\n' +
    '        ng-if="inputVm.form && inputVm.form[inputVm.name].$touched && !inputVm.form[inputVm.name].$valid"\n' +
    '        ng-messages="inputVm.form[inputVm.name].$error">\n' +
    '        <div\n' +
    '            class="v-Input-Message"\n' +
    '            ng-message="required"\n' +
    '            i18n="{{inputVm.messageRequired}}"></div>\n' +
    '    </div>\n' +
    '    <button ng-if="inputVm.clearBtn && inputVm.model"\n' +
    '            class="v-Input-ButtonClear"\n' +
    '            ng-click="inputVm.model = undefined;">\n' +
    '    </button>\n' +
    '</md-input-container>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vLink/vLink.html',
    '<a class="v-Link-Anchor"\n' +
    '   ng-attr-href="{{linkVm.ngDisabled ? undefined : linkVm.href}}"\n' +
    '   ng-disabled="linkVm.ngDisabled"><ng-transclude></ng-transclude></a>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vMenu/vMenu.html',
    '<div class="v-Menu">\n' +
    '    <ng-transclude></ng-transclude>\n' +
    '</div>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vProgressLinear/vProgressLinear.html',
    '<md-progress-linear\n' +
    '    class="v-ProgressLinear-ProgressLinear"\n' +
    '    md-mode="{{progressLinearVm.value >= 0 ? \'determinate\' : \'indeterminate\'}}"\n' +
    '    value="{{progressLinearVm.value}}"></md-progress-linear>\n' +
    '\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vRadioButton/vRadioButton.html',
    '<md-radio-button\n' +
    '    class="v-RadioButton-RadioButton"\n' +
    '    value="{{radioButtonVm.value}}"\n' +
    '    ng-disabled="radioButtonVm.ngDisabled"><ng-transclude></ng-transclude></md-radio-button>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vRadioGroup/vRadioGroup.html',
    '<md-radio-group\n' +
    '    ng-change="radioGroupVm.change()"\n' +
    '    class="v-RadioGroup-RadioGroup"\n' +
    '    ng-model="radioGroupVm.model"><ng-transclude></ng-transclude></md-radio-group>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vSearch/vSearch.html',
    '<div class="v-Search-Wrapper"\n' +
    '     ng-class="{\n' +
    '        \'v-Search-Mode_Slide\': searchVm.mode === \'Slide\',\n' +
    '        \'v-Search-IsFocused\': searchVm.isFocused\n' +
    '     }">\n' +
    '    <v-icon class="v-Search-Icon" icon="search"></v-icon>\n' +
    '    <v-input ng-if="!searchVm.searchMethod"\n' +
    '             class="v-Search-Input"\n' +
    '             placeholder="{{searchVm.placeholder}}"\n' +
    '             model="searchVm.searchText"\n' +
    '             clear-btn="true"\n' +
    '             v-focus-me-halo="searchVm.isFocused"\n' +
    '             v-focus-me-selector-halo="input.md-input"></v-input>\n' +
    '    <v-autocomplete\n' +
    '        ng-if="searchVm.searchMethod"\n' +
    '        class="v-Search-Input"\n' +
    '        search-method="searchVm.searchMethod"\n' +
    '        search-text="searchVm.searchText"\n' +
    '        menu-class="v-Search-Menu"\n' +
    '        auto-select="true"\n' +
    '        placeholder="{{searchVm.placeholder}}"\n' +
    '        delay="{{searchVm.delay}}"\n' +
    '        v-focus-me-halo="searchVm.isFocused"\n' +
    '        v-focus-me-selector-halo="input.md-input">\n' +
    '    </v-autocomplete>\n' +
    '    <ng-transclude\n' +
    '        ng-if="searchVm.searchMethod"\n' +
    '        ng-show="searchVm.isFocused && searchVm.searchText && searchVm.searchMethod(searchVm.searchText).length === 0"\n' +
    '        class="v-Search-NotFound"></ng-transclude>\n' +
    '</div>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vSelect/vSelect.html',
    '<md-input-container class="v-Select-InputContainer">\n' +
    '    <label ng-if="::selectVm.label">\n' +
    '        {{::selectVm.label}}\n' +
    '    </label>\n' +
    '    <md-select\n' +
    '        class="v-Select-Select"\n' +
    '        name="{{::selectVm.name}}"\n' +
    '        ng-model="selectVm.model"\n' +
    '        ng-disabled="selectVm.ngDisabled"\n' +
    '        md-container-class="{{selectVm.classesToContainer}}"\n' +
    '        placeholder="{{selectVm.placeholder}}"\n' +
    '        ng-style="selectVm.style"\n' +
    '        ng-change="selectVm.onChange()"\n' +
    '        ng-required="::selectVm.required"\n' +
    '        ng-class="{\'v-Select-No-Border\': selectVm.noBorder}">\n' +
    '        <md-option ng-if="selectVm.defaultOption" class="v-Select-Option" value="">\n' +
    '            {{selectVm.defaultOption}}\n' +
    '        </md-option>\n' +
    '        <md-option\n' +
    '            ng-repeat="item in selectVm.data"\n' +
    '            class="v-Select-Option"\n' +
    '            ng-if="!item.isVisible || item.isVisible(item[selectVm.valueField])"\n' +
    '            ng-class="{\'v-Select-Option_SeparatorAfter\': item.separatorAfter}"\n' +
    '            value="{{item[selectVm.valueField]}}" i18n="{{item[selectVm.textField]}}"></md-option>\n' +
    '\n' +
    '        <md-tooltip ng-if="::selectVm.tooltip">\n' +
    '            <span ng-if="selectVm.model == null">{{selectVm.placeholder | i18n}}</span>\n' +
    '            <span ng-if="selectVm.model != null">{{selectVm.data[selectVm.model-1].text}}</span>\n' +
    '        </md-tooltip>\n' +
    '    </md-select>\n' +
    '    <div>\n' +
    '\n' +
    '    </div>\n' +
    '    <div\n' +
    '        class="v-Select-MessageList"\n' +
    '        ng-if="selectVm.form && selectVm.form[selectVm.name].$touched && !selectVm.form[selectVm.name].$valid"\n' +
    '        ng-messages="selectVm.form[inputVm.name].$error">\n' +
    '        <div\n' +
    '            class="v-Select-Message"\n' +
    '            ng-message="required"\n' +
    '            i18n="{{selectVm.messageRequired}}"></div>\n' +
    '    </div>\n' +
    '</md-input-container>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vSpinner/vSpinner.html',
    '<md-progress-circular\n' +
    '    class="v-Spinner-ProgressCircular"\n' +
    '    md-mode="{{spinnerVm.value >= 0 ? \'determinate\' : \'indeterminate\'}}"\n' +
    '    md-diameter="80"\n' +
    '    value="{{spinnerVm.value}}"></md-progress-circular>\n' +
    '\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vSwitch/vSwitch.html',
    '<md-switch\n' +
    '    class="v-Switch-Switch"\n' +
    '    ng-model="switchVm.model"\n' +
    '    ng-disabled="switchVm.ngDisabled"\n' +
    '    aria-label=""><ng-transclude></ng-transclude></md-switch>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vTable/vTable.html',
    '<table class="v-Table-Table">\n' +
    '  <thead class="v-Table-Thead" ng-if="!tableVm.options.hideHeader">\n' +
    '    <tr class="v-Table-Tr">\n' +
    '\n' +
    '      <td class="v-Table-Td v-Table-TdBulkSelect"\n' +
    '          ng-if="tableVm.options.bulkSelect">\n' +
    '        <v-checkbox model="tableVm.allSelected" ng-click="tableVm.toggleAllSelected()"></v-checkbox>\n' +
    '      </td>\n' +
    '\n' +
    '      <td class="v-Table-Td {{field.className}}" ng-class="{\n' +
    '        \'v-Table-TdSortable\': field.sortable,\n' +
    '        \'v-Table-TdSortableActive\': tableVm.options.order.field == field.key,\n' +
    '        \'v-Table-TdSortableReverse\': tableVm.options.order.field == field.key && tableVm.options.order.reverse}"\n' +
    '        ng-click="tableVm.sortableAction(field)"\n' +
    '        ng-repeat="field in tableVm.options.fields">\n' +
    '        {{field.title | i18n}}\n' +
    '        <v-icon ng-if="field.sortable" icon="sortable-active" class="v-Table-IconSortable"></v-icon>\n' +
    '      </td>\n' +
    '\n' +
    '      <td class="v-Table-Td v-Table-TdActions" ng-if="tableVm.options.actions && tableVm.options.actions.length"></td>\n' +
    '\n' +
    '    </tr>\n' +
    '  </thead>\n' +
    '  <tbody class="v-Table-Tbody">\n' +
    '    <tr class="v-Table-Tr" ng-repeat="item in tableVm.data | filter:tableVm.options.filter | orderBy:tableVm.options.order.field:tableVm.options.order.reverse">\n' +
    '\n' +
    '      <td class="v-Table-Td v-Table-TdBulkSelect"\n' +
    '          ng-if="tableVm.options.bulkSelect">\n' +
    '        <v-checkbox model="item.selected" ng-click="tableVm.checkAllSelected()">\n' +
    '        </v-checkbox>\n' +
    '      </td>\n' +
    '\n' +
    '      <td class="v-Table-Td {{field.className}}" ng-repeat="field in tableVm.options.fields">\n' +
    '        <span class="v-Table-TdInner">\n' +
    '          <span ng-if="field.template" bind-html-compile="field.template"></span>\n' +
    '          <span ng-if="!field.template">{{item[field.key]}}</span>\n' +
    '        </span>\n' +
    '      </td>\n' +
    '      <td class="v-Table-Td v-Table-TdActions" ng-if="tableVm.options.actions && tableVm.options.actions.length">\n' +
    '        <v-action-menu data="tableVm.options.actions" context="item"></v-action-menu>\n' +
    '      </td>\n' +
    '\n' +
    '    </tr>\n' +
    '  </tbody>\n' +
    '</table>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vTabs/vTabs.html',
    '<div ng-class="{\n' +
    '    \'v-Tabs-Mode_Left\': mode === \'Left\'\n' +
    '}">\n' +
    '<ng-transclude></ng-transclude>\n' +
    '</div>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vTextarea/vTextarea.html',
    '<md-input-container class="v-Textarea-InputContainer">\n' +
    '    <label\n' +
    '        class="v-Textarea-Label"\n' +
    '        ng-if="::label">{{::label}}</label>\n' +
    '    <textarea rows="4"\n' +
    '              ng-model="model"\n' +
    '              md-maxlength="{{::maxLength}}"\n' +
    '              maxlength="{{::maxLength}}"\n' +
    '              ng-attr-name="{{name ? name : undefined}}"\n' +
    '              ng-required="required"\n' +
    '              class="v-Textarea-Textarea"\n' +
    '              ng-disabled="ngDisabled"\n' +
    '              spellcheck="false"></textarea>\n' +
    '</md-input-container>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vToggle/vToggle.html',
    '<ng-transclude></ng-transclude>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vToolbar/vToolbar.html',
    '<ng-transclude class="v-Toolbar-Wrapper"></ng-transclude>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vTooltip/vTooltip.html',
    '<md-tooltip\n' +
    '    md-visible="tooltipVm.visible"\n' +
    '    md-direction="{{tooltipVm.direction}}">\n' +
    '    <ng-transclude></ng-transclude>\n' +
    '</md-tooltip>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vWizard/vWizard.html',
    '<wizard hide-indicators="wizardVM.hideIndicators" name="{{::wizardVM.name}}">\n' +
    '    <ng-transclude></ng-transclude>\n' +
    '</wizard>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vCard/templates/header.appointment.html',
    '<span class="v-Card-HeaderIcon">\n' +
    '    <span class="v-Card-AppointmentClock"\n' +
    '          ng-class="\'hour-\' + cardVm.appointment.startTime.getHours() + \' minute-\' + cardVm.appointment.startTime.getMinutes()"></span>\n' +
    '</span>\n' +
    '<div class="v-Card-HeaderContent" flex>\n' +
    '    <div layout="row">\n' +
    '        <div layout="column">\n' +
    '            <div class="v-Card-AppointmentTime">{{cardVm.appointment.startTime | date: \'h:mma\'}}</div>\n' +
    '            <div class="v-Card-AppointmentDuration">{{cardVm.getMinutesFromMs(cardVm.appointment.duration)}}\n' +
    '                <span i18n="ngHaloUiLibrary.vCardAppointmentDurationMeasure"></span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div layout="column" flex class="v-Card-AppointmentHeaderRightSection">\n' +
    '            <div ng-if="cardVm.date" layout="column" layout-align="center end">\n' +
    '                <span class="v-Card-HeaderDate">\n' +
    '                  <span ng-include="\'components/vCard/templates/header.date.html\'"></span>\n' +
    '                </span>\n' +
    '            </div>\n' +
    '            <div layout="column">\n' +
    '                <div class="v-Card-AppointmentRoom">{{cardVm.appointment.room}}</div>\n' +
    '                <div class="v-Card-AppointmentPurpose">{{cardVm.appointment.purpose}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vCard/templates/header.date.html',
    '<div>\n' +
    '    <div ng-if="cardVm.date.text">{{cardVm.date.text}}</div>\n' +
    '    <div ng-if="cardVm.date.value">\n' +
    '        {{(cardVm.getTodayYesterday(cardVm.date.value) | i18n) || (cardVm.date.value | date: cardVm.date.format)}}\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vCard/templates/header.default.html',
    '<span class="v-Card-HeaderIcon" ng-if="cardVm.headerInfo.icon">\n' +
    '    <v-icon icon="{{cardVm.headerInfo.icon}}"></v-icon>\n' +
    '</span>\n' +
    '<div class="v-Card-HeaderContent" flex>\n' +
    '    <span class="v-Card-HeaderTitle" ng-if="cardVm.headerInfo.title">\n' +
    '      {{cardVm.headerInfo.title}}\n' +
    '    </span>\n' +
    '    <span class="v-Card-HeaderDescription" ng-if="cardVm.headerInfo.description">\n' +
    '      {{cardVm.headerInfo.description}}\n' +
    '    </span>\n' +
    '</div>\n' +
    '<span class="v-Card-HeaderDate" ng-if="cardVm.date">\n' +
    '  <span ng-include="\'components/vCard/templates/header.date.html\'"></span>\n' +
    '</span>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vCard/templates/person.html',
    '<div ng-if="cardVm.person"\n' +
    '        ng-click="cardVm.toggleExpansion"\n' +
    '        layout="row" layout-align="start center"\n' +
    '        class="v-Card-PersonExists">\n' +
    '    <div class="v-Card-PersonImage">\n' +
    '        <img ng-src="{{::cardVm.person.photo || cardVm.DEFAULT_PATIENT_PHOTO}}"/>\n' +
    '    </div>\n' +
    '    <span ng-if="::!cardVm.personClicked" class="v-Card-PersonName" flex="auto">{{::cardVm.person.givenName}} {{::cardVm.person.familyName}}</span>\n' +
    '    <v-link ng-if="::cardVm.personClicked" class="v-Card-PersonLink" ng-click="cardVm.doPersonClicked($event)" flex="auto">{{::cardVm.person.givenName}} {{::cardVm.person.familyName}}</v-link>\n' +
    '</div>\n' +
    '<div ng-if="!cardVm.person && cardVm.addPerson"\n' +
    '     layout="row" layout-align="start center">\n' +
    '    <v-link ng-show="!cardVm.isAddPersonActive"\n' +
    '            ng-click="cardVm.isAddPersonActive = true"><span i18n="ngHaloUiLibrary.vCardAddPatient"></span></v-link>\n' +
    '    <v-autocomplete\n' +
    '            class="v-Autocomplete_NoMargin"\n' +
    '            ng-show="cardVm.isAddPersonActive"\n' +
    '            v-click-off="cardVm.isAddPersonActive"\n' +
    '            v-focus-me-halo="cardVm.isAddPersonActive"\n' +
    '            v-focus-me-selector-halo="input.md-input"\n' +
    '            search-method="cardVm.addPerson.searchMethod"\n' +
    '            selected-change="cardVm.addPerson.selectMethod">\n' +
    '        <v-autocomplete-template>\n' +
    '            <span>{{item.givenName + \' \' + item.familyName}}</span>\n' +
    '        </v-autocomplete-template>\n' +
    '    </v-autocomplete>\n' +
    '</div>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vDatepick/templates/selected-date-string.html',
    '<span class="v-Datepick-SelectedDateDate">{{(datepickVm.model || datepickVm.today) | date:(datepickVm.format || datepickVm.FORMAT_DEFAULT)}}</span>');
}]);

angular.module('ngHaloUiLibrary').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/vDatepick/templates/selected-date.html',
    '<span class="v-Datepick-SelectedDateDayTitle">{{(datepickVm.model || datepickVm.today) | date: \'EEE\'}}</span>\n' +
    '<span class="v-Datepick-SelectedDateMonth">{{(datepickVm.model || datepickVm.today) | date: \'MMM\'}}</span>\n' +
    '<span class="v-Datepick-SelectedDateDay">{{(datepickVm.model || datepickVm.today).getDate()}}</span>\n' +
    '<span class="v-Datepick-SelectedDateYear">{{(datepickVm.model || datepickVm.today).getFullYear()}}</span>');
}]);
