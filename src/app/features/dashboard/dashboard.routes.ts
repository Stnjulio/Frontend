import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './pages/index/index.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { PersonComponent } from './pages/person/person.component';
import { DetailsComponent } from './pages/details/details.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      
      {
        path: 'activity',
        component: ActivityComponent,
      },
      {
        path: 'person',
        component: PersonComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      },

      {
        path: '**',
        redirectTo: 'details',
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutes {}
