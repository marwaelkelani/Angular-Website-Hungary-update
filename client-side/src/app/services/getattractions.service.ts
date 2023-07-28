import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iattraction } from '../interfaces/iattraction';

@Injectable({
  providedIn: 'root'
})
export class GetattractionsService {

  constructor(private routeService: ActivatedRoute, private http: HttpClient) { }

  getAttractions(){
    return this.http.get<Iattraction[]>('http://localhost:4001/attractions');
  }
}
