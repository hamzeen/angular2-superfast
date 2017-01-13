import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '@angular/core/src/application_init';
import * as import7 from '@angular/core/src/testability/testability';
import * as import8 from '@angular/core/src/application_ref';
import * as import9 from '@angular/core/src/linker/compiler';
import * as import10 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import11 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import12 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import13 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import14 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import15 from '@angular/core/src/animation/animation_queue';
import * as import16 from '@angular/core/src/linker/view_utils';
import * as import17 from '@angular/platform-browser/src/browser/title';
import * as import19 from './app.component.ngfactory';
import * as import20 from '@angular/core/src/i18n/tokens';
import * as import21 from '@angular/core/src/application_tokens';
import * as import22 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import23 from '@angular/platform-browser/src/dom/events/key_events';
import * as import24 from '@angular/core/src/zone/ng_zone';
import * as import25 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import26 from '@angular/core/src/console';
import * as import27 from '@angular/core/src/error_handler';
import * as import28 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import29 from '@angular/platform-browser/src/dom/animation_driver';
import * as import30 from '@angular/core/src/render/api';
import * as import31 from '@angular/core/src/security';
import * as import32 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import33 from '@angular/core/src/change_detection/differs/keyvalue_differs';
class AppModuleInjector extends import0.NgModuleInjector {
    constructor(parent) {
        super(parent, [import19.AppComponentNgFactory], [import19.AppComponentNgFactory]);
    }
    get _LOCALE_ID_4() {
        if ((this.__LOCALE_ID_4 == null)) {
            (this.__LOCALE_ID_4 = import3._localeFactory(this.parent.get(import20.LOCALE_ID, null)));
        }
        return this.__LOCALE_ID_4;
    }
    get _NgLocalization_5() {
        if ((this.__NgLocalization_5 == null)) {
            (this.__NgLocalization_5 = new import5.NgLocaleLocalization(this._LOCALE_ID_4));
        }
        return this.__NgLocalization_5;
    }
    get _ApplicationRef_10() {
        if ((this.__ApplicationRef_10 == null)) {
            (this.__ApplicationRef_10 = this._ApplicationRef__9);
        }
        return this.__ApplicationRef_10;
    }
    get _Compiler_11() {
        if ((this.__Compiler_11 == null)) {
            (this.__Compiler_11 = new import9.Compiler());
        }
        return this.__Compiler_11;
    }
    get _APP_ID_12() {
        if ((this.__APP_ID_12 == null)) {
            (this.__APP_ID_12 = import21._appIdRandomProviderFactory());
        }
        return this.__APP_ID_12;
    }
    get _DOCUMENT_13() {
        if ((this.__DOCUMENT_13 == null)) {
            (this.__DOCUMENT_13 = import4._document());
        }
        return this.__DOCUMENT_13;
    }
    get _HAMMER_GESTURE_CONFIG_14() {
        if ((this.__HAMMER_GESTURE_CONFIG_14 == null)) {
            (this.__HAMMER_GESTURE_CONFIG_14 = new import10.HammerGestureConfig());
        }
        return this.__HAMMER_GESTURE_CONFIG_14;
    }
    get _EVENT_MANAGER_PLUGINS_15() {
        if ((this.__EVENT_MANAGER_PLUGINS_15 == null)) {
            (this.__EVENT_MANAGER_PLUGINS_15 = [
                new import22.DomEventsPlugin(),
                new import23.KeyEventsPlugin(),
                new import10.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_14)
            ]);
        }
        return this.__EVENT_MANAGER_PLUGINS_15;
    }
    get _EventManager_16() {
        if ((this.__EventManager_16 == null)) {
            (this.__EventManager_16 = new import11.EventManager(this._EVENT_MANAGER_PLUGINS_15, this.parent.get(import24.NgZone)));
        }
        return this.__EventManager_16;
    }
    get _DomSharedStylesHost_17() {
        if ((this.__DomSharedStylesHost_17 == null)) {
            (this.__DomSharedStylesHost_17 = new import12.DomSharedStylesHost(this._DOCUMENT_13));
        }
        return this.__DomSharedStylesHost_17;
    }
    get _AnimationDriver_18() {
        if ((this.__AnimationDriver_18 == null)) {
            (this.__AnimationDriver_18 = import4._resolveDefaultAnimationDriver());
        }
        return this.__AnimationDriver_18;
    }
    get _DomRootRenderer_19() {
        if ((this.__DomRootRenderer_19 == null)) {
            (this.__DomRootRenderer_19 = new import13.DomRootRenderer_(this._DOCUMENT_13, this._EventManager_16, this._DomSharedStylesHost_17, this._AnimationDriver_18, this._APP_ID_12));
        }
        return this.__DomRootRenderer_19;
    }
    get _RootRenderer_20() {
        if ((this.__RootRenderer_20 == null)) {
            (this.__RootRenderer_20 = import25._createConditionalRootRenderer(this._DomRootRenderer_19, this.parent.get(import25.NgProbeToken, null), this.parent.get(import8.NgProbeToken, null)));
        }
        return this.__RootRenderer_20;
    }
    get _DomSanitizer_21() {
        if ((this.__DomSanitizer_21 == null)) {
            (this.__DomSanitizer_21 = new import14.DomSanitizerImpl());
        }
        return this.__DomSanitizer_21;
    }
    get _Sanitizer_22() {
        if ((this.__Sanitizer_22 == null)) {
            (this.__Sanitizer_22 = this._DomSanitizer_21);
        }
        return this.__Sanitizer_22;
    }
    get _AnimationQueue_23() {
        if ((this.__AnimationQueue_23 == null)) {
            (this.__AnimationQueue_23 = new import15.AnimationQueue(this.parent.get(import24.NgZone)));
        }
        return this.__AnimationQueue_23;
    }
    get _ViewUtils_24() {
        if ((this.__ViewUtils_24 == null)) {
            (this.__ViewUtils_24 = new import16.ViewUtils(this._RootRenderer_20, this._Sanitizer_22, this._AnimationQueue_23));
        }
        return this.__ViewUtils_24;
    }
    get _IterableDiffers_25() {
        if ((this.__IterableDiffers_25 == null)) {
            (this.__IterableDiffers_25 = import3._iterableDiffersFactory());
        }
        return this.__IterableDiffers_25;
    }
    get _KeyValueDiffers_26() {
        if ((this.__KeyValueDiffers_26 == null)) {
            (this.__KeyValueDiffers_26 = import3._keyValueDiffersFactory());
        }
        return this.__KeyValueDiffers_26;
    }
    get _SharedStylesHost_27() {
        if ((this.__SharedStylesHost_27 == null)) {
            (this.__SharedStylesHost_27 = this._DomSharedStylesHost_17);
        }
        return this.__SharedStylesHost_27;
    }
    get _Title_28() {
        if ((this.__Title_28 == null)) {
            (this.__Title_28 = new import17.Title());
        }
        return this.__Title_28;
    }
    createInternal() {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._AppModule_3 = new import1.AppModule();
        this._ErrorHandler_6 = import4.errorHandler();
        this._ApplicationInitStatus_7 = new import6.ApplicationInitStatus(this.parent.get(import6.APP_INITIALIZER, null));
        this._Testability_8 = new import7.Testability(this.parent.get(import24.NgZone));
        this._ApplicationRef__9 = new import8.ApplicationRef_(this.parent.get(import24.NgZone), this.parent.get(import26.Console), this, this._ErrorHandler_6, this, this._ApplicationInitStatus_7, this.parent.get(import7.TestabilityRegistry, null), this._Testability_8);
        return this._AppModule_3;
    }
    getInternal(token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_3;
        }
        if ((token === import20.LOCALE_ID)) {
            return this._LOCALE_ID_4;
        }
        if ((token === import5.NgLocalization)) {
            return this._NgLocalization_5;
        }
        if ((token === import27.ErrorHandler)) {
            return this._ErrorHandler_6;
        }
        if ((token === import6.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_7;
        }
        if ((token === import7.Testability)) {
            return this._Testability_8;
        }
        if ((token === import8.ApplicationRef_)) {
            return this._ApplicationRef__9;
        }
        if ((token === import8.ApplicationRef)) {
            return this._ApplicationRef_10;
        }
        if ((token === import9.Compiler)) {
            return this._Compiler_11;
        }
        if ((token === import21.APP_ID)) {
            return this._APP_ID_12;
        }
        if ((token === import28.DOCUMENT)) {
            return this._DOCUMENT_13;
        }
        if ((token === import10.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_14;
        }
        if ((token === import11.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_15;
        }
        if ((token === import11.EventManager)) {
            return this._EventManager_16;
        }
        if ((token === import12.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_17;
        }
        if ((token === import29.AnimationDriver)) {
            return this._AnimationDriver_18;
        }
        if ((token === import13.DomRootRenderer)) {
            return this._DomRootRenderer_19;
        }
        if ((token === import30.RootRenderer)) {
            return this._RootRenderer_20;
        }
        if ((token === import14.DomSanitizer)) {
            return this._DomSanitizer_21;
        }
        if ((token === import31.Sanitizer)) {
            return this._Sanitizer_22;
        }
        if ((token === import15.AnimationQueue)) {
            return this._AnimationQueue_23;
        }
        if ((token === import16.ViewUtils)) {
            return this._ViewUtils_24;
        }
        if ((token === import32.IterableDiffers)) {
            return this._IterableDiffers_25;
        }
        if ((token === import33.KeyValueDiffers)) {
            return this._KeyValueDiffers_26;
        }
        if ((token === import12.SharedStylesHost)) {
            return this._SharedStylesHost_27;
        }
        if ((token === import17.Title)) {
            return this._Title_28;
        }
        return notFoundResult;
    }
    destroyInternal() {
        this._ApplicationRef__9.ngOnDestroy();
    }
}
export const AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map