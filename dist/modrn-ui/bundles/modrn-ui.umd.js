(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('modrn-ui', ['@angular/core', '@angular/common'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['modrn-ui'] = factory(global.ng.core, global.ng.common));
}(this, (function (core_1, common_1) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var core_1__default = /*#__PURE__*/_interopDefaultLegacy(core_1);
	var common_1__default = /*#__PURE__*/_interopDefaultLegacy(common_1);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
	function getDefaultExportFromCjs(x) {
	    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}
	function getDefaultExportFromNamespaceIfPresent(n) {
	    return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
	}
	function getDefaultExportFromNamespaceIfNotNamed(n) {
	    return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
	}
	function getAugmentedNamespace(n) {
	    if (n.__esModule)
	        return n;
	    var a = Object.defineProperty({}, '__esModule', { value: true });
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
	function commonjsRequire(target) {
	    throw new Error('Could not dynamically require "' + target + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.');
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */
	var extendStatics = function (d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b)
	            if (Object.prototype.hasOwnProperty.call(b, p))
	                d[p] = b[p]; };
	    return extendStatics(d, b);
	};
	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	var __assign = function () {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s)
	                if (Object.prototype.hasOwnProperty.call(s, p))
	                    t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	function __rest(s, e) {
	    var t = {};
	    for (var p in s)
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	            t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}
	function __decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
	        r = Reflect.decorate(decorators, target, key, desc);
	    else
	        for (var i = decorators.length - 1; i >= 0; i--)
	            if (d = decorators[i])
	                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}
	function __param(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); };
	}
	function __metadata(metadataKey, metadataValue) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
	        return Reflect.metadata(metadataKey, metadataValue);
	}
	function __awaiter(thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try {
	            step(generator.next(value));
	        }
	        catch (e) {
	            reject(e);
	        } }
	        function rejected(value) { try {
	            step(generator["throw"](value));
	        }
	        catch (e) {
	            reject(e);
	        } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}
	function __generator(thisArg, body) {
	    var _ = { label: 0, sent: function () { if (t[0] & 1)
	            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f)
	            throw new TypeError("Generator is already executing.");
	        while (_)
	            try {
	                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
	                    return t;
	                if (y = 0, t)
	                    op = [op[0] & 2, t.value];
	                switch (op[0]) {
	                    case 0:
	                    case 1:
	                        t = op;
	                        break;
	                    case 4:
	                        _.label++;
	                        return { value: op[1], done: false };
	                    case 5:
	                        _.label++;
	                        y = op[1];
	                        op = [0];
	                        continue;
	                    case 7:
	                        op = _.ops.pop();
	                        _.trys.pop();
	                        continue;
	                    default:
	                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
	                            _ = 0;
	                            continue;
	                        }
	                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
	                            _.label = op[1];
	                            break;
	                        }
	                        if (op[0] === 6 && _.label < t[1]) {
	                            _.label = t[1];
	                            t = op;
	                            break;
	                        }
	                        if (t && _.label < t[2]) {
	                            _.label = t[2];
	                            _.ops.push(op);
	                            break;
	                        }
	                        if (t[2])
	                            _.ops.pop();
	                        _.trys.pop();
	                        continue;
	                }
	                op = body.call(thisArg, _);
	            }
	            catch (e) {
	                op = [6, e];
	                y = 0;
	            }
	            finally {
	                f = t = 0;
	            }
	        if (op[0] & 5)
	            throw op[1];
	        return { value: op[0] ? op[1] : void 0, done: true };
	    }
	}
	var __createBinding = Object.create ? (function (o, m, k, k2) {
	    if (k2 === undefined)
	        k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
	}) : (function (o, m, k, k2) {
	    if (k2 === undefined)
	        k2 = k;
	    o[k2] = m[k];
	});
	function __exportStar(m, o) {
	    for (var p in m)
	        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
	            __createBinding(o, m, p);
	}
	function __values(o) {
	    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	    if (m)
	        return m.call(o);
	    if (o && typeof o.length === "number")
	        return {
	            next: function () {
	                if (o && i >= o.length)
	                    o = void 0;
	                return { value: o && o[i++], done: !o };
	            }
	        };
	    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m)
	        return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
	            ar.push(r.value);
	    }
	    catch (error) {
	        e = { error: error };
	    }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"]))
	                m.call(i);
	        }
	        finally {
	            if (e)
	                throw e.error;
	        }
	    }
	    return ar;
	}
	/** @deprecated */
	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}
	/** @deprecated */
	function __spreadArrays() {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
	        s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	}
	function __spreadArray(to, from) {
	    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
	        to[j] = from[i];
	    return to;
	}
	function __await(v) {
	    return this instanceof __await ? (this.v = v, this) : new __await(v);
	}
	function __asyncGenerator(thisArg, _arguments, generator) {
	    if (!Symbol.asyncIterator)
	        throw new TypeError("Symbol.asyncIterator is not defined.");
	    var g = generator.apply(thisArg, _arguments || []), i, q = [];
	    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	    function verb(n) { if (g[n])
	        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	    function resume(n, v) { try {
	        step(g[n](v));
	    }
	    catch (e) {
	        settle(q[0][3], e);
	    } }
	    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
	    function fulfill(value) { resume("next", value); }
	    function reject(value) { resume("throw", value); }
	    function settle(f, v) { if (f(v), q.shift(), q.length)
	        resume(q[0][0], q[0][1]); }
	}
	function __asyncDelegator(o) {
	    var i, p;
	    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	}
	function __asyncValues(o) {
	    if (!Symbol.asyncIterator)
	        throw new TypeError("Symbol.asyncIterator is not defined.");
	    var m = o[Symbol.asyncIterator], i;
	    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
	}
	function __makeTemplateObject(cooked, raw) {
	    if (Object.defineProperty) {
	        Object.defineProperty(cooked, "raw", { value: raw });
	    }
	    else {
	        cooked.raw = raw;
	    }
	    return cooked;
	}
	;
	var __setModuleDefault = Object.create ? (function (o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function (o, v) {
	    o["default"] = v;
	};
	function __importStar(mod) {
	    if (mod && mod.__esModule)
	        return mod;
	    var result = {};
	    if (mod != null)
	        for (var k in mod)
	            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
	                __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	}
	function __importDefault(mod) {
	    return (mod && mod.__esModule) ? mod : { default: mod };
	}
	function __classPrivateFieldGet(receiver, privateMap) {
	    if (!privateMap.has(receiver)) {
	        throw new TypeError("attempted to get private field on non-instance");
	    }
	    return privateMap.get(receiver);
	}
	function __classPrivateFieldSet(receiver, privateMap, value) {
	    if (!privateMap.has(receiver)) {
	        throw new TypeError("attempted to set private field on non-instance");
	    }
	    privateMap.set(receiver, value);
	    return value;
	}

	var tslib_es6 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		__extends: __extends,
		get __assign () { return __assign; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__metadata: __metadata,
		__awaiter: __awaiter,
		__generator: __generator,
		__createBinding: __createBinding,
		__exportStar: __exportStar,
		__values: __values,
		__read: __read,
		__spread: __spread,
		__spreadArrays: __spreadArrays,
		__spreadArray: __spreadArray,
		__await: __await,
		__asyncGenerator: __asyncGenerator,
		__asyncDelegator: __asyncDelegator,
		__asyncValues: __asyncValues,
		__makeTemplateObject: __makeTemplateObject,
		__importStar: __importStar,
		__importDefault: __importDefault,
		__classPrivateFieldGet: __classPrivateFieldGet,
		__classPrivateFieldSet: __classPrivateFieldSet
	});

	var modrnUi_service = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.ModrnUiService = void 0;
	    var i0 = core_1__default['default'];
	    var ModrnUiService = /** @class */ (function () {
	        function ModrnUiService() {
	        }
	        return ModrnUiService;
	    }());
	    exports.ModrnUiService = ModrnUiService;
	    ModrnUiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModrnUiService_Factory() { return new ModrnUiService(); }, token: ModrnUiService, providedIn: "root" });
	    ModrnUiService.decorators = [
	        { type: core_1__default['default'].Injectable, args: [{
	                    providedIn: 'root'
	                },] }
	    ];
	    ModrnUiService.ctorParameters = function () { return []; };
	    
	});
	var modrnUi_service$1 = /*@__PURE__*/ getDefaultExportFromCjs(modrnUi_service);

	var modrnUi_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.ModrnUiComponent = void 0;
	    var ModrnUiComponent = /** @class */ (function () {
	        function ModrnUiComponent() {
	        }
	        ModrnUiComponent.prototype.ngOnInit = function () {
	        };
	        return ModrnUiComponent;
	    }());
	    exports.ModrnUiComponent = ModrnUiComponent;
	    ModrnUiComponent.decorators = [
	        { type: core_1__default['default'].Component, args: [{
	                    selector: 'lib-modrn-ui',
	                    template: "\n    <p>\n      modrn-ui works!\n    </p>\n  "
	                },] }
	    ];
	    ModrnUiComponent.ctorParameters = function () { return []; };
	    
	});
	var modrnUi_component$1 = /*@__PURE__*/ getDefaultExportFromCjs(modrnUi_component);

	var button_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.ButtonComponent = void 0;
	    var ButtonComponent = /** @class */ (function () {
	        function ButtonComponent() {
	            this.color = 'default';
	        }
	        ButtonComponent.prototype.ngOnInit = function () {
	        };
	        ButtonComponent.prototype.onClick = function (e) {
	            console.log('clicked');
	        };
	        return ButtonComponent;
	    }());
	    exports.ButtonComponent = ButtonComponent;
	    ButtonComponent.decorators = [
	        { type: core_1__default['default'].Component, args: [{
	                    selector: 'modrn-button',
	                    template: "\n    <button (click)=\"onClick($event)\" [class]=\"color\"><ng-content></ng-content></button>\n  ",
	                    encapsulation: core_1__default['default'].ViewEncapsulation.None,
	                    styles: ['button {padding: 8px; border-radius: 20px; min-height: 42px;}',
	                        'button.default {color: black; background: white;}',
	                        'button.primary {color: white; background: green;}',
	                        'button.error {color: white; background: #d70000;}']
	                },] }
	    ];
	    ButtonComponent.ctorParameters = function () { return []; };
	    ButtonComponent.propDecorators = {
	        color: [{ type: core_1__default['default'].Input }]
	    };
	    
	});
	var button_component$1 = /*@__PURE__*/ getDefaultExportFromCjs(button_component);

	var formField_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.FormFieldComponent = void 0;
	    var FormFieldComponent = /** @class */ (function () {
	        function FormFieldComponent() {
	        }
	        FormFieldComponent.prototype.ngOnInit = function () {
	        };
	        return FormFieldComponent;
	    }());
	    exports.FormFieldComponent = FormFieldComponent;
	    FormFieldComponent.decorators = [
	        { type: core_1__default['default'].Component, args: [{
	                    selector: 'modrn-form-field',
	                    template: "\n    <div><ng-content></ng-content></div>\n  "
	                },] }
	    ];
	    FormFieldComponent.ctorParameters = function () { return []; };
	    
	});
	var formField_component$1 = /*@__PURE__*/ getDefaultExportFromCjs(formField_component);

	var modrnUi_module = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.ModrnUiModule = void 0;
	    var ModrnUiModule = /** @class */ (function () {
	        function ModrnUiModule() {
	        }
	        return ModrnUiModule;
	    }());
	    exports.ModrnUiModule = ModrnUiModule;
	    ModrnUiModule.decorators = [
	        { type: core_1__default['default'].NgModule, args: [{
	                    declarations: [modrnUi_component.ModrnUiComponent, formField_component.FormFieldComponent, button_component.ButtonComponent],
	                    imports: [
	                        common_1__default['default'].CommonModule,
	                    ],
	                    exports: [modrnUi_component.ModrnUiComponent, formField_component.FormFieldComponent, button_component.ButtonComponent]
	                },] }
	    ];
	    
	});
	var modrnUi_module$1 = /*@__PURE__*/ getDefaultExportFromCjs(modrnUi_module);

	var tslib_1 = /*@__PURE__*/ getAugmentedNamespace(tslib_es6);

	var publicApi = createCommonjsModule(function (module, exports) {
	    "use strict";
	    /*
	     * Public API Surface of modrn-ui
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    tslib_1.__exportStar(modrnUi_service, exports);
	    tslib_1.__exportStar(modrnUi_component, exports);
	    tslib_1.__exportStar(button_component, exports);
	    tslib_1.__exportStar(formField_component, exports);
	    tslib_1.__exportStar(modrnUi_module, exports);
	    
	});
	var publicApi$1 = /*@__PURE__*/ getDefaultExportFromCjs(publicApi);

	var modrnUi = createCommonjsModule(function (module, exports) {
	    "use strict";
	    /**
	     * Generated bundle index. Do not edit.
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    tslib_1.__exportStar(publicApi, exports);
	    
	});
	var modrnUi$1 = /*@__PURE__*/ getDefaultExportFromCjs(modrnUi);

	return modrnUi$1;

})));
//# sourceMappingURL=modrn-ui.umd.js.map
