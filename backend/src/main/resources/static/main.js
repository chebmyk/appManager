(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: XhrInterceptor, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrInterceptor", function() { return XhrInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");
/* harmony import */ var _components_commons_message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/commons/message/message.component */ "./src/app/components/commons/message/message.component.ts");
/* harmony import */ var _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/applications/applications.component */ "./src/app/components/applications/applications.component.ts");
/* harmony import */ var _components_application_details_application_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/application-details/application-details.component */ "./src/app/components/application-details/application-details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_material_app_materialComponents_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/material/app.materialComponents.module */ "./src/app/modules/material/app.materialComponents.module.ts");
/* harmony import */ var _modules_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/routing/app-routing.module */ "./src/app/modules/routing/app-routing.module.ts");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var _components_commons_add_remove_block_add_remove_block_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/commons/add-remove-block/add-remove-block.component */ "./src/app/components/commons/add-remove-block/add-remove-block.component.ts");
/* harmony import */ var _components_commons_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/commons/grid/grid.component */ "./src/app/components/commons/grid/grid.component.ts");
/* harmony import */ var _components_commons_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/commons/remove-dialog/remove-dialog.component */ "./src/app/components/commons/remove-dialog/remove-dialog.component.ts");
/* harmony import */ var _components_commons_field_validation_field_validation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/commons/field-validation/field-validation.component */ "./src/app/components/commons/field-validation/field-validation.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_commons_passwords_passwords_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/commons/passwords/passwords.component */ "./src/app/components/commons/passwords/passwords.component.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
/* harmony import */ var _services_common_sharedData__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/common/sharedData */ "./src/app/services/common/sharedData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //Import builtin FormsModule



















var XhrInterceptor = /** @class */ (function () {
    function XhrInterceptor() {
    }
    XhrInterceptor.prototype.intercept = function (req, next) {
        var xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    };
    XhrInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], XhrInterceptor);
    return XhrInterceptor;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
                _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailsComponent"],
                _components_commons_message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"],
                _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_7__["ApplicationsComponent"],
                _components_application_details_application_details_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationDetailsComponent"],
                _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__["MainMenuComponent"],
                _components_commons_add_remove_block_add_remove_block_component__WEBPACK_IMPORTED_MODULE_14__["AddRemoveBlockComponent"],
                _components_commons_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__["GridComponent"],
                _components_commons_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_16__["RemoveDialogComponent"],
                _components_commons_field_validation_field_validation_component__WEBPACK_IMPORTED_MODULE_17__["FieldValidationComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _components_commons_passwords_passwords_component__WEBPACK_IMPORTED_MODULE_19__["PasswordsComponent"],
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__["ChangePasswordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _modules_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _modules_material_app_materialComponents_module__WEBPACK_IMPORTED_MODULE_11__["MaterialComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: XhrInterceptor, multi: true }, _services_common_sharedData__WEBPACK_IMPORTED_MODULE_21__["SharedData"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/application.ts":
/*!****************************************!*\
  !*** ./src/app/classes/application.ts ***!
  \****************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
var Application = /** @class */ (function () {
    function Application() {
    }
    return Application;
}());



/***/ }),

/***/ "./src/app/classes/user.ts":
/*!*********************************!*\
  !*** ./src/app/classes/user.ts ***!
  \*********************************/
/*! exports provided: User, Securiy, Permission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Securiy", function() { return Securiy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var Securiy = /** @class */ (function () {
    function Securiy() {
    }
    return Securiy;
}());

var Permission = /** @class */ (function () {
    function Permission(act, trgt) {
        this.action = act;
        this.target = trgt;
    }
    return Permission;
}());



/***/ }),

/***/ "./src/app/components/application-details/application-details.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/application-details/application-details.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-raised-button{\r\n  margin: 5px;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/application-details/application-details.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/application-details/application-details.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form [formGroup]=\"appForm\" (ngSubmit)=\"save()\">\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"id\" formControlName=\"id\" readonly>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n        <mat-error>\r\n          <field-validation [control] = \"appForm.controls.name\" ></field-validation>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Types\" formControlName=\"type\">\r\n          <mat-option *ngFor=\"let type of app_types\" [value]=\"type.value\">\r\n            {{type.value}}\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error>\r\n          <field-validation [control] = \"appForm.controls.type\" ></field-validation>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div style=\"margin: 10px\">\r\n        <mat-card>\r\n          <mat-card-header>\r\n            <mat-card-title>Content Types</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <mat-selection-list formControlName=\"content_types\">\r\n            <mat-list-option [disabled]=\"readOnly\" checkboxPosition=\"before\"  *ngFor=\"let contentType of app_ContentTypes\" [value]=\"contentType.value\">\r\n              {{contentType.value}}\r\n            </mat-list-option>\r\n          </mat-selection-list>\r\n          </mat-card-content>\r\n          <mat-card-footer>\r\n          </mat-card-footer>\r\n        </mat-card>\r\n        <mat-error>\r\n          <field-validation [control] = \"appForm.controls.content_types\" ></field-validation>\r\n        </mat-error>\r\n    </div>\r\n    <div formGroupName=\"user\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Owner\"  formControlName=\"name\" readonly>\r\n      </mat-form-field>\r\n      <mat-error>\r\n        <field-validation [control] = \"appForm.controls.user\"></field-validation>\r\n      </mat-error>\r\n    </div>\r\n    <div>\r\n      <button mat-raised-button type=\"button\" [routerLink]=\"['..']\">Back</button>\r\n      <button *ngIf=\"canUpdate || canCreate\" mat-raised-button type=\"submit\" [disabled]=\"appForm.untouched\">Save</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/application-details/application-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/application-details/application-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ApplicationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationDetailsComponent", function() { return ApplicationDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/application */ "./src/app/classes/application.ts");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_utils_Common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils/Common */ "./src/app/services/utils/Common.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth/authenticate.service */ "./src/app/services/auth/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApplicationDetailsComponent = /** @class */ (function () {
    function ApplicationDetailsComponent(applicationService, authService, route, location, formBuilder) {
        this.applicationService = applicationService;
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.formBuilder = formBuilder;
        this.app_types = _services_utils_Common__WEBPACK_IMPORTED_MODULE_5__["Common"].app_types;
        this.app_ContentTypes = _services_utils_Common__WEBPACK_IMPORTED_MODULE_5__["Common"].content_types;
    }
    ApplicationDetailsComponent.prototype.ngOnInit = function () {
        this.canCreate = this.authService.hasAccess('CREATE', 'App');
        this.canUpdate = this.authService.hasAccess('UPDATE', 'App');
        this.readOnly = !(this.canCreate || this.canUpdate);
        this.appForm = this.formBuilder.group({
            id: [{ value: '', disabled: this.readOnly }],
            name: [{ value: '', disabled: this.readOnly }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(200)]],
            type: [{ value: '', disabled: this.readOnly }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            content_types: [{ value: '', disabled: this.readOnly }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            user: this.formBuilder.group({
                id: [''],
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(200)]],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
                role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
            })
        });
        this.getApp();
    };
    ApplicationDetailsComponent.prototype.getApp = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = _this.route.snapshot.paramMap.get('id');
            if (id == 'add') {
                _this.app = new _classes_application__WEBPACK_IMPORTED_MODULE_1__["Application"]();
                _this.appForm.controls.user.setValue(_this.authService.currentUser);
            }
            else {
                _this.applicationService.getApp(+id)
                    .subscribe(function (app) {
                    _this.app = app;
                    _this.setAppFormGroup(_this.app);
                });
            }
        });
    };
    ApplicationDetailsComponent.prototype.setAppFormGroup = function (app) {
        this.appForm.setValue({
            id: app.id,
            name: app.name,
            type: app.type,
            content_types: app.contentTypes,
            user: app.user
        }, { onlySelf: true });
    };
    ApplicationDetailsComponent.prototype.backToAppList = function () {
        this.location.back();
    };
    ApplicationDetailsComponent.prototype.save = function () {
        var _this = this;
        this.applicationService.messageService.clear();
        if (this.appForm.valid) {
            var app = this.appForm.value;
            this.app.type = app.type;
            this.app.name = app.name;
            this.app.contentTypes = app.content_types;
            this.app.user = app.user;
            if (this.app.id == null) {
                this.applicationService.add(this.app).subscribe(function (app) {
                    _this.app = app;
                    _this.setAppFormGroup(app);
                    _this.applicationService.messageService.success("Application with name [" + app.name + "] was successfully created");
                }, function () {
                });
            }
            else {
                this.applicationService.update(this.app).subscribe(function (app) {
                    _this.app = app;
                    _this.applicationService.messageService.success("Application with name [" + app.name + "] was successfully updated");
                }, function () {
                });
            }
        }
        else {
            this.applicationService.messageService.warning("Please fill required fields");
        }
    };
    ApplicationDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application-details',
            template: __webpack_require__(/*! ./application-details.component.html */ "./src/app/components/application-details/application-details.component.html"),
            styles: [__webpack_require__(/*! ./application-details.component.css */ "./src/app/components/application-details/application-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_application_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"],
            _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], ApplicationDetailsComponent);
    return ApplicationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/applications/applications.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/applications/applications.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-column-select {\r\n  overflow: initial;\r\n}\r\n\r\n.mat-raised-button{\r\n  margin: 5px;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/applications/applications.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/applications/applications.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button *ngIf=\"canCreate\"  mat-raised-button [routerLink]=\"['./add']\">Add</button>\r\n  <button *ngIf=\"canDelete\"  mat-raised-button (click)=\"openRemoveDialog()\"  [disabled]=\"!selection.hasValue()\">Delete</button>\r\n</div>\r\n\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"tableDataSource\" matSort>\r\n\r\n    <ng-container matColumnDef=\"select\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n        </mat-checkbox>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let row\">\r\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                      (change)=\"$event ? selection.toggle(row) : null\"\r\n                      [checked]=\"selection.isSelected(row)\">\r\n        </mat-checkbox>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\r\n      <td mat-cell *matCellDef=\"let app\"> {{app.id}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n      <td mat-cell *matCellDef=\"let app\">\r\n        <a routerLink=\"/apps/{{app.id}}\">\r\n          {{app.name}}\r\n        </a>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"type\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Type</th>\r\n      <td mat-cell *matCellDef=\"let app\"> {{app.type}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"contentType\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Content Type</th>\r\n      <td mat-cell *matCellDef=\"let app\"> {{app.contentTypes}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"user\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>User</th>\r\n      <td mat-cell *matCellDef=\"let app\"> {{app.user.name}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n        (click)=\"selection.toggle(row)\">\r\n    </tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/applications/applications.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/applications/applications.component.ts ***!
  \*******************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _commons_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commons/remove-dialog/remove-dialog.component */ "./src/app/components/commons/remove-dialog/remove-dialog.component.ts");
/* harmony import */ var _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth/authenticate.service */ "./src/app/services/auth/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent(applicationService, authService, removeDialog) {
        this.applicationService = applicationService;
        this.authService = authService;
        this.removeDialog = removeDialog;
        this.displayedColumns = ['select', 'id', 'name', 'type', 'contentType', 'user'];
        this.allowMultiSelect = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](this.allowMultiSelect, []);
        this.tableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
        this.getApplications();
        this.tableDataSource.paginator = this.paginator;
        this.tableDataSource.sort = this.sort;
        this.canCreate = this.authService.hasAccess('CREATE', 'App');
        this.canDelete = this.authService.hasAccess('DELETE', 'App');
    };
    ApplicationsComponent.prototype.getApplications = function () {
        var _this = this;
        this.applicationService.getApps()
            .subscribe(function (app) {
            _this.applications = app;
            _this.tableDataSource.data = app;
            if (_this.applications.length == 0) {
                _this.applicationService.messageService.info("There is no applications");
            }
        });
    };
    ApplicationsComponent.prototype.applyFilter = function (filterValue) {
        this.tableDataSource.filter = filterValue.trim().toLowerCase();
        if (this.tableDataSource.paginator) {
            this.tableDataSource.paginator.firstPage();
        }
    };
    ApplicationsComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.tableDataSource.data.length;
        return numSelected == numRows;
    };
    ApplicationsComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.tableDataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    ApplicationsComponent.prototype.openRemoveDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.ariaLabel = 'Delete ...';
        dialogConfig.data = this.selection.selected;
        var dialogRef = this.removeDialog.open(_commons_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_5__["RemoveDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.removeApps();
            }
        });
    };
    ApplicationsComponent.prototype.removeApps = function () {
        var _this = this;
        var calls = [];
        this.selection.selected.forEach(function (app) {
            calls.push(_this.applicationService.delete(app.id));
        });
        Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(calls).subscribe(function () {
            _this.getApplications();
            _this.selection.clear();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ApplicationsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ApplicationsComponent.prototype, "sort", void 0);
    ApplicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applications',
            template: __webpack_require__(/*! ./applications.component.html */ "./src/app/components/applications/applications.component.html"),
            styles: [__webpack_require__(/*! ./applications.component.css */ "./src/app/components/applications/applications.component.css")]
        }),
        __metadata("design:paramtypes", [_services_application_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"],
            _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/components/change-password/change-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-raised-button{\r\n  margin: 5px;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/change-password/change-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div>\r\n    <p>Reset password</p>\r\n    <p>For User email: {{modifiedCredentials.user.email}}</p>\r\n  </div>\r\n  <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"savePassword()\">\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"your Password\" type=\"password\" formControlName=\"currentPassword\">\r\n          <mat-error>\r\n            <field-validation [control]=\"changePasswordForm.controls.currentPassword\"></field-validation>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <app-passwords [passForm]=\"changePasswordForm\"></app-passwords>\r\n    <div>\r\n      <button mat-raised-button type=\"button\" [routerLink]=\"['..']\">Back</button>\r\n      <button mat-raised-button type=\"submit\" [disabled]=\"changePasswordForm.untouched\">Save</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/change-password/change-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/user */ "./src/app/classes/user.ts");
/* harmony import */ var _services_common_sharedData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common/sharedData */ "./src/app/services/common/sharedData.ts");
/* harmony import */ var _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth/authenticate.service */ "./src/app/services/auth/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(userService, authService, formBuilder, sharedData) {
        this.userService = userService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.sharedData = sharedData;
        this.modifiedCredentials = new _classes_user__WEBPACK_IMPORTED_MODULE_3__["Securiy"]();
        this.changePasswordForm = this.formBuilder.group({
            user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordForm.controls.user.setValue(this.sharedData.updatedUser);
        this.modifiedCredentials.user = this.changePasswordForm.controls.user.value;
        this.canCreate = this.authService.hasAccess('CREATE', 'Security');
        this.canUpdate = this.authService.hasAccess('UPDATE', 'Security');
    };
    ChangePasswordComponent.prototype.savePassword = function () {
        var _this = this;
        this.userService.messageService.clear();
        if (!this.changePasswordForm.invalid) {
            var formValues = this.changePasswordForm.value;
            this.modifiedCredentials.user = formValues.user;
            this.modifiedCredentials.password = formValues.passwords.password;
            var currentCredentials = new _classes_user__WEBPACK_IMPORTED_MODULE_3__["Securiy"]();
            currentCredentials.user = this.authService.currentUser;
            currentCredentials.password = formValues.currentPassword;
            this.userService.checkPassword(currentCredentials).subscribe(function () {
                _this.userService.resetPassword(_this.modifiedCredentials).subscribe(function () { _this.userService.messageService.success("Password [" + _this.modifiedCredentials.user.email + "] successfully updated"); }, function () { });
            }, function () { _this.authService.messageService.error('Login failed: current User password is wrong'); });
        }
        else {
            this.userService.messageService.warning("Input data is not valid");
        }
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/components/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/components/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_common_sharedData__WEBPACK_IMPORTED_MODULE_4__["SharedData"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/commons/add-remove-block/add-remove-block.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/commons/add-remove-block/add-remove-block.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/commons/add-remove-block/add-remove-block.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/commons/add-remove-block/add-remove-block.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  add-remove-block works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/commons/add-remove-block/add-remove-block.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/commons/add-remove-block/add-remove-block.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddRemoveBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRemoveBlockComponent", function() { return AddRemoveBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddRemoveBlockComponent = /** @class */ (function () {
    function AddRemoveBlockComponent() {
    }
    AddRemoveBlockComponent.prototype.ngOnInit = function () {
    };
    AddRemoveBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-remove-block',
            template: __webpack_require__(/*! ./add-remove-block.component.html */ "./src/app/components/commons/add-remove-block/add-remove-block.component.html"),
            styles: [__webpack_require__(/*! ./add-remove-block.component.css */ "./src/app/components/commons/add-remove-block/add-remove-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddRemoveBlockComponent);
    return AddRemoveBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/commons/field-validation/field-validation.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/commons/field-validation/field-validation.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/commons/field-validation/field-validation.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/commons/field-validation/field-validation.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div *ngIf=\"getValidationErrors() !== null\">\r\n    <div  *ngFor=\"let error of validationErrors\" >{{error.message}}</div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/commons/field-validation/field-validation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/commons/field-validation/field-validation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FieldValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldValidationComponent", function() { return FieldValidationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validation_ValidationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validation/ValidationService */ "./src/app/services/validation/ValidationService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FieldValidationComponent = /** @class */ (function () {
    function FieldValidationComponent(validationService) {
        this.validationService = validationService;
    }
    FieldValidationComponent.prototype.ngOnInit = function () {
    };
    FieldValidationComponent.prototype.getValidationErrors = function () {
        this.validationErrors = this.validationService.validateControl(this.control);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["AbstractControl"])
    ], FieldValidationComponent.prototype, "control", void 0);
    FieldValidationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'field-validation',
            template: __webpack_require__(/*! ./field-validation.component.html */ "./src/app/components/commons/field-validation/field-validation.component.html"),
            styles: [__webpack_require__(/*! ./field-validation.component.css */ "./src/app/components/commons/field-validation/field-validation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validation_ValidationService__WEBPACK_IMPORTED_MODULE_2__["ValidationService"]])
    ], FieldValidationComponent);
    return FieldValidationComponent;
}());



/***/ }),

/***/ "./src/app/components/commons/grid/grid.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/commons/grid/grid.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/commons/grid/grid.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/commons/grid/grid.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  grid works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/commons/grid/grid.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/commons/grid/grid.component.ts ***!
  \***********************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/components/commons/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.css */ "./src/app/components/commons/grid/grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/components/commons/message/message.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/commons/message/message.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  color: red;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear {\r\n  color: #888;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/commons/message/message.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/commons/message/message.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\" style=\"width: 100%\">\r\n<!--  <button class=\"clear\" (click)=\"messageService.clear()\"><mat-icon>clear_all</mat-icon></button>-->\r\n  <mat-chip-list #chipList>\r\n    <mat-chip *ngFor=\"let message of messageService.messages\" (removed)=\"messageService.remove(message)\" style=\"width: 100%\" class=\"{{ cssClass(message) }} alert-dismissable\">\r\n      {{message.description}}\r\n      <mat-icon style=\"float: right\" matChipRemove>&times;</mat-icon>\r\n    </mat-chip>\r\n  </mat-chip-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/commons/message/message.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/commons/message/message.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ "./src/app/components/commons/message/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent.prototype.cssClass = function (message) {
        if (!message) {
            return;
        }
        switch (message.type) {
            case _message__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Success:
                return 'alert alert-success';
            case _message__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Error:
                return 'alert alert-danger';
            case _message__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Info:
                return 'alert alert-info';
            case _message__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Warning:
                return 'alert alert-warning';
        }
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/commons/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/components/commons/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_services_message_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/components/commons/message/message.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/commons/message/message.ts ***!
  \*******************************************************/
/*! exports provided: Message, MessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
var Message = /** @class */ (function () {
    function Message(type, text) {
        this.type = type;
        this.description = text;
    }
    return Message;
}());

var MessageType;
(function (MessageType) {
    MessageType[MessageType["Success"] = 0] = "Success";
    MessageType[MessageType["Error"] = 1] = "Error";
    MessageType[MessageType["Info"] = 2] = "Info";
    MessageType[MessageType["Warning"] = 3] = "Warning";
})(MessageType || (MessageType = {}));


/***/ }),

/***/ "./src/app/components/commons/passwords/passwords.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/commons/passwords/passwords.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/commons/passwords/passwords.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/commons/passwords/passwords.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"passForm\">\r\n  <div formGroupName=\"passwords\">\r\n  <div>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"new password\" type=\"password\" formControlName=\"password\">\r\n      <mat-error>\r\n        <field-validation [control]=\"passForm.controls.passwords.controls.password\"></field-validation>\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"confirm new password\" type=\"password\" formControlName=\"confirmPassword\">\r\n      <mat-error>\r\n        <field-validation [control]=\"passForm.controls.passwords.controls.confirmPassword\"></field-validation>\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/commons/passwords/passwords.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/commons/passwords/passwords.component.ts ***!
  \*********************************************************************/
/*! exports provided: PasswordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordsComponent", function() { return PasswordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordsComponent = /** @class */ (function () {
    function PasswordsComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    PasswordsComponent.prototype.ngOnInit = function () {
        var passControl;
        passControl = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]]
        }, { validator: passwordMatchValidator, updateOn: 'blur' });
        function passwordMatchValidator(g) {
            if (g.get('password').value != g.get('confirmPassword').value) {
                return g.get('confirmPassword').setErrors({ mismatch: "Entered passwords are not the same" });
            }
        }
        this.passForm.addControl("passwords", passControl);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], PasswordsComponent.prototype, "passForm", void 0);
    PasswordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-passwords',
            template: __webpack_require__(/*! ./passwords.component.html */ "./src/app/components/commons/passwords/passwords.component.html"),
            styles: [__webpack_require__(/*! ./passwords.component.css */ "./src/app/components/commons/passwords/passwords.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PasswordsComponent);
    return PasswordsComponent;
}());



/***/ }),

/***/ "./src/app/components/commons/remove-dialog/remove-dialog.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/commons/remove-dialog/remove-dialog.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/commons/remove-dialog/remove-dialog.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/commons/remove-dialog/remove-dialog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete selected items?</h2>\r\n<mat-dialog-content>\r\nYou are going to delete [{{data.length}}] items.\r\n<ul>\r\n  <li *ngFor=\"let item of data\">{{item.name}}</li>\r\n</ul>\r\nClick \"Sabmit\" to confirm.\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close] = \"true\" color=\"primary\">Submit</button>\r\n  <button mat-button mat-dialog-close  cdkFocusInitial color=\"warn\">Cancel</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/components/commons/remove-dialog/remove-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/commons/remove-dialog/remove-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RemoveDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDialogComponent", function() { return RemoveDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var RemoveDialogComponent = /** @class */ (function () {
    function RemoveDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    RemoveDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    RemoveDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove-dialog',
            template: __webpack_require__(/*! ./remove-dialog.component.html */ "./src/app/components/commons/remove-dialog/remove-dialog.component.html"),
            styles: [__webpack_require__(/*! ./remove-dialog.component.css */ "./src/app/components/commons/remove-dialog/remove-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [String, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], RemoveDialogComponent);
    return RemoveDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  max-width: 450px;\r\n  margin: 2em auto;\r\n  text-align: center;\r\n  border-radius: .5rem;\r\n}\r\n\r\n.full-width-input {\r\n  width: 100%;\r\n}\r\n\r\nmat-form-field{\r\n  line-height: 2.1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signin-content\">\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <h1>Login</h1>\r\n      <app-message></app-message>\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n        <div>\r\n        <mat-form-field class=\"full-width-input\">\r\n          <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"email\" class=\"form-control\"/>\r\n          <mat-error>\r\n            <field-validation [control]=\"loginForm.controls.email\"></field-validation>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        </div>\r\n        <div>\r\n        <mat-form-field class=\"full-width-input\">\r\n          <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" class=\"form-control\"/>\r\n         <mat-error>\r\n           <field-validation [control]=\"loginForm.controls.password\"></field-validation>\r\n         </mat-error>\r\n        </mat-form-field>\r\n        </div>\r\n        <div  class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-primary\">Login</button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authenticate.service */ "./src/app/services/auth/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.credentials = { email: '', password: '' };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.authService.messageService.clear();
            this.credentials = this.loginForm.value;
            this.authService.authenticate(this.credentials, function () { return _this.router.navigateByUrl("/apps"); }).subscribe(function () { }, function () { _this.authService.messageService.error('Login failed'); });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  top: 0;\r\n}\r\n\r\n.active-link {\r\n  background-color: rgba(128, 128, 128, 0.4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav\r\n    #drawer\r\n    class=\"sidenav\"\r\n    fixedInViewport=\"true\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"!(isHandset$ | async)\">\r\n    <mat-toolbar color=\"primary\">\r\n      <img align=\"left\" width=\"50\" alt=\"Angular Logo\"\r\n           src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n    </mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item routerLink=\"/users\" routerLinkActive=\"active-link\">Users</a>\r\n      <a mat-list-item routerLink=\"/apps\" routerLinkActive=\"active-link\">Applications</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">Menu</mat-icon>\r\n      </button>\r\n      <div>\r\n        <h1 style=\"text-align:center\">\r\n          {{ title }}\r\n        </h1>\r\n      </div>\r\n      <div style=\"right:10px;position:absolute;\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n          <mat-icon>perm_identity</mat-icon>\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\" yPosition=\"below\">\r\n          <button mat-menu-item (click)=\"goToDetails()\">Profile</button>\r\n          <button mat-menu-item (click)=\"logout()\">Logout</button>\r\n        </mat-menu>\r\n      </div>\r\n    </mat-toolbar>\r\n    <!--Content Here -->\r\n    <div style=\"width: 100%; position: sticky\">\r\n      <div style=\"margin: 10px\">\r\n        <app-message></app-message>\r\n      </div>\r\n      <div style=\"margin: 10px\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </mat-sidenav-content>\r\n  <div style=\"align-content: left;position: fixed; bottom: 0;\">\r\n    Copyright 2018\r\n  </div>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authenticate.service */ "./src/app/services/auth/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(breakpointObserver, authService, router) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.router = router;
        this.title = 'Application Manager';
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MainMenuComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (response) {
            _this.router.navigateByUrl('/login');
        }, function (error) {
            console.log('logout error:' + error);
            _this.router.navigateByUrl('/login');
        });
    };
    MainMenuComponent.prototype.goToDetails = function () {
        if (this.authService.currentUser) {
            var userId = this.authService.currentUser.id;
            this.router.navigateByUrl('/users/' + userId);
        }
    };
    MainMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/components/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/components/main-menu/main-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/user-details/user-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-raised-button{\r\n  margin: 5px;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div *ngIf=\"!(this.newUser)\">\r\n    <button *ngIf=\"canReset\"  mat-raised-button type=\"button\" (click)=\"goToResetPassword()\">Reset Password</button>\r\n  </div>\r\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"save()\">\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"id\" formControlName=\"id\" readonly>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n        <mat-error>\r\n          <field-validation [control]=\"userForm.controls.name\"></field-validation>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" (click)=\"emailHelp()\">\r\n        <mat-error>\r\n          <field-validation [control]=\"userForm.controls.email\"></field-validation>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div *ngIf=\"this.newUser\">\r\n      <app-passwords [passForm]=\"userForm\"></app-passwords>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Role\" formControlName=\"role\">\r\n          <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\">{{role.value}}</mat-option>\r\n        </mat-select>\r\n        <mat-error>\r\n          <field-validation [control]=\"userForm.controls.role\"></field-validation>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <button mat-raised-button type=\"button\" [routerLink]=\"['..']\">Back</button>\r\n      <button *ngIf=\"canUpdate || canCreate\" mat-raised-button type=\"submit\" [disabled]=\"userForm.untouched\">Save</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/user */ "./src/app/classes/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_utils_Common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils/Common */ "./src/app/services/utils/Common.ts");
/* harmony import */ var _services_common_sharedData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/common/sharedData */ "./src/app/services/common/sharedData.ts");
/* harmony import */ var _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth/authenticate.service */ "./src/app/services/auth/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(userService, route, authService, router, location, sharedData, formBuilder) {
        this.userService = userService;
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.sharedData = sharedData;
        this.formBuilder = formBuilder;
        this.roles = _services_utils_Common__WEBPACK_IMPORTED_MODULE_6__["Common"].user_roles;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.canCreate = this.authService.hasAccess('CREATE', 'User');
        this.canUpdate = this.authService.hasAccess('UPDATE', 'User');
        this.canReset = this.authService.hasAccess('UPDATE', 'Security');
        var readOnly = !(this.canCreate || this.canUpdate);
        this.userForm = this.formBuilder.group({
            id: [{ value: '', disabled: readOnly }],
            name: [{ value: '', disabled: readOnly }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]],
            email: [{ value: '', disabled: readOnly }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)]],
            role: [{ value: '', disabled: readOnly }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    UserDetailsComponent.prototype.emailHelp = function () {
        if (this.userForm.controls.id.value === '' && this.userForm.controls.email.value === '') {
            if (this.userForm.controls.name) {
                this.userForm.controls.email.setValue(this.userForm.controls.name.value + '@');
            }
        }
    };
    UserDetailsComponent.prototype.getUser = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var userId = params.get('id');
            if (userId == 'add') {
                _this.user = new _classes_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
                _this.newUser = true;
            }
            else {
                _this.newUser = false;
                _this.userService.getUser(+userId)
                    .subscribe(function (user) {
                    _this.user = user;
                    _this.setUserFormGroup(_this.user);
                });
            }
        });
    };
    UserDetailsComponent.prototype.setUserFormGroup = function (user) {
        if (user.id != null) {
            this.newUser = false;
            if (this.userForm.controls.hasOwnProperty("passwords")) {
                this.userForm.removeControl("passwords");
            }
        }
        this.userForm.setValue({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }, { onlySelf: true });
    };
    UserDetailsComponent.prototype.backToUserList = function () {
        this.location.back();
    };
    UserDetailsComponent.prototype.save = function () {
        var _this = this;
        this.userService.messageService.clear();
        if (!this.userForm.invalid) {
            var user = this.userForm.value;
            this.user.role = user.role;
            this.user.name = user.name;
            this.user.email = user.email;
            if (this.user.id == null) {
                var security = new _classes_user__WEBPACK_IMPORTED_MODULE_1__["Securiy"]();
                security.user = this.user;
                security.password = user.passwords.password;
                this.userService.add(security).subscribe(function (usr) {
                    _this.user = usr;
                    _this.setUserFormGroup(_this.user);
                    _this.userService.messageService.success("User name [" + _this.user.name + "] successfully created");
                }, function () { });
            }
            else {
                this.userService.update(this.user).subscribe(function (user) {
                    _this.user = user;
                    _this.setUserFormGroup(_this.user);
                    _this.userService.messageService.success("User with name [" + user.name + "] successfully updated");
                }, function () { });
            }
        }
        else {
            this.userService.messageService.warning("Please fill required fields");
        }
    };
    UserDetailsComponent.prototype.goToResetPassword = function () {
        this.sharedData.updatedUser = this.user;
        this.router.navigate(["/users/" + this.user.id + "/password"]);
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/components/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/components/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _services_common_sharedData__WEBPACK_IMPORTED_MODULE_7__["SharedData"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-column-select {\r\n  overflow: initial;\r\n}\r\n\r\n.mat-raised-button{\r\n  margin: 5px;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button *ngIf=\"canCreate\"  mat-raised-button [routerLink]=\"['./add']\">Add</button>\r\n  <button *ngIf=\"canDelete\"  mat-raised-button (click)=\"openRemoveDialog()\"  [disabled]=\"!selection.hasValue()\">Delete</button>\r\n</div>\r\n\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"tableDataSource\" matSort>\r\n\r\n      <ng-container matColumnDef=\"select\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n          </mat-checkbox>\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let row\">\r\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                        (change)=\"$event ? selection.toggle(row) : null\"\r\n                        [checked]=\"selection.isSelected(row)\">\r\n          </mat-checkbox>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\r\n        <td mat-cell *matCellDef=\"let user\"> {{user.id}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n        <td mat-cell *matCellDef=\"let user\">\r\n          <a routerLink=\"/users/{{user.id}}\">\r\n            {{user.name}}\r\n          </a>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"email\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\r\n        <td mat-cell *matCellDef=\"let user\"> {{user.email}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"role\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Role</th>\r\n        <td mat-cell *matCellDef=\"let user\"> {{user.role}} </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n          (click)=\"selection.toggle(row)\">\r\n      </tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[10, 20, 50]\"></mat-paginator>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _commons_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commons/remove-dialog/remove-dialog.component */ "./src/app/components/commons/remove-dialog/remove-dialog.component.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth/authenticate.service */ "./src/app/services/auth/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, authService, removeDialog) {
        this.userService = userService;
        this.authService = authService;
        this.removeDialog = removeDialog;
        this.displayedColumns = ['select', 'id', 'name', 'email', 'role'];
        this.allowMultiSelect = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](this.allowMultiSelect, []);
        this.tableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.tableDataSource.paginator = this.paginator;
        this.tableDataSource.sort = this.sort;
        this.canCreate = this.authService.hasAccess('CREATE', 'User');
        this.canDelete = this.authService.hasAccess('DELETE', 'User');
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (usr) {
            _this.users = usr;
            _this.tableDataSource.data = usr;
            if (_this.users.length === 0) {
                _this.userService.messageService.info("There is no users");
            }
        });
    };
    UsersComponent.prototype.applyFilter = function (filterValue) {
        this.tableDataSource.filter = filterValue.trim().toLowerCase();
        if (this.tableDataSource.paginator) {
            this.tableDataSource.paginator.firstPage();
        }
    };
    UsersComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.tableDataSource.data.length;
        return numSelected == numRows;
    };
    UsersComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.tableDataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    UsersComponent.prototype.openRemoveDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.ariaLabel = 'Delete ...';
        dialogConfig.data = this.selection.selected;
        var dialogRef = this.removeDialog.open(_commons_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RemoveDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.removeUsers();
            }
        });
    };
    UsersComponent.prototype.removeUsers = function () {
        var _this = this;
        var calls = [];
        this.selection.selected.forEach(function (user) {
            calls.push(_this.userService.delete(user.id));
        });
        Object(rxjs_index__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(calls).subscribe(function () {
            _this.getUsers();
            _this.selection.clear();
        }, function () { });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], UsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/modules/material/app.materialComponents.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/material/app.materialComponents.module.ts ***!
  \*******************************************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _components_commons_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/commons/remove-dialog/remove-dialog.component */ "./src/app/components/commons/remove-dialog/remove-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"]
            ],
            entryComponents: [
                _components_commons_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RemoveDialogComponent"]
            ]
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());



/***/ }),

/***/ "./src/app/modules/routing/app-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/routing/app-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");
/* harmony import */ var _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/applications/applications.component */ "./src/app/components/applications/applications.component.ts");
/* harmony import */ var _components_application_details_application_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/application-details/application-details.component */ "./src/app/components/application-details/application-details.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/modules/routing/auth.guard.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        children: [
            { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }
        ]
    },
    {
        path: '',
        component: _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_7__["MainMenuComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [
            { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"] },
            { path: 'users/:id', component: _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"] },
            { path: 'users/add', component: _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"] },
            { path: 'users/:id/applications', component: _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationsComponent"] },
            { path: 'users/:id/password', component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"] },
            { path: 'apps', component: _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationsComponent"] },
            { path: 'apps/:id', component: _components_application_details_application_details_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationDetailsComponent"] },
            { path: 'apps/add', component: _components_application_details_application_details_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationDetailsComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/routing/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/routing/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/authenticate.service */ "./src/app/services/auth/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log(localStorage.getItem('currentUser'));
        if (this.authService.currentUser) {
            if (this.authService.currentUser.role) {
                console.log('Guard ok: role:' + this.authService.currentUser.role);
                return true;
            }
        }
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/application/application.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/application/application.service.ts ***!
  \*************************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_HttpOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/HttpOptions */ "./src/app/services/utils/HttpOptions.ts");
/* harmony import */ var _components_commons_message_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/commons/message/message */ "./src/app/components/commons/message/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApplicationService = /** @class */ (function () {
    function ApplicationService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.URL = 'api/apps';
    }
    ApplicationService.prototype.getApps = function () {
        this.messageService.setAction('Getting apps .....');
        return this.http.get(this.URL).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('get Apps', [])));
    };
    ApplicationService.prototype.getApp = function (id) {
        this.messageService.setAction("Getting app by id=" + id + " .....");
        return this.http.get(this.URL + ("/" + id)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("Get App by id=" + id)));
    };
    ApplicationService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            var message = new _components_commons_message_message__WEBPACK_IMPORTED_MODULE_6__["Message"](_components_commons_message_message__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Error, operation + " failed: " + error.error.message);
            _this.messageService.addMessage(message);
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new Error(error.error.message));
        };
    };
    ApplicationService.prototype.update = function (app) {
        this.messageService.setAction("Updating app [" + app.name + "].....");
        return this.http.put(this.URL, app, _utils_HttpOptions__WEBPACK_IMPORTED_MODULE_5__["HttpOptions"]).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("Updating app [" + app.name + "]")));
    };
    ApplicationService.prototype.add = function (app) {
        this.messageService.setAction("Adding app " + app.name + " .....");
        return this.http.post(this.URL, app, _utils_HttpOptions__WEBPACK_IMPORTED_MODULE_5__["HttpOptions"]).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("Adding app [" + app.name + "]")));
    };
    ApplicationService.prototype.delete = function (id) {
        return this.http.delete(this.URL + ("/" + id), _utils_HttpOptions__WEBPACK_IMPORTED_MODULE_5__["HttpOptions"]).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("Deleting app with id [ " + id + " ]")));
    };
    ApplicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _message_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "./src/app/services/auth/authenticate.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/auth/authenticate.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/user */ "./src/app/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    AuthenticateService.prototype.authenticate = function (credentials, successCallback) {
        var _this = this;
        this.messageService.setAction('Authenticating user .....');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](credentials ? {
            authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.password)
        } : {});
        return this.http.get('api/auth', { headers: headers }).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            if (res['authenticated'] == true) {
                _this.currentUser = res['principal'].userDetails;
                _this.accessMatrix = res['principal'].accessMatrix;
                successCallback();
            }
            else {
                _this.currentUser = new _classes_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
            }
        }));
    };
    AuthenticateService.prototype.logout = function () {
        var _this = this;
        this.messageService.setAction('Logout user .....');
        return this.http.post('/logout', {}).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.currentUser = new _classes_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        }, function (error) { console.log(error); }));
    };
    AuthenticateService.prototype.hasAccess = function (action, target) {
        var permission = new _classes_user__WEBPACK_IMPORTED_MODULE_4__["Permission"](action, target);
        return this.accessMatrix.some(function (p) { return p.target === permission.target && p.action === permission.action; });
    };
    AuthenticateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "./src/app/services/common/sharedData.ts":
/*!***********************************************!*\
  !*** ./src/app/services/common/sharedData.ts ***!
  \***********************************************/
/*! exports provided: SharedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedData", function() { return SharedData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedData = /** @class */ (function () {
    function SharedData() {
    }
    SharedData = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedData);
    return SharedData;
}());



/***/ }),

/***/ "./src/app/services/message/message.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/message/message.service.ts ***!
  \*****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_commons_message_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/commons/message/message */ "./src/app/components/commons/message/message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageService = /** @class */ (function () {
    function MessageService(router) {
        var _this = this;
        this.router = router;
        this.messages = [];
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.clear();
            }
        });
    }
    MessageService.prototype.addMessage = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.error = function (text) {
        this.addMessage(new _components_commons_message_message__WEBPACK_IMPORTED_MODULE_1__["Message"](_components_commons_message_message__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Error, text));
    };
    MessageService.prototype.info = function (text) {
        this.addMessage(new _components_commons_message_message__WEBPACK_IMPORTED_MODULE_1__["Message"](_components_commons_message_message__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Info, text));
    };
    MessageService.prototype.success = function (text) {
        this.addMessage(new _components_commons_message_message__WEBPACK_IMPORTED_MODULE_1__["Message"](_components_commons_message_message__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Success, text));
    };
    MessageService.prototype.warning = function (text) {
        this.addMessage(new _components_commons_message_message__WEBPACK_IMPORTED_MODULE_1__["Message"](_components_commons_message_message__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Warning, text));
    };
    MessageService.prototype.remove = function (message) {
        var index = this.messages.indexOf(message);
        if (index >= 0) {
            this.messages.splice(index, 1);
        }
    };
    MessageService.prototype.setAction = function (action) {
        this.action = action;
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_HttpOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/HttpOptions */ "./src/app/services/utils/HttpOptions.ts");
/* harmony import */ var _components_commons_message_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/commons/message/message */ "./src/app/components/commons/message/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function () {
    function UserService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.URL = 'api/users';
    }
    UserService.prototype.getUsers = function () {
        this.messageService.setAction('Getting users .....');
        return this.http.get(this.URL).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('get Users', [])));
    };
    UserService.prototype.getUser = function (id) {
        this.messageService.setAction("Getting user by id=" + id + " .....");
        return this.http.get(this.URL + ("/" + id)).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Get Users')));
    };
    UserService.prototype.update = function (user) {
        this.messageService.setAction("Updating user " + user.name + " .....");
        return this.http.put(this.URL, user, _utils_HttpOptions__WEBPACK_IMPORTED_MODULE_5__["HttpOptions"]).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("Updating user  " + user.name)));
    };
    UserService.prototype.add = function (credential) {
        this.messageService.setAction("Adding user " + credential.user.email + " .....");
        return this.http.post(this.URL, credential, _utils_HttpOptions__WEBPACK_IMPORTED_MODULE_5__["HttpOptions"]).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("Adding user  " + credential.user.email)));
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(this.URL + ("/" + id), _utils_HttpOptions__WEBPACK_IMPORTED_MODULE_5__["HttpOptions"]).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("Deleting users with id [ " + id + " ]")));
    };
    UserService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            var message = new _components_commons_message_message__WEBPACK_IMPORTED_MODULE_6__["Message"](_components_commons_message_message__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Error, operation + " failed : " + error.error.message);
            _this.messageService.addMessage(message);
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new Error(error.error.message));
        };
    };
    UserService.prototype.resetPassword = function (security) {
        this.messageService.setAction("Reset password for user " + security.user.email + " .....");
        return this.http.put(this.URL + ("/" + security.user.id + "/password"), security, _utils_HttpOptions__WEBPACK_IMPORTED_MODULE_5__["HttpOptions"]).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("Reset password for user " + security.user.email)));
    };
    UserService.prototype.checkPassword = function (currentCredentials) {
        this.messageService.setAction('Checking credentials for user .....');
        return this.http.put(this.URL + ("/" + currentCredentials.user.id + "/password/check"), currentCredentials, _utils_HttpOptions__WEBPACK_IMPORTED_MODULE_5__["HttpOptions"]).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Checking credentials')));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _message_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/utils/Common.ts":
/*!******************************************!*\
  !*** ./src/app/services/utils/Common.ts ***!
  \******************************************/
/*! exports provided: Common, FormErrors, PaginatorOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Common", function() { return Common; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrors", function() { return FormErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorOptions", function() { return PaginatorOptions; });
var Common = /** @class */ (function () {
    function Common() {
    }
    Common.content_types = [
        { value: 'VIDEO' },
        { value: 'IMAGE' },
        { value: 'HTML' }
    ];
    Common.app_types = [
        { value: 'IOS' },
        { value: 'ANDROID' },
        { value: 'WEB' }
    ];
    Common.user_roles = [
        { value: 'ADMIN' },
        { value: 'ADOPS' },
        { value: 'PUBLISHER' }
    ];
    return Common;
}());

var FormErrors = /** @class */ (function () {
    function FormErrors() {
    }
    return FormErrors;
}());

var PaginatorOptions = /** @class */ (function () {
    function PaginatorOptions() {
        this.length = 1;
        this.pageSize = 10;
        this.pageSizeOptions = [10, 20, 50];
    }
    return PaginatorOptions;
}());



/***/ }),

/***/ "./src/app/services/utils/HttpOptions.ts":
/*!***********************************************!*\
  !*** ./src/app/services/utils/HttpOptions.ts ***!
  \***********************************************/
/*! exports provided: HttpOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpOptions", function() { return HttpOptions; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var HttpOptions = /** @class */ (function () {
    function HttpOptions() {
    }
    HttpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    return HttpOptions;
}());



/***/ }),

/***/ "./src/app/services/validation/ValidationService.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/validation/ValidationService.ts ***!
  \**********************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var messages = {
            'required': 'Field is required',
            'email': 'This email address is invalid',
            'maxlength': "Max length  length " + validatorValue.requiredLength,
            'minlength': "Minimum length " + validatorValue.requiredLength,
            'min': "Min value limit " + validatorValue.requiredLength,
            'max': "Max value exceeded " + validatorValue.requiredLength
        };
        if (messages[validatorName]) {
            return messages[validatorName];
        }
        return validatorValue;
    };
    ValidationService.prototype.validateForm = function (form) {
        var _this = this;
        var formErrors = [];
        Object.values(form.controls).forEach(function (control) {
            formErrors = formErrors.concat(_this.validateControl(control));
        });
        return formErrors;
    };
    ValidationService.prototype.getName = function (control) {
        var group = control.parent;
        if (!group) {
            return null;
        }
        var name;
        Object.keys(group.controls).forEach(function (key) {
            var childControl = group.get(key);
            if (childControl !== control) {
                return;
            }
            name = key;
        });
        return name;
    };
    ValidationService.prototype.validateControl = function (control) {
        var formErrors = [];
        if (control.invalid) {
            var fieldName = this.getName(control);
            for (var error in control.errors) {
                if (control.errors.hasOwnProperty(error) && control.touched) {
                    formErrors.push({ field: fieldName, message: this.getValidatorErrorMessage(error, control.errors[error]) });
                }
            }
        }
        return formErrors;
    };
    ValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\test\appManager\frontend\appgui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map