"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var home_1 = require('./components/home/home');
var about_1 = require('./components/about/about');
var peppapig_component_1 = require('./components/peppapig.component');
var SeedApp = (function () {
    function SeedApp() {
    }
    SeedApp = __decorate([
        core_1.Component({
            selector: 'seed-app',
            providers: [],
            pipes: [],
            directives: [router_1.ROUTER_DIRECTIVES, peppapig_component_1.PeppaPigComponent],
            templateUrl: 'app/seed-app.html'
        }),
        router_1.RouteConfig([
            { path: '/home', component: home_1.Home, name: 'Home', useAsDefault: true },
            { path: '/about', component: about_1.About, name: 'About' }
        ])
    ], SeedApp);
    return SeedApp;
}());
exports.SeedApp = SeedApp;
//# sourceMappingURL=seed-app.js.map