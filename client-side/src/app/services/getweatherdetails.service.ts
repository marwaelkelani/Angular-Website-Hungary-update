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
}
