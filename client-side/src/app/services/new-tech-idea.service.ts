import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itechidea } from '../interfaces/itechidea';

@Injectable({
  providedIn: 'root'
})
export class NewTechIdeaService {

  constructor(private http: HttpClient) { }

  newTechIdea(formData: any){
    return this.http.post<Itechidea>('http://localhost:4001/tech', formData);
  }
}
