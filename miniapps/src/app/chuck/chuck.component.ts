import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { ChuckpollerService } from './chuckpoller.service';
import { ChuckFact } from './models/chuckfact';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.scss']
})
export class ChuckComponent implements OnInit {
  data: Observable<ChuckFact[]>;
  fact: string = "";

  constructor(private chuckPoller: ChuckpollerService) { }
// foire a la maison, warn : fail a la maison, diff de libs ?
  ngOnInit() {
    /* this.chuckPoller.getFacts().subscribe((data: ChuckFact[])=>{
      console.log("debug :", data.value);
      this.fact = data.value;
    }) */ 
  }

  getFacts() {
    /* this.chuckPoller.getFacts().subscribe((data: ChuckFact[])=>{
      this.fact = data.value;
    }) */
  }

}
