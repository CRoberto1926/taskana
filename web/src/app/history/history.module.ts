import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { HistoryRoutingModule } from './history-routing.module';
import { TaskHistoryQueryComponent } from './task-history-query/task-history-query.component';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [TaskHistoryQueryComponent]
})
export class HistoryModule {}
