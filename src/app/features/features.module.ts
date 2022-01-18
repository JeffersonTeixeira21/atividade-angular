import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { PersonModule } from './person/person.module';
import { AddressModule } from './address/address.module';
import { AnimalsModule } from './animals/animals.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    PersonModule,
    AddressModule,
    AnimalsModule
  ]
})
export class FeaturesModule { }
