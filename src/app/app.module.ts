import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';/* Forms  */
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


import { MainComponent } from './main/main.component';
import { AccessComponent } from './access/access.component';
import { LoginComponent } from './access/login/login.component';
import { JoinnowComponent } from './access/joinnow/joinnow.component';
import { NavaccessComponent } from './access/navaccess/navaccess.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    AccessComponent,
    LoginComponent,
    JoinnowComponent,
    NavaccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
