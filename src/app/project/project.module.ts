import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {ProjectItemComponent} from './project-item/project-item.component';
import {NewProjectComponent} from './new-project/new-project.component';
import {InviteComponent} from './invite/invite.component';
import {ProjectRoutingModule} from './project-routing.module';
import {SharedModule} from '../shared/shared.module';
import {NZ_MODAL_CONFIG} from 'ng-zorro-antd';

@NgModule({
  declarations: [ListComponent, ProjectItemComponent, NewProjectComponent, InviteComponent],
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  entryComponents: [
    NewProjectComponent,
    InviteComponent
  ],
  providers: [
    {provide: NZ_MODAL_CONFIG, useValue: {autoBodyPadding: false}}
  ]
})
export class ProjectModule {
}
