import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {DynamicModalComponent} from '../ctls/dynamic-modal.component';
import {DynamicContainerDirective} from '../ctls/dynamic-container.directive';
import {ConfirmBodyComponent} from '../ctls/confirm-body.component';
/**
 * Created by ray on 2017/4/19.
 */

@NgModule({
  imports: [CommonModule],
  declarations: [    
    DynamicModalComponent,
    ConfirmBodyComponent,
    DynamicContainerDirective,
  ],
  exports: [    
  DynamicModalComponent,
  ConfirmBodyComponent,
  ],
  entryComponents:[
    ConfirmBodyComponent,
  ]
})
export class LayoutModule {

}
