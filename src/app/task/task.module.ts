import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskHomeComponent} from './task-home/task-home.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {TaskHeaderComponent} from './task-header/task-header.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskRoutingModule} from './task-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [TaskHomeComponent, TaskItemComponent, TaskHeaderComponent, TaskListComponent],
  imports: [
    SharedModule,
    TaskRoutingModule
  ]
})
export class TaskModule {
}
