import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { People } from 'src/app/core/model/people';
import { PeopleService } from 'src/app/core/services/people/people.service';
import { ListComponent } from './list/list.component';

@Injectable()
export class PeopleDataResolver implements Resolve<People[]> {
  constructor(private peopleService: PeopleService) {}

  resolve(){
    return this.peopleService.all();
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities:
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {}
