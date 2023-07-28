import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iweather } from '../interfaces/iweather';

@Injectable({
  providedIn: 'root'
})
export class GetweatherService {

  constructor(private routService: ActivatedRoute, private http: HttpClient) { }

  getWeather(){
    return this.http.get<Iweather[]>('http://localhost:4001/weather');
  }
}
