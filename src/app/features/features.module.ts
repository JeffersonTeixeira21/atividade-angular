import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { PersonModule } from './person/person.module';
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    PersonModule,
    ProductModule,
  ]
})
export class FeaturesModule { }
