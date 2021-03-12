import tslib_1 from 'tslib';
import core_1 from '@angular/core';
import forms_1 from '@angular/forms';
import common_1 from '@angular/common';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfPresent (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

function commonjsRequire (target) {
	throw new Error('Could not dynamically require "' + target + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.');
}

var modrnUi_service = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModrnUiService = void 0;

const i0 = core_1;
class ModrnUiService {
    constructor() { }
}
exports.ModrnUiService = ModrnUiService;
ModrnUiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModrnUiService_Factory() { return new ModrnUiService(); }, token: ModrnUiService, providedIn: "root" });
ModrnUiService.decorators = [
    { type: core_1.Injectable, args: [{
                providedIn: 'root'
            },] }
];
ModrnUiService.ctorParameters = () => [];

});

var modrnUi_service$1 = /*@__PURE__*/getDefaultExportFromCjs(modrnUi_service);

var modrnUi_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModrnUiComponent = void 0;

class ModrnUiComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.ModrnUiComponent = ModrnUiComponent;
ModrnUiComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'lib-modrn-ui',
                template: `
    <p>
      modrn-ui works!
    </p>
  `
            },] }
];
ModrnUiComponent.ctorParameters = () => [];

});

var modrnUi_component$1 = /*@__PURE__*/getDefaultExportFromCjs(modrnUi_component);

var button_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonComponent = void 0;

class ButtonComponent {
    constructor() {
        this.color = 'default';
    }
    ngOnInit() {
    }
    onClick(e) {
        console.log('clicked');
    }
}
exports.ButtonComponent = ButtonComponent;
ButtonComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'modrn-button',
                template: `
    <button (click)="onClick($event)" [class]="color"><ng-content></ng-content></button>
  `,
                encapsulation: core_1.ViewEncapsulation.None,
                styles: ['button {padding: 8px; border-radius: 20px; min-height: 36px; max-height: 42px; border: none; box-shadow: 0px 0px 6px -4px black; cursor: pointer}',
                    'button.default {color: black; background: white;}',
                    'button.primary {color: white; background: #00A67E;}',
                    'button.error {color: white; background: #d70000;}',
                    'button.default:active {color: black; background: #f2f2f2;}',
                    'button.primary:active {color: white; background: #004A39;}',
                    'button.error:active {color: white; background: #660000;}',
                    'button:focus {box-shadow: 0px 0px 6px -4px blue; outline: none !important;}']
            },] }
];
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    color: [{ type: core_1.Input }]
};

});

var button_component$1 = /*@__PURE__*/getDefaultExportFromCjs(button_component);

var checkbox_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBoxComponent = void 0;


class CheckBoxComponent {
    constructor() {
        this.change = new core_1.EventEmitter();
        this.control = new forms_1.FormControl(false);
    }
    ngOnInit() {
    }
    onClick() {
        this.change.emit(this.control.value);
    }
}
exports.CheckBoxComponent = CheckBoxComponent;
CheckBoxComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'modrn-button',
                template: `
    <label class="container">
        <ng-content></ng-content>
        <input [formControl]="control" type="checkbox">
        <span class="check"></span>
    </label>
  `,
                encapsulation: core_1.ViewEncapsulation.None,
                styles: [`.container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }`,
                    `.container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }`,
                    `.check {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
      }`,
                    `.container:hover input ~ .check {
        background-color: #ccc;
      }`,
                    `.container input:checked ~ .check {
        background-color: #2196F3;
      }`,
                    `.checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }`,
                    `.container input:checked ~ .check:after {
        display: block;
      }`,
                    `.container .check:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }`]
            },] }
];
CheckBoxComponent.ctorParameters = () => [];
CheckBoxComponent.propDecorators = {
    change: [{ type: core_1.Output }]
};

});

var checkbox_component$1 = /*@__PURE__*/getDefaultExportFromCjs(checkbox_component);

var formField_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormFieldComponent = void 0;

class FormFieldComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.FormFieldComponent = FormFieldComponent;
FormFieldComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'modrn-form-field',
                template: `
    <div><ng-content></ng-content></div>
  `
            },] }
];
FormFieldComponent.ctorParameters = () => [];

});

var formField_component$1 = /*@__PURE__*/getDefaultExportFromCjs(formField_component);

var modrnUi_module = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModrnUiModule = void 0;






class ModrnUiModule {
}
exports.ModrnUiModule = ModrnUiModule;
ModrnUiModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [modrnUi_component.ModrnUiComponent, formField_component.FormFieldComponent, button_component.ButtonComponent, checkbox_component.CheckBoxComponent],
                imports: [
                    common_1.CommonModule,
                ],
                exports: [modrnUi_component.ModrnUiComponent, formField_component.FormFieldComponent, button_component.ButtonComponent, checkbox_component.CheckBoxComponent]
            },] }
];

});

var modrnUi_module$1 = /*@__PURE__*/getDefaultExportFromCjs(modrnUi_module);

var publicApi = createCommonjsModule(function (module, exports) {
"use strict";
/*
 * Public API Surface of modrn-ui
 */
Object.defineProperty(exports, "__esModule", { value: true });

tslib_1.__exportStar(modrnUi_service, exports);
tslib_1.__exportStar(modrnUi_component, exports);
tslib_1.__exportStar(button_component, exports);
tslib_1.__exportStar(checkbox_component, exports);
tslib_1.__exportStar(formField_component, exports);
tslib_1.__exportStar(modrnUi_module, exports);

});

var publicApi$1 = /*@__PURE__*/getDefaultExportFromCjs(publicApi);

var modrnUi = createCommonjsModule(function (module, exports) {
"use strict";
/**
 * Generated bundle index. Do not edit.
 */
Object.defineProperty(exports, "__esModule", { value: true });

tslib_1.__exportStar(publicApi, exports);

});

var modrnUi$1 = /*@__PURE__*/getDefaultExportFromCjs(modrnUi);

export default modrnUi$1;
//# sourceMappingURL=modrn-ui.js.map
