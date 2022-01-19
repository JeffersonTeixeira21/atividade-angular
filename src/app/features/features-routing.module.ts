import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardGuard } from '../core/guard/guard.guard';
import { ListComponent } from './person/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'people',
    pathMatch: 'full',
  },
  {
    path: 'address',
    canActivate: [GuardGuard],
    loadChildren: async () =>
      import('./address/address.module').then((p) => p.AddressModule),
  },
  {
    path: 'animals',
    canActivate: [GuardGuard],
    loadChildren: async () =>
    import('./animals/animals.module').then((m) => m.AnimalsModule),
  },
  {
    path: 'people',
    canActivate: [GuardGuard],
    loadChildren: async () =>
    import ('./person/person.module').then((m) => m.PersonModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
