import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Icity } from '../interfaces/icity';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetcitiesService {

  constructor(private routeService: ActivatedRoute, private http: HttpClient) { }

  getCities(){
    return this.http.get<Icity[]>('http://localhost:4001/cities');
  }

}
