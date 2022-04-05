
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls : ['./home.component.css']
})
export class HomeComponent {



  constructor(private http: HttpClient,private _route:Router,
    private activedroute: ActivatedRoute){
this.goTo = this.goTo.bind(this);
this.login = this.login.bind(this);
  }


  




  goTo(){
    this._route.navigate(['/Registrati']);
    }
  login(){
    this._route.navigate(['/Accedi']);
    }
}
