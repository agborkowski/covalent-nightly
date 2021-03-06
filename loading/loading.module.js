var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdProgressBarModule, MdProgressSpinnerModule, OverlayModule, PortalModule } from '@angular/material';
import { LOADING_PROVIDER } from './services/loading.service';
import { LOADING_FACTORY_PROVIDER } from './services/loading.factory';
import { TdLoadingDirective } from './directives/loading.directive';
import { TdLoadingComponent } from './loading.component';
var TD_LOADING = [
    TdLoadingComponent,
    TdLoadingDirective,
];
var TD_LOADING_ENTRY_COMPONENTS = [
    TdLoadingComponent,
];
export { LoadingType, LoadingMode, LoadingStrategy } from './loading.component';
export { TdLoadingService } from './services/loading.service';
var CovalentLoadingModule = (function () {
    function CovalentLoadingModule() {
    }
    return CovalentLoadingModule;
}());
CovalentLoadingModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MdProgressBarModule,
            MdProgressSpinnerModule,
            OverlayModule,
            PortalModule,
        ],
        declarations: [
            TD_LOADING,
        ],
        exports: [
            TD_LOADING,
        ],
        providers: [
            LOADING_FACTORY_PROVIDER,
            LOADING_PROVIDER,
        ],
        entryComponents: [
            TD_LOADING_ENTRY_COMPONENTS,
        ],
    })
], CovalentLoadingModule);
export { CovalentLoadingModule };
//# sourceMappingURL=loading.module.js.map