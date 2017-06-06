"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
//ComponentModules
var maintenance_module_1 = require("./components/maintenance/maintenance.module");
var appcatalog_module_1 = require("./components/application-catalog/appcatalog.module");
//routing
var app_routing_1 = require("./app.routing");
//services
var getauth_service_1 = require("./services/getauth.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, maintenance_module_1.MaintenanceModule,
            appcatalog_module_1.AppCatalogModule, app_routing_1.AppRouting
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [getauth_service_1.GetAuthService]
    })
], AppModule);
exports.AppModule = AppModule;
