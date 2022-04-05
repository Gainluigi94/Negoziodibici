import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Configuration, EnvConfigurationService, Environment } from '../env-configuration.service';
import {  Addpersona } from '../model/persona/Addpersona';
import { Persona } from '../model/persona/persona';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  Environment: Environment;
persone:Persona[];
persona:Persona;
  constructor(private _personaservice: PersonaService,
    private envConfigurationService: EnvConfigurationService,
    private router:Router ) {
      this.envConfigurationService.load().subscribe(x => {
        let result = x as Configuration;
        console.log('result',result);
        this.Environment = result.environementData as Environment;
        console.log('Environment',this.Environment);
      });
     }

   addPerson=new FormGroup({
      Nome: new FormControl(""),
      Cognome: new FormControl(""),
      Codicefiscale:new FormControl(""),
      Via:new FormControl(""),
      Sesso:new FormControl(""),
      Cap:new FormControl(0),
      Comune:new FormControl(""),
      Nazione:new FormControl(""),
      Nascita:new FormControl(""),
      Email:new FormControl(""),
      Password:new FormControl(""),
      Numerocivico:new FormControl(0),
          });
          OnRowInserting(){
    debugger;


const nuovapersona= <Addpersona>this.addPerson.value;



this._personaservice.AddPersona(nuovapersona).subscribe
((result)=>{this.persona = result;
  console.log(this.persona);
this.router.navigate(['']);
});

  }








}
