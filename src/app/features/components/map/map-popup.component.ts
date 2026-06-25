import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CvDialog } from '../cv-dialog/cv-dialog.component';

@Component({
  selector: 'map-popup',
  templateUrl: './map-popup.component.html',
  styleUrls: ['./map-popup.component.scss'],
  imports: [CommonModule, MatButtonModule, MatIconModule]
})
export class MapPopupComponent {
  private dialog = inject(MatDialog);

  openCv() {
    this.dialog.open(CvDialog, { width: '760px', maxHeight: '85vh' });
  }
}
