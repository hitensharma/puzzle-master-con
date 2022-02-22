import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

const EXPORTS = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatBadgeModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...EXPORTS],
  exports: [...EXPORTS],
})
export class MaterialModule {}
