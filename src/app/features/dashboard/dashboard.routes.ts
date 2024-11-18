import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './pages/index/index.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { PersonComponent } from './pages/person/person.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'activity',
        component: ActivityComponent,
      },
      {
        path: 'person',
        component: PersonComponent
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutes {}
