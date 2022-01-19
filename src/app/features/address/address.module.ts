import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { NgxViacepModule } from "@brunoc/ngx-viacep";


@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [
    CommonModule,
    AddressRoutingModule,
    NgxViacepModule
  ]
})
export class AddressModule { }
