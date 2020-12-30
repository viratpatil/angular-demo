import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html'
})
export class MapsComponent implements OnInit{
    public static componentName = 'MapsComponent';
    center: google.maps.LatLngLiteral;
    options: google.maps.MapOptions = {
        mapTypeId: 'hybrid',
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        maxZoom: 15,
        minZoom: 8,
      }
    currentTemp: number;
    humidity: number;

    constructor(private _http: HttpClient) {

    }
    
    ngOnInit() {
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }

          this.getWeatherDetails(position)
        })
    }

    getWeatherDetails(position: any) {
        this._http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=68777e29a90c5303a4ddbdce1523d23c`).toPromise().then((value: any) => {
            this.currentTemp = value.main.temp;
            this.humidity = value.main.humidity;    
        });
    }

}