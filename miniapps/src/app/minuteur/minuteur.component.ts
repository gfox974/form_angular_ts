import { Component, OnInit } from '@angular/core';

//cust
import { Minuteur } from './models/minuteur';

@Component({
  selector: 'app-minuteur',
  templateUrl: './minuteur.component.html',
  styleUrls: ['./minuteur.component.scss']
})
export class MinuteurComponent implements OnInit {
  minuteur: string;
  minuTestlist: Minuteur[] = [
    {libelle: "TEST_1", timelimit: 30, timeleft: 30, running: false},
    {libelle: "TEST_2", timelimit: 50, timeleft: 50, running: false}
  ];
  constructor() { }

  ngOnInit() {
  }

  tickBeat(idx) {
    let tickerMin = this.minuTestlist[idx];
    console.log("debug proc:",this[idx+'_tick']);
    console.log("debug tl:",tickerMin.timeleft);
     if (tickerMin.timeleft >= 1){
       tickerMin.timeleft = tickerMin.timeleft -1;
     } else {
       tickerMin.running = false;
       clearInterval(this[idx+'_tick']);
       alert(tickerMin.libelle + " est terminé");
     }
  }

  tickStart(idx: number) {
    console.log("debug:", idx);
    let tickerMin = this.minuTestlist[idx];
    console.log("debug:", tickerMin.libelle);
    if (!tickerMin.running){
      tickerMin.timeleft = tickerMin.timelimit;
      tickerMin.running = true;
      //this.tickBeat(idx);
      //this[idx+'_tick'] = setInterval("this.tickBeat(idx)",1000);  // a pas l'air de marcher l'idx tick
      this[idx+'_tick'] = setInterval(() => {
        this.tickBeat(idx); 
      }, 1000);
    } else {
      alert(tickerMin.libelle + " tourne deja");
    }
  }

  tickStop(idx: number){
    let tickerMin = this.minuTestlist[idx];
    if (tickerMin.running){
      tickerMin.running = false;
      clearInterval(this[idx+'_tick']);
    } else {
      alert(tickerMin.libelle + " est deja arreté");
    }
  }

  minDelete(idx: number){
      this.minuTestlist.splice(idx,1);
  }
  // form part
  addMin(){
    if (this.minuteur) {
      this.minuTestlist.push({libelle: this.minuteur, timelimit: 10, timeleft: 10, running: false});
      this.minuteur = "";
    }
  }

}
