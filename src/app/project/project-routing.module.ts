import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {NewProjectComponent} from './new-project/new-project.component';

const projectRouts: Routes = [
  {path: 'new', component: NewProjectComponent},
  {path: '', component: ListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(projectRouts)
  ],
  exports: [RouterModule]
})
export class ProjectRoutingModule {
}
