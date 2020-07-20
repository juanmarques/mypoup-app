import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navaccess',
  templateUrl: './navaccess.component.html',
  styleUrls: ['./navaccess.component.css']
})
export class NavaccessComponent implements OnInit {

  @Output() featureSelectedAccess = new EventEmitter<string>();

  onSelectAccess(feature: string){
    this.featureSelectedAccess.emit(feature);
    
    console.log(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}
