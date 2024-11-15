import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const authRoutes: Routes = [
    { 
      path: 'login',
    },
    {
      path: `register/:token`,

    },
    {
      path: `password-recovery`,

    },
    { 
      path: 'password-reset/:token',
    },
    {
      path: `**`,
      redirectTo: 'login',
    },
]

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutes {}