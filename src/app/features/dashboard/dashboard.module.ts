import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ActivityComponent } from './pages/activity/activity.component';
import { PersonComponent } from './pages/person/person.component';
import { DashboardRoutes } from './dashboard.routes';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    ActivityComponent,
    PersonComponent,
    IndexComponent,
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
