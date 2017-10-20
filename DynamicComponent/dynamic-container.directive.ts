import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector:'[dynamic-host]',
})
export class DynamicContainerDirective{
    constructor(public viewContainerRef:ViewContainerRef){}
}