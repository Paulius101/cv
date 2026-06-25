import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
// MatListModule removed — using custom flex layout for lists
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
// MatChipsModule removed — not used in this component

@Component({
  standalone: true,
  selector: 'cv-dialog',
  templateUrl: './cv-dialog.component.html',
  styleUrls: ['./cv-dialog.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatIconModule]
})
export class CvDialog {
  private dialogRef = inject(MatDialogRef);
  close() {
    this.dialogRef.close();
  }
}
