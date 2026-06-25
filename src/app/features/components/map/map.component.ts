import { AfterViewInit, Component, createComponent, EnvironmentInjector, inject, NgZone } from '@angular/core';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MapPopupComponent } from './map-popup.component';

@Component({
    selector: 'app-map',
    template: `<div id="map"></div>`,
    styleUrls: ['./map.component.scss'],
    imports: [CommonModule, MatDialogModule],
})
export class MapComponent implements AfterViewInit {
    private zone = inject(NgZone);
    private dialog = inject(MatDialog);

    private env = inject(EnvironmentInjector);

    ngAfterViewInit() {
        const map = L.map('map').setView([54.9086211, 25.0763449], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map);

        const marker = L.marker([54.9086211, 25.0763449]).addTo(map);

        marker.bindPopup('', { maxWidth: 320 });

        let popupComponentRef: ReturnType<typeof createComponent> | null = null;

        marker.on('popupopen', () => {
            popupComponentRef = createComponent(MapPopupComponent, { environmentInjector: this.env });
            const popupEl = popupComponentRef.location.nativeElement as HTMLElement;
            const popup = marker.getPopup();
            if (popup) {
                popup.setContent(popupEl);
                popup.update();
            }
        });

        marker.on('popupclose', () => {
            if (popupComponentRef) {
                try {
                    popupComponentRef.destroy();
                } catch (err) {
                }
                popupComponentRef = null;
            }
        });

        marker.openPopup();
    }
}
