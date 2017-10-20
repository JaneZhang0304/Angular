import { Component, Input } from '@angular/core';
import { DynamicBaseComponent } from './dynamic-base.component';

@Component({
    template: `<div>
    <p>{{data.content}}</p>
    </div>`
})
export class ConfirmBodyComponent implements DynamicBaseComponent {
    @Input() data: any;
}
