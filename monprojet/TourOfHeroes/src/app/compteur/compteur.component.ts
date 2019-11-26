import { Component, OnInit } from '@angular/core';
import { Compteur } from '../compteur';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent implements OnInit {
  dumCount = new Compteur();
  //nombre: number = 0;
  constructor() { }

  ngOnInit() {
  }
/* SIMPLE */
  //decremente() {
  //  this.nombre --;  
  //}

  //incremente() {
  //  this.nombre ++;
  //}

  //reset() {
  //  this.nombre = 0;
  //}

  //ajouter(n: number) {
  //  this.nombre = this.nombre + n;
  //}

/* TERNAIRE avec arg */
//add(op: string){
//  this.nombre = this.nombre + (op == 'inc' ?1: -1);
//}


}
