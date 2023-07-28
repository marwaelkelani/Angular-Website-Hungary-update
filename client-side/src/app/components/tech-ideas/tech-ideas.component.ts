import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Icity } from 'src/app/interfaces/icity';
import { GetcitiesService } from 'src/app/services/getcities.service';
import { prohibited, avoidWordNothing, avoidWordTourist } from './custom-validation';
import { NewTechIdeaService } from 'src/app/services/new-tech-idea.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent {
  cityNames!: Icity[]
  techIdeaForm!: FormGroup;
   redColor = 'red';

  constructor(private getCities: GetcitiesService, private fb: FormBuilder, private newTechService: NewTechIdeaService, private router: Router) {
    this.techIdeaForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(2), prohibited(/tourist/), avoidWordTourist]],
      age: [''],
      email: ['', [Validators.required, Validators.email]],
      target_city: ['', [Validators.required]],
      tech_idea: ['', [Validators.required, Validators.minLength(100), prohibited(/nothing/), avoidWordNothing]]
     
    });

    //Get Cities from Database
    getCities.getCities().subscribe({
      next: (results: Icity[]) => {
        this.cityNames = results;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onClick() {
    let formData = this.techIdeaForm.value;
    console.log(this.techIdeaForm.value);
    this.techIdeaForm.reset();

    this.newTechService.newTechIdea(formData).subscribe({
      next: (results)=>{
        alert('Your tech idea was successfully submitted!');
        console.log(results);
      },
      error: (err)=>{
        console.log(err);
        alert('Something went wrong;')
      }

    });
  }

  exitFormPage(){
   this.router.navigateByUrl('/');
  }


  //Getters for Form Validation

  get name() {
    return this.techIdeaForm.get('name')!;
  }

  get age() {
    return this.techIdeaForm.get('age')!;
  }

  get email() {
    return this.techIdeaForm.get('email')!;
  }

  get target_city() {
    return this.techIdeaForm.get('target_city')!;
  }

  get tech_idea() {
    return this.techIdeaForm.get('tech_idea')!;
  }
}
