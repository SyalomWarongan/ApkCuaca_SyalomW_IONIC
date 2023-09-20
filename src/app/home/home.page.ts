import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public res: any;

  constructor( public weatherAPI: WeatherService ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.weatherAPI.getData().subscribe((Response) => {
      this.res = Response;
      console.log(this.res);
    });
  }
}
