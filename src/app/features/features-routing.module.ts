import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardGuard } from '../core/guard/guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'people',
    pathMatch: 'full',
  },
  {
    path: 'people',
    canActivate: [GuardGuard],
    loadChildren: async () =>
      import('./person/person.module').then((m) => m.PersonModule),
  },
  {
    path: 'product',
    canActivate: [GuardGuard],
    loadChildren: async () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
