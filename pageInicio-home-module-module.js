(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pageInicio-home-module-module"],{

/***/ "3Red":
/*!************************************************!*\
  !*** ./src/app/pageInicio/homInicioRouting.ts ***!
  \************************************************/
/*! exports provided: PageInicioRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageInicioRouting", function() { return PageInicioRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/pages/login/login.component */ "ogQD");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "BkCu");
/* harmony import */ var _acercade_acercade_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./acercade/acercade.component */ "yFko");
/* harmony import */ var _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bienvenida/bienvenida.component */ "RQJ4");








const routePaheInicio = [
    { path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            { path: 'bienvenida', component: _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_5__["BienvenidaComponent"] },
            { path: 'login', component: _auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
            { path: 'acercade', component: _acercade_acercade_component__WEBPACK_IMPORTED_MODULE_4__["AcercadeComponent"] },
            { path: '**', redirectTo: 'bienvenida' }
        ]
    }
];
class PageInicioRouting {
}
PageInicioRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageInicioRouting });
PageInicioRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageInicioRouting_Factory(t) { return new (t || PageInicioRouting)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routePaheInicio)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageInicioRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageInicioRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routePaheInicio)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "BkCu":
/*!***************************************************!*\
  !*** ./src/app/pageInicio/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ "vslb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








class HomeComponent {
    constructor(_matdialog) {
        this._matdialog = _matdialog;
    }
    ngOnInit() {
    }
    mostrarLogin() {
        this._matdialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], {
            width: '400px',
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 0, consts: [["fullscreen", ""], ["color", "primary"], [1, "title"], [1, "spacer"], ["routerLink", "/pagaInicio/bienvenida", "mat-button", "", 1, "title2"], ["mat-button", "", 1, "title2", 3, "click"], [1, "container"], [1, "contenedorFooter", 2, "background-color", "rgb(188, 195, 202)"], [1, "title2"], [1, "sociales"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "INSTITUCION ACADEMICA UNI-VER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "small", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_8_listener() { return ctx.mostrarLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Intitucion Academica de monterrey \u00A9 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.colorBack[_ngcontent-%COMP%] {\r\n    background-color: rgb(151, 194, 197)\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    font-size: 20px;\r\n}\r\n\r\n.title2[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\n.title3[_ngcontent-%COMP%] {\r\n    font-size: 1px;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: Arial;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 50px;\r\n    background: #333;\r\n    color: #fff;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 100;\r\n}\r\n\r\n.contenedor[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    margin: auto;\r\n}\r\n\r\n.contenedorFooter[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    width: 100%;\r\n    padding-top: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.msj-1[_ngcontent-%COMP%] {\r\n    margin-top: 8px;\r\n    font-size: 16px;\r\n    text-align: justify;\r\n    line-height: 30px;\r\n}\r\n\r\n.msj-2[_ngcontent-%COMP%] {\r\n    margin-top: 8px;\r\n    font-size: 16px;\r\n    text-align: justify;\r\n    line-height: 25px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    float: left;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    padding-top: 26px;\r\n    margin-left: 2px;\r\n    float: left;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\r\n    display: table;\r\n    ;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n#bienvenidos[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding-bottom: 25px;\r\n}\r\n\r\n.copy[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\n.sociales[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #333;\r\n    text-decoration: none;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    .sociales[_ngcontent-%COMP%] {\r\n        width: auto;\r\n    }\r\n    footer[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\r\n        justify-content: space-between;\r\n    }\r\n}\r\n\r\n@media(min-width:1024px) {\r\n    .contenedor[_ngcontent-%COMP%] {\r\n        width: 1000px;\r\n    }\r\n}\r\n\r\n#blog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n#blog[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#blog[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n}\r\n\r\n#blog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 800px;\r\n    height: 330px;\r\n    max-width: 300px;\r\n    border-radius: 8px;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translateX(-50%) translateY(-50%);\r\n    color: #fff;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    padding: 7px;\r\n    margin-top: 10px;\r\n    border: 3px solid #fff;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: rgba(51, 51, 51, 0.5)\r\n}\r\n\r\n@media(min-width:480px) {\r\n    #banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 40px;\r\n    }\r\n    #banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin-top: 25px;\r\n    }\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #banner[_ngcontent-%COMP%] {\r\n        height: 300px;\r\n        overflow: hidden;\r\n    }\r\n    #banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        margin-top: -100px;\r\n    }\r\n}\r\n\r\n@media(min-width:1024px) {\r\n    #banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        margin-top: -200px;\r\n    }\r\n}\r\n\r\n#info[_ngcontent-%COMP%] {\r\n    background: #333;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 20px;\r\n}\r\n\r\n#info[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.info-pet[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n}\r\n\r\n.info-pet[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n    height: 180px;\r\n    border-radius: 5px;\r\n    border: 3px solid #fff;\r\n}\r\n\r\n@media(min-width:480px) {\r\n    .info-pet[_ngcontent-%COMP%] {\r\n        width: 40%;\r\n    }\r\n}\r\n\r\n@media(min-width:1000px) {\r\n    .info-pet[_ngcontent-%COMP%] {\r\n        width: auto;\r\n    }\r\n}\r\n\r\n#menu-bar[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    float: right;\r\n    font-size: 28px;\r\n    margin: 6px 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: rgba(51, 51, 51, 0.9);\r\n    transition: all 0.5s;\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #fff;\r\n    height: 50px;\r\n    text-decoration: none;\r\n    padding: 15px;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n#menu-bar[_ngcontent-%COMP%]:checked ~ .menu[_ngcontent-%COMP%] {\r\n    transform: translateX(0%);\r\n}\r\n\r\n@media(min-width:1024px) {\r\n    .menu[_ngcontent-%COMP%] {\r\n        position: static;\r\n        width: auto;\r\n        height: auto;\r\n        transform: translateX(0%);\r\n        float: right;\r\n        display: flex;\r\n    }\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsNENBQTRDO0lBQzVDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFlBQVk7UUFDWix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb2xvckJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTk0LCAxOTcpXHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi50aXRsZTIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUzIHtcclxuICAgIGZvbnQtc2l6ZTogMXB4O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uY29udGVuZWRvciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY29udGVuZWRvckZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubXNqLTEge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ubXNqLTIge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5oZWFkZXIgaDQge1xyXG4gICAgcGFkZGluZy10b3A6IDI2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmhlYWRlciAuY29udGVuZWRvciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbiNiaWVudmVuaWRvcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvb3RlciAuY29udGVuZWRvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmNvcHkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uc29jaWFsZXMgYSB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDo3NjhweCkge1xyXG4gICAgLnNvY2lhbGVzIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIGZvb3RlciAuY29udGVuZWRvciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjEwMjRweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNibG9nIGgzLFxyXG5oNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNibG9nIC5jb250ZW5lZG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuI2Jsb2cgYXJ0aWNsZSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbiNibG9nIGltZyB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDMzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuI2Jhbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNiYW5uZXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jYmFubmVyIC5jb250ZW5lZG9yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI2Jhbm5lciBoMiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbiNiYW5uZXIgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbiNiYW5uZXIgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUxLCA1MSwgNTEsIDAuNSlcclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDo0ODBweCkge1xyXG4gICAgI2Jhbm5lciBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgI2Jhbm5lciBhIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICAjYmFubmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAjYmFubmVyIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAgICNiYW5uZXIgaW1nIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNpbmZvIHtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNpbmZvIC5jb250ZW5lZG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmluZm8tcGV0IHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmluZm8tcGV0IGltZyB7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDo0ODBweCkge1xyXG4gICAgLmluZm8tcGV0IHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjEwMDBweCkge1xyXG4gICAgLmluZm8tcGV0IHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuI21lbnUtYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmhlYWRlciBsYWJlbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MSwgNTEsIDUxLCAwLjkpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4ubWVudSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLm1lbnUgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbiNtZW51LWJhcjpjaGVja2Vkfi5tZW51IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgICAubWVudSB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxufVxyXG5cclxuLm1lbnUgYSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmhlYWRlciBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "O+Ur":
/*!**************************************************!*\
  !*** ./src/app/pageInicio/home-module.module.ts ***!
  \**************************************************/
/*! exports provided: HomeModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModuleModule", function() { return HomeModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bienvenida/bienvenida.component */ "RQJ4");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vslb");
/* harmony import */ var _acercade_acercade_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./acercade/acercade.component */ "yFko");
/* harmony import */ var _homInicioRouting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homInicioRouting */ "3Red");
/* harmony import */ var _angularMaterial_material_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../angularMaterial/material-module.module */ "ikGK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "BkCu");









class HomeModuleModule {
}
HomeModuleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModuleModule });
HomeModuleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModuleModule_Factory(t) { return new (t || HomeModuleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _homInicioRouting__WEBPACK_IMPORTED_MODULE_5__["PageInicioRouting"],
            _angularMaterial_material_module_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModuleModule"],
            _homInicioRouting__WEBPACK_IMPORTED_MODULE_5__["PageInicioRouting"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModuleModule, { declarations: [_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_2__["BienvenidaComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        _acercade_acercade_component__WEBPACK_IMPORTED_MODULE_4__["AcercadeComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _homInicioRouting__WEBPACK_IMPORTED_MODULE_5__["PageInicioRouting"],
        _angularMaterial_material_module_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModuleModule"],
        _homInicioRouting__WEBPACK_IMPORTED_MODULE_5__["PageInicioRouting"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModuleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_2__["BienvenidaComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                    _acercade_acercade_component__WEBPACK_IMPORTED_MODULE_4__["AcercadeComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _homInicioRouting__WEBPACK_IMPORTED_MODULE_5__["PageInicioRouting"],
                    _angularMaterial_material_module_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModuleModule"],
                    _homInicioRouting__WEBPACK_IMPORTED_MODULE_5__["PageInicioRouting"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "RQJ4":
/*!***************************************************************!*\
  !*** ./src/app/pageInicio/bienvenida/bienvenida.component.ts ***!
  \***************************************************************/
/*! exports provided: BienvenidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidaComponent", function() { return BienvenidaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BienvenidaComponent {
    constructor() { }
    ngOnInit() {
    }
}
BienvenidaComponent.ɵfac = function BienvenidaComponent_Factory(t) { return new (t || BienvenidaComponent)(); };
BienvenidaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BienvenidaComponent, selectors: [["app-bienvenida"]], decls: 28, vars: 0, consts: [["id", "banner"], ["src", "assets/img/imgLogo.jpg"], [1, "contenedor"], [1, "title"], [1, "msj-1"], ["id", "bienvenidos"], [1, "title2"], [1, "msj-2"]], template: function BienvenidaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SISTEMA DE ADMINISTRACION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00BFMejorar la educacion es priridad de nosotros?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Unete a nuestro club de salud animal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Eres veterianario(a) necesitas expandir tus servicios y productos, ven concede nuestro sitio web MYPETS salud animal y obt\u00E9n beneficios adicionales econ\u00F3micos generados por clientes. Extiende tus conocimientos para ayudar a mascotas y salva vidas por un mundo mejor. \u201Csalva y vive feliz\u201D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ser una asocion de veterinarios con calidad de servicio salvadora de animales, ser una de las mejores plataformas de servicios y productos para el cuidado y salud animal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Salvar muchos animales que se encuentran en peligro de salud, devolviendo la felicidad y alegra para muchas familias, recibir mas de 1,000 veterinarios en 1 a\u00F1o de servicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.mt-2[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n}\r\n\r\n.contenedorBack[_ngcontent-%COMP%] {\r\n    border-radius: 4%;\r\n    width: 300px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    font-size: 28px;\r\n    text-align: justify;\r\n    line-height: 30px;\r\n}\r\n\r\n.title2[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n}\r\n\r\n.title3[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: Arial;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 50px;\r\n    background: #333;\r\n    color: #fff;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 100;\r\n}\r\n\r\n.contenedor[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    margin: auto;\r\n}\r\n\r\n.colorText[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-weight: 700;\r\n}\r\n\r\n.msj-1[_ngcontent-%COMP%] {\r\n    margin-top: 8px;\r\n    font-size: 20px;\r\n    text-align: justify;\r\n    line-height: 30px;\r\n}\r\n\r\n.msj-2[_ngcontent-%COMP%] {\r\n    margin-top: 8px;\r\n    font-size: 20px;\r\n    text-align: justify;\r\n    line-height: 25px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    float: left;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    padding-top: 26px;\r\n    margin-left: 2px;\r\n    float: left;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\r\n    display: table;\r\n    ;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n#bienvenidos[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding-bottom: 25px;\r\n}\r\n\r\n.copy[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\n.sociales[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #333;\r\n    text-decoration: none;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    .sociales[_ngcontent-%COMP%] {\r\n        width: auto;\r\n    }\r\n    footer[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\r\n        justify-content: space-between;\r\n    }\r\n}\r\n\r\n@media(min-width:1024px) {\r\n    .contenedor[_ngcontent-%COMP%] {\r\n        width: 1000px;\r\n    }\r\n}\r\n\r\n#blog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n#blog[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#blog[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n}\r\n\r\n#blog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 800px;\r\n    height: 330px;\r\n    max-width: 300px;\r\n    border-radius: 8px;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translateX(-50%) translateY(-50%);\r\n    color: #fff;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    padding: 7px;\r\n    margin-top: 10px;\r\n    border: 3px solid #fff;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: rgba(51, 51, 51, 0.5)\r\n}\r\n\r\n@media(min-width:480px) {\r\n    #banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 40px;\r\n    }\r\n    #banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin-top: 25px;\r\n    }\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #banner[_ngcontent-%COMP%] {\r\n        height: 300px;\r\n        overflow: hidden;\r\n    }\r\n    #banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        margin-top: -100px;\r\n    }\r\n}\r\n\r\n@media(min-width:1024px) {\r\n    #banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        margin-top: -200px;\r\n    }\r\n}\r\n\r\n#info[_ngcontent-%COMP%] {\r\n    background: #333;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 20px;\r\n}\r\n\r\n#info[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.info-pet[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n}\r\n\r\n.info-pet[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n    height: 180px;\r\n    border-radius: 5px;\r\n    border: 3px solid #fff;\r\n}\r\n\r\n@media(min-width:480px) {\r\n    .info-pet[_ngcontent-%COMP%] {\r\n        width: 40%;\r\n    }\r\n}\r\n\r\n@media(min-width:1000px) {\r\n    .info-pet[_ngcontent-%COMP%] {\r\n        width: auto;\r\n    }\r\n}\r\n\r\n#menu-bar[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    float: right;\r\n    font-size: 28px;\r\n    margin: 6px 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: rgba(51, 51, 51, 0.9);\r\n    transition: all 0.5s;\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #fff;\r\n    height: 50px;\r\n    text-decoration: none;\r\n    padding: 15px;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n#menu-bar[_ngcontent-%COMP%]:checked ~ .menu[_ngcontent-%COMP%] {\r\n    transform: translateX(0%);\r\n}\r\n\r\n@media(min-width:1024px) {\r\n    .menu[_ngcontent-%COMP%] {\r\n        position: static;\r\n        width: auto;\r\n        height: auto;\r\n        transform: translateX(0%);\r\n        float: right;\r\n        display: flex;\r\n    }\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpZW52ZW5pZGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsNENBQTRDO0lBQzVDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFlBQVk7UUFDWix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImJpZW52ZW5pZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5tdC0yIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yQmFjayB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0JTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnRpdGxlMiB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuXHJcbi50aXRsZTMge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uY29udGVuZWRvciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY29sb3JUZXh0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5tc2otMSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5tc2otMiB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmhlYWRlciBoNCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuaGVhZGVyIC5jb250ZW5lZG9yIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuI2JpZW52ZW5pZG9zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9vdGVyIC5jb250ZW5lZG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uY29weSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWxlcyBhIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICAuc29jaWFsZXMge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuI2Jsb2cgaDMsXHJcbmg0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Jsb2cgLmNvbnRlbmVkb3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4jYmxvZyBhcnRpY2xlIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuI2Jsb2cgaW1nIHtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4jYmFubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2Jhbm5lciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNiYW5uZXIgLmNvbnRlbmVkb3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jYmFubmVyIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuI2Jhbm5lciBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuI2Jhbm5lciBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTEsIDUxLCA1MSwgMC41KVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjQ4MHB4KSB7XHJcbiAgICAjYmFubmVyIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAjYmFubmVyIGEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgICNiYW5uZXIge1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICNiYW5uZXIgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjEwMjRweCkge1xyXG4gICAgI2Jhbm5lciBpbWcge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuI2luZm8ge1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuI2luZm8gLmNvbnRlbmVkb3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW5mby1wZXQge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uaW5mby1wZXQgaW1nIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjQ4MHB4KSB7XHJcbiAgICAuaW5mby1wZXQge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6MTAwMHB4KSB7XHJcbiAgICAuaW5mby1wZXQge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4jbWVudS1iYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaGVhZGVyIGxhYmVsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUxLCA1MSwgNTEsIDAuOSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi5tZW51IGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4ubWVudSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuI21lbnUtYmFyOmNoZWNrZWR+Lm1lbnUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAgIC5tZW51IHtcclxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWVudSBhIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaGVhZGVyIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BienvenidaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bienvenida',
                templateUrl: './bienvenida.component.html',
                styleUrls: ['./bienvenida.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vslb":
/*!*****************************************************!*\
  !*** ./src/app/pageInicio/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












class LoginComponent {
    constructor(_matdialogRef, usuario, _snackBar, _router) {
        this._matdialogRef = _matdialogRef;
        this.usuario = usuario;
        this._snackBar = _snackBar;
        this._router = _router;
    }
    ngOnInit() {
    }
    loginUsuario() {
        //this._matdialogRef.close();
        this._snackBar.open('click', 'Ok', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
        });
        this._router.navigate(['/escolar']);
        this._matdialogRef.close();
    }
    cerrarDialog() {
        this._matdialogRef.close();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 0, consts: [["fxLayout", "Column", "fxLayoutGap", "20px"], ["fxFlex", "50"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "textCentrado"], ["fxLayout", "Column"], ["matInput", "", "type", "email"], ["matInput", "", "type", "password"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ingrese sus datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.loginUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Logear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() { return ctx.cerrarDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: [".example-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('https://rciminternet.com/wp-content/uploads/2019/04/usuario.png');\r\n    background-size: cover;\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-left: 90px;\r\n}\r\n\r\n.textCentrado[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-left: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3RkFBd0Y7SUFDeEYsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9yY2ltaW50ZXJuZXQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA0L3VzdWFyaW8ucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG59XHJcblxyXG4udGV4dENlbnRyYWRvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "yFko":
/*!***********************************************************!*\
  !*** ./src/app/pageInicio/acercade/acercade.component.ts ***!
  \***********************************************************/
/*! exports provided: AcercadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcercadeComponent", function() { return AcercadeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AcercadeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AcercadeComponent.ɵfac = function AcercadeComponent_Factory(t) { return new (t || AcercadeComponent)(); };
AcercadeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcercadeComponent, selectors: [["app-acercade"]], decls: 2, vars: 0, template: function AcercadeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "acercade works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2VyY2FkZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcercadeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-acercade',
                templateUrl: './acercade.component.html',
                styleUrls: ['./acercade.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pageInicio-home-module-module.js.map