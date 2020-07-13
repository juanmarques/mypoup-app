import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './sign/sign.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule } from '@angular/forms';/* Forms  */
import { MatInputModule } from '@angular/material/input';/* Material */

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
