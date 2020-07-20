import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  leadAccessNav = 'login';

  onAccessNav(feature: string){
    this.leadAccessNav = feature;
  }

  constructor() { }

  ngOnInit(){
  }

}
