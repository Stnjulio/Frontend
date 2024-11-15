import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const dashboardRoutes: Routes = [
  {
    path: '',
    children: [
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
