  //src/app/features/auth/auth.routes.ts
  import { RouterModule, Routes } from '@angular/router';
  import { NgModule } from '@angular/core';
  import { LoginComponent } from './pages/login/login.component';
  import { RegisterComponent } from './pages/register/register.component';


  const authRoutes: Routes = [
      { 
        path: 'login',
        component: LoginComponent,
      },
      {
        path: `register`,
        component: RegisterComponent,
      },
      
  ]

  @NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule],
  })
  export class AuthRoutes {}