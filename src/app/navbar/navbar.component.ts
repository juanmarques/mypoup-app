import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() featureSelectedNav = new EventEmitter<string>();

  onSelectNav(feature: string){
    this.featureSelectedNav.emit(feature);
    
    console.log(feature);
  }

  constructor() { }

  ngOnInit(){
  }

}
