import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../../shared/shared.module'
import { DashboardRoutes } from './dashboard.routes'
import { ActivityComponent } from './pages/activity/activity.component'
import { PersonComponent } from './pages/person/person.component'
import { ActivityEditorComponent } from './components/activity-editor/activity-editor.component'
import { PersonEditorComponent } from './components/person-editor/person-editor.component'

@NgModule({
  declarations: [
    ActivityComponent,
    PersonComponent,
    ActivityEditorComponent,
    PersonEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutes,
    SharedModule
  ],
})
export class DashboardModule {}
