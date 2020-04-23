import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import {TaskComponent} from './task/task.component';
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  },
  {
    path: 'list',
    component: ListPage
  },
  {
    path: 'details/:title',
    component: DetailsComponent
  },
  {
    path: 'add',
    component: TaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
