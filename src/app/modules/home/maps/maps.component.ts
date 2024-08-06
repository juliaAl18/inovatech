import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  map!: google.maps.Map;

  latitude: number = -15.796
  longitude: number = -47.9504
  zoom: number = 15;

  openingHours: { [key: string]: { open: string; close: string } } = {
    monday: { open: 'closed', close: 'closed' },
    tuesday: { open: '09:00', close: '18:00' },
    wednesday: { open: '09:00', close: '18:00' },
    thursday: { open: '09:00', close: '18:00' },
    friday: { open: '09:00', close: '18:00' },
    saturday: { open: '09:00', close: '18:00' },
    sunday: { open: '09:00', close: '18:00' }
  };

  statusMessage: string = '';
  statusClass: string = '';

  constructor() { }

  ngOnInit(): void {
    this.initMap();
    this.checkStatus();
  }

  initMap(): void {
    const location = new google.maps.LatLng(this.latitude, this.longitude);
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: location,
      zoom: this.zoom
    });
    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Feira do SIA'
    });

    const infoWindow = new google.maps.InfoWindow({
      content: '<div><strong>Feira do SIA</strong><br>Brasília, DF</div>'
    });

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });

    this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        this.redirectToGoogleMaps(event.latLng.lat(), event.latLng.lng());
      }
    });
  }

  redirectToGoogleMaps(lat: number, lng: number): void {
    const url = `https://www.google.com/maps/place/Feira+dos+Importados+de+Bras%C3%ADlia/@-15.7961737,-47.9518241,18z/data=!4m6!3m5!1s0x935a30586c502187:0xafa7f5650523c827!8m2!3d-15.7966072!4d-47.9499023!16s%2Fg%2F11b6shw1k9?entry=ttu`;
    window.open(url, '_blank');
  }

  checkStatus(): void {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const time = now.toTimeString().split(' ')[0].substring(0, 5);

    const hours = this.openingHours[day as keyof typeof this.openingHours];

    if (hours) {
      if (hours.open === 'Closed') {
        this.statusMessage = 'Currently Closed';
        this.statusClass = 'closed-now';
      } else {
        const isOpen = time >= hours.open && time <= hours.close;
        this.statusMessage = isOpen ? 'Aberto Agora' : 'Fechado Agora';
        this.statusClass = isOpen ? 'open-now' : 'closed-now';
      }
    }
  }
}
