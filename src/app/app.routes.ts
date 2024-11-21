import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPreRoute } from './app.pre-routes';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: AppPreRoute,
      bindToComponentInputs: true,
      paramsInheritanceStrategy: 'always',
    }),
    CoreModule,
  ],
  exports: [RouterModule],
  providers: [AppPreRoute],
})
export class AppRoutesModule {}
