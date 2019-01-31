import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'project', loadChildren: './project/project.module#ProjectModule'},
  {path: 'task', loadChildren: './task/task.module#TaskModule'},
  {path: '', redirectTo: '/project', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,
      // {enableTracing: true}
    ),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
