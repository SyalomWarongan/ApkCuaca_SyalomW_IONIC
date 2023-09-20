import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient, ) { }

  getData(): Observable<any> {
    let lat = 1.474830;
    let lon = 124.842079;
    let apiID = '6a122195b49a08a9ccb93eeca0312110';
    let qString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alert&appid=${apiID}`;

    return this.http.get(qString);
  }
}
