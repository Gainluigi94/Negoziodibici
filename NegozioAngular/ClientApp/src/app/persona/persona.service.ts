
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration, EnvConfigurationService, Environment } from '../env-configuration.service';
import { Addpersona } from '../model/persona/addpersona';
import { Persona } from '../model/persona/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  public Environment : Environment;
  constructor(private envConfigurationService: EnvConfigurationService,private http: HttpClient) {
  this.envConfigurationService.load().subscribe(x => {
    let result = x as Configuration;
    this.Environment= result.environementData as Environment;
  });
  }


  AddPersona(persona:Addpersona):Observable<Persona>{
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(persona);
return this.http.post<Persona>('https://localhost:5001/api/Persona/AddPersona', JSON.stringify(persona), { headers: headers });
  }







  
}
