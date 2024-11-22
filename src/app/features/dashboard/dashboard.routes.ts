import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuComponent } from './pages/menu/menu.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { PersonComponent } from './pages/person/person.component';
import { DetailsComponent } from './pages/details/details.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: MenuComponent,
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
