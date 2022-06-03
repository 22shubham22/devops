import { Component } from '@angular/core';
import { ShellbarUser, ShellbarUserMenu } from '@fundamental-ngx/core/shellbar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  temp:any;
  cloud:any;
  hum:any;
  wind:any;
  name:any;
  region:any;
  country:any;
  loading:boolean = false;
  visible:boolean = false;
  title:string = 'angular-starter';

  constructor(private http: HttpClient) {}
  user: ShellbarUser = {
    fullName: 'Shubham Anand',
    colorAccent: 6
  };

  userMenu: ShellbarUserMenu[] = [
    { text: 'Settings', callback: this.settingsCallback },
    { text: 'Sign Out', callback: this.signOutCallback }
  ];

  settingsCallback(): void {
    alert('Settings Clicked');
  }

  signOutCallback(): void {
    alert('Sign Out Clicked');
  }
  submit(name: any){
    this.loading=true;
    this.visible=false;
    var lat,long;
    this.getLatLong(name).subscribe((data:any) => {
        lat= data.data[0].latitude;
        long= data.data[0].longitude;
        this.getWeather(lat,long).subscribe((data:any) => {
          this.loading=false;
          this.temp=data.current.temperature;
          this.cloud=data.current.cloudcover;
          this.hum=data.current.humidity;
          this.wind=data.current.wind_speed;
          this.name=data.location.name;
          this.region=data.location.region;
          this.country=data.location.country;
          this.visible=true;
      });
      });
  }
  getLatLong(name:any) {
    let url = 'http://api.positionstack.com/v1/forward?access_key=a6af74dd0d1482a7002f06a794e3f9a8&query=';
    url=url+name;
    return this.http.get(url);
  }
  getWeather(lat:any,long:any){
    const url = `http://api.weatherstack.com/current?access_key=2eb16bdead46872dc880b6bdc6f487da&query=${lat},${long}&units=m`;
    return this.http.get(url);
  }

}
