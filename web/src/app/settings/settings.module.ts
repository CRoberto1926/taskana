import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/Settings/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { FormsModule } from '@angular/forms';
import { SettingsService } from './services/settings-service';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [SettingsService]
})
export class SettingsModule {}
