"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var peppapig_services_1 = require('../services/peppapig.services');
var PeppaPigComponent = (function () {
    function PeppaPigComponent(_peppapigService) {
        this._peppapigService = _peppapigService;
        this.isdisabled = true;
        this.bigicon = true;
        this.welcome = "Angular2 y Peppa Pig";
        this.age = "22";
        this.address = "ave catluyna";
        this.friends = this._peppapigService.getPeppaFriends();
        console.log(this.friends);
        console.log("heellooo");
    }
    PeppaPigComponent = __decorate([
        core_1.Component({
            selector: 'peppapig-component',
            template: "\n              <div class=\"row\">\n\n              <div class=\"col s12\" [style.backgroundColor] = \"isdisabled ? 'gray' : 'blue'\">\n                <h2>{{welcome}}</h2>\n                <input type=\"text\" >\n              <a class=\"waves-effect waves-light btn\" [class.disabled] = \"isdisabled\" >\n             class binding </a>\n             <a class=\"waves-effect waves-light btn\">style binding</a>\n                </div>\n              </div>",
            providers: [peppapig_services_1.PeppaPigService]
        })
    ], PeppaPigComponent);
    return PeppaPigComponent;
}());
exports.PeppaPigComponent = PeppaPigComponent;
//# sourceMappingURL=peppapig.component.js.map