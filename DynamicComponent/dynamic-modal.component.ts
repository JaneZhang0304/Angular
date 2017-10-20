import { Component, Input, Output, ViewChild, ComponentFactoryResolver, AfterViewInit,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ComponentItem } from './component-item';
import {DynamicContainerDirective} from './dynamic-container.directive';
import {DynamicBaseComponent} from './dynamic-base.component';
/**
 * Created by ray on 2017/4/14.
 */

@Component({
  selector: 'dynamic-modal',
  templateUrl: "./dynamic-modal.component.html"
})
export class DynamicModalComponent implements AfterViewInit, OnChanges{

  @Input()
  id: string;
  @Input()
  modalStyle: string = '';
  @Input()
  modalTitle: string;
  @Input()
  item: ComponentItem;
  @Output()
  closeRequest = new EventEmitter();
  @Output()
  okRequest = new EventEmitter();
  @ViewChild(DynamicContainerDirective) dynamicHost:DynamicContainerDirective;

  constructor(private componentFactoryResolver:ComponentFactoryResolver){}

  ngAfterViewInit(){
    // this.loadComponent();
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes['item']){
      this.loadComponent();
    }
  }

  loadComponent(){
    let viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();
    if(this.item){
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item.component);    
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<DynamicBaseComponent>componentRef.instance).data = this.item.data;
    }
  }

  clickOK(){
    this.okRequest.emit();
  }

  closeModal(){
    this.closeRequest.emit();
  }

}
