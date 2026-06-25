import { Component } from '@angular/core';
import { MapComponent } from './features/components/map/map.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [CommonModule, MapComponent]
})
export class App {
}
