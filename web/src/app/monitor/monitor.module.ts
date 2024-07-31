import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AlertModule} from 'ngx-bootstrap/alert';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {NgChartsModule} from 'ng2-charts';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {MapToIterable} from 'app/shared/pipes/map-to-iterable.pipe';
import {SharedModule} from '../shared/shared.module';
import {MonitorRoutingModule} from './monitor-routing.module';

/**
 * Components
 */
import {ReportTableComponent} from './components/report-table/report-table.component';
import {MonitorComponent} from './components/monitor/monitor.component';
import {TaskReportComponent} from './components/task-report/task-report.component';
import {
  ClassificationReportComponent
} from './components/classification-report/classification-report.component';
import {TimestampReportComponent} from './components/timestamp-report/timestamp-report.component';
import {
  WorkbasketReportComponent
} from './components/workbasket-report/workbasket-report.component';
import {
  WorkbasketReportPlannedDateComponent
} from './components/workbasket-report-planned-date/workbasket-report-planned-date.component';
import {
  WorkbasketReportDueDateComponent
} from './components/workbasket-report-due-date/workbasket-report-due-date.component';
import {
  TaskPriorityReportComponent
} from './components/task-priority-report/task-priority-report.component';
import {CanvasComponent} from './components/canvas/canvas.component';
import {
  TaskPriorityReportFilterComponent
} from './components/task-priority-report-filter/task-priority-report-filter.component';

/**
 * Services
 */
import {MonitorService} from './services/monitor.service';

/**
 * Material Design
 */
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatDividerModule} from '@angular/material/divider';

const MODULES = [
  CommonModule,
  MonitorRoutingModule,
  FormsModule,
  AlertModule.forRoot(),
  NgChartsModule,
  TabsModule.forRoot(),
  HttpClientModule,
  AngularSvgIconModule,
  SharedModule,
  MatTabsModule,
  MatButtonModule,
  MatTableModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatDividerModule
];
const DECLARATIONS = [
  ReportTableComponent,
  MonitorComponent,
  TaskPriorityReportComponent,
  TaskPriorityReportFilterComponent,
  CanvasComponent,
  TimestampReportComponent,
  WorkbasketReportComponent,
  WorkbasketReportPlannedDateComponent,
  WorkbasketReportDueDateComponent,
  TaskReportComponent,
  ClassificationReportComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [MODULES],
  providers: [MonitorService, MapToIterable]
})
export class MonitorModule {
}
