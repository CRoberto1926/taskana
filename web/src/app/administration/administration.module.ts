import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SharedModule } from 'app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ClassificationTypesSelectorComponent } from 'app/administration/components/classification-types-selector/classification-types-selector.component';
import { ClassificationCategoriesService } from 'app/shared/services/classification-categories/classification-categories.service';
import { AccessItemsManagementComponent } from 'app/administration/components/access-items-management/access-items-management.component';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { AdministrationRoutingModule } from './administration-routing.module';
/**
 * Components
 */
import { WorkbasketListComponent } from './components/workbasket-list/workbasket-list.component';
import { WorkbasketListToolbarComponent } from './components/workbasket-list-toolbar/workbasket-list-toolbar.component';
import { WorkbasketDetailsComponent } from './components/workbasket-details/workbasket-details.component';
import { WorkbasketInformationComponent } from './components/workbasket-information/workbasket-information.component';
import { WorkbasketDistributionTargetsComponent } from './components/workbasket-distribution-targets/workbasket-distribution-targets.component';
import { WorkbasketDistributionTargetsListComponent } from './components/workbasket-distribution-targets-list/workbasket-distribution-targets-list.component';
import { WorkbasketAccessItemsComponent } from './components/workbasket-access-items/workbasket-access-items.component';
import { ClassificationListComponent } from './components/classification-list/classification-list.component';
import { ClassificationDetailsComponent } from './components/classification-details/classification-details.component';
import { ImportExportComponent } from './components/import-export/import-export.component';
import { AdministrationOverviewComponent } from './components/administration-overview/administration-overview.component';

import { ClassificationOverviewComponent } from './components/classification-overview/classification-overview.component';
import { WorkbasketOverviewComponent } from './components/workbasket-overview/workbasket-overview.component';
/**
 * Services
 */
import { ClassificationDefinitionService } from './services/classification-definition.service';
import { WorkbasketDefinitionService } from './services/workbasket-definition.service';
import { ImportExportService } from './services/import-export.service';

/**
 * Material Design
 */
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { ScrollingModule } from '@angular/cdk/scrolling';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  AngularSvgIconModule,
  AlertModule,
  SharedModule,
  AdministrationRoutingModule,
  TypeaheadModule,
  InfiniteScrollModule,
  ScrollingModule
];

const DECLARATIONS = [
  WorkbasketOverviewComponent,
  WorkbasketListComponent,
  WorkbasketListToolbarComponent,
  WorkbasketAccessItemsComponent,
  WorkbasketDetailsComponent,
  WorkbasketInformationComponent,
  WorkbasketDistributionTargetsComponent,
  WorkbasketDistributionTargetsListComponent,
  ClassificationOverviewComponent,
  ClassificationListComponent,
  ClassificationTypesSelectorComponent,
  ClassificationDetailsComponent,
  ImportExportComponent,
  AccessItemsManagementComponent,
  AdministrationOverviewComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    MODULES,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatTooltipModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatRippleModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [
    ClassificationDefinitionService,
    WorkbasketDefinitionService,
    ClassificationCategoriesService,
    ImportExportService
  ]
})
export class AdministrationModule {}
