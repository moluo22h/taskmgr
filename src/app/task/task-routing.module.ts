import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '_@angular_router@7.0.4@@angular/router';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskHomeComponent} from './task-home/task-home.component';

const taskRoutes: Routes = [
  {path: '', component: TaskHomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(taskRoutes)
  ],
  exports: [RouterModule]
})
export class TaskRoutingModule {
}
