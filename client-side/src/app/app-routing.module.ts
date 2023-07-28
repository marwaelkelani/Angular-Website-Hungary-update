import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitiesComponent } from './components/cities/cities.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherdetailsComponent } from './components/weatherdetails/weatherdetails.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cities', component: CitiesComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'weatherdetails', component: WeatherdetailsComponent},
  // {path: 'weather/:name/:springN/:springM/:summerN/:summerM/:winterN/:winterM/:autumnN/:autumnM/:visitFrom/:visitTo', component: WeatherdetailsComponent},
  {path: 'weather/:id', component: WeatherdetailsComponent},
  {path: 'tech', component: TechIdeasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
