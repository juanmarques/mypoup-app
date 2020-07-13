import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  loadOptionAccess = 'signIn';

  onSelectAccessOption(feature: string){
    // console.log('feature-BTN-----'+feature);
    this.loadOptionAccess = feature;
  }


  ngOnInit(){
  }
}