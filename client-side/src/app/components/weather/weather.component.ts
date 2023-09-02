import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iweather } from 'src/app/interfaces/iweather';
import { GetweatherService } from 'src/app/services/getweather.service';
import { GetweatherdetailsService } from 'src/app/services/getweatherdetails.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
weatherData!:Iweather[];
weatherDetails!: Iweather;
id!:number;

//Weather Form API
public weatherSearchForm!: FormGroup
weatherDataAPI: any;

constructor(private weatherDetailsService: GetweatherdetailsService, private weatherService: GetweatherService, private routeService: ActivatedRoute, private fb:FormBuilder){
  //Weather Form with API
  this.weatherSearchForm = this.fb.group({
    location: ['']
  });
  
  
  
  //Get weather from the database

  let id = this.routeService.snapshot.paramMap.get('id');
  let weatherId = parseInt(id!);

  weatherDetailsService.getWeatherDetails(weatherId).subscribe({
    next: (results) => {
      this.weatherDetails = results;
      console.log(this.weatherDetails)
    },
    error: (err) => {
      console.log(err);
    }
  });


  weatherService.getWeather().subscribe({
    next: (results) => {
      this.weatherData = results;
      console.log(this.weatherData)
    },
    error: (err) => {
      console.log(err);
    }
  });

}

weatherAPI(formValues: any){
 this.weatherDetailsService.getWeatherAPI(formValues.location).subscribe((data)=>{
  this.weatherDataAPI = data;
  console.log(this.weatherDataAPI)
 })
}

}
