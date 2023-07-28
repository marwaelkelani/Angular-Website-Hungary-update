import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iweather } from 'src/app/interfaces/iweather';
import { GetweatherService } from 'src/app/services/getweather.service';
import { GetweatherdetailsService } from 'src/app/services/getweatherdetails.service';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent {
  weather!: Iweather;
  

  constructor(private routeService: ActivatedRoute, private weatherService: GetweatherService, private weatherDetails: GetweatherdetailsService){
    // Get weather from Database

   
    let id = this.routeService.snapshot.paramMap.get('id');
    let weatherId = parseInt(id!);


    weatherDetails.getWeatherDetails(weatherId).subscribe({
      next: (result) => {
        this.weather = result;
        console.log(this.weather)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
