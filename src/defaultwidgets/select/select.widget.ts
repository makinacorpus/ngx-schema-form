import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-select-widget',
  template: `<div>
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<select [formControl]="control" [attr.name]="name" [attr.disabled]="schema.readOnly" class="form-control">
	<option *ngFor="let option of schema.oneOf" [ngValue]="option.enum[0]" >{{option.description}}</option>
	</select>
	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</div>`
})
export class SelectWidget extends ControlWidget {}
