import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ActivityComponent } from './pages/activity/activity.component';
import { PersonComponent } from './pages/person/person.component';
import { DashboardRoutes } from './dashboard.routes';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [
    ActivityComponent,
    PersonComponent,
    MenuComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutes, 
    SharedModule,
    RouterModule

    
  ],
})
export class DashboardModule {}
