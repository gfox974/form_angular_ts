import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinuteurComponent } from './minuteur/minuteur.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { ImcComponent } from './imc/imc.component';
import { RpnComponent } from './rpn/rpn.component';
import { ChuckComponent } from './chuck/chuck.component';
import { CvoteComponent } from './cvote/cvote.component';


@NgModule({
  declarations: [
    AppComponent,
    MinuteurComponent,
    ConvertisseurComponent,
    ImcComponent,
    RpnComponent,
    ChuckComponent,
    CvoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
