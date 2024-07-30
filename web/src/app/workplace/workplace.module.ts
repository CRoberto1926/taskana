import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from 'app/shared/shared.module';
import { ClassificationCategoriesService } from 'app/shared/services/classification-categories/classification-categories.service';
import { WorkplaceRoutingModule } from './workplace-routing.module';

import { TaskListToolbarComponent } from './components/task-list-toolbar/task-list-toolbar.component';
import { TaskMasterComponent } from './components/task-master/task-master.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskAttributeValueComponent } from './components/task-attribute-value/task-attribute-value.component';
import { TaskCustomFieldsComponent } from './components/task-custom-fields/task-custom-fields.component';
import { TaskInformationComponent } from './components/task-information/task-information.component';
import { TaskProcessingComponent } from './components/task-processing/task-processing.component';
import { TaskStatusDetailsComponent } from './components/task-status-details/task-status-details.component';
import { TaskListComponent } from './components/task-list/task-list.component';

import { TaskService } from './services/task.service';
import { TokenInterceptor } from './services/token-interceptor.service';
import { WorkplaceService } from './services/workplace.service';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';

const MODULES = [
  TypeaheadModule.forRoot(),
  AccordionModule.forRoot(),
  BsDropdownModule.forRoot(),
  CommonModule,
  FormsModule,
  HttpClientModule,
  AngularSvgIconModule,
  WorkplaceRoutingModule,
  AlertModule,
  SharedModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule
];

const DECLARATIONS = [
  TaskListToolbarComponent,
  TaskMasterComponent,
  TaskDetailsComponent,
  TaskInformationComponent,
  TaskAttributeValueComponent,
  TaskCustomFieldsComponent,
  TaskProcessingComponent,
  TaskStatusDetailsComponent,
  TaskListComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    MODULES,
    MatListModule,
    MatBadgeModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule
  ],
  providers: [
    TaskService,
    ClassificationCategoriesService,
    WorkplaceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class WorkplaceModule {}
