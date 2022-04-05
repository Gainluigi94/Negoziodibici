import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

constructor(private _route :Router,private _activateroute: ActivatedRoute){
  this.goToLink = this.goToLink.bind(this);
}
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

goToLink(){
  this._route.navigate(['']);
}




}
