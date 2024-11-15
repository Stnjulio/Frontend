import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../../shared/shared.module'
import { DashboardRoutes } from './dashboard.routes'

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutes,
    SharedModule,
  ],
})
export class DashboardModule {}
