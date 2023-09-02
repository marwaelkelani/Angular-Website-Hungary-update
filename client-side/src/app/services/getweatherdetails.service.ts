import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iweather } from '../interfaces/iweather';

@Injectable({
  providedIn: 'root'
})
export class GetweatherdetailsService {

  constructor(private http: HttpClient) { }

  getWeatherDetails(id:number){
    return this.http.get<Iweather>(`http://localhost:4001/weather/${id}`);
  }

  getWeatherAPI(location: any){
    return this.http.get(`http://api.weatherapi.com/v1/current.json?key=e187c3d2f3884cbfb37145106232908&q=/${location}`)
  }
}
