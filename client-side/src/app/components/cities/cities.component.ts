import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iattraction } from 'src/app/interfaces/iattraction';
import { Icity } from 'src/app/interfaces/icity';
import { GetattractionsService } from 'src/app/services/getattractions.service';
import { GetcitiesService } from 'src/app/services/getcities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
cities!:Icity[]
attractions!:Iattraction[]
color!: boolean;
newData!:Icity[];

constructor(routeService: ActivatedRoute, private cityService: GetcitiesService, private attractionService: GetattractionsService){

  
  //Get Cities from the Database
  cityService.getCities().subscribe({
    next: (results)=>{
      this.cities = results;
      this.color = this.colorIt();
    },
    error: (err)=>{
      console.log('Something went wrong.');
    }
  });

  //Get Attractions from the Database
  attractionService.getAttractions().subscribe({
    next: (results)=>{
      this.attractions = results;
      console.log(this.cities[0]);
    },
    error: (err)=>{
      console.log(err);
    }
  });

}

colorIt(){
  for(let i=0; i<this.cities.length; i++){
    if(this.cities[i].attractions.length < 2){
      return false;
    }
  } return true; 

} 
}
