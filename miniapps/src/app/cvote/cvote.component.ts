import { Component, OnInit } from '@angular/core';

import { Candidat } from './models/candidats';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cvote',
  templateUrl: './cvote.component.html',
  styleUrls: ['./cvote.component.scss']
})
export class CvoteComponent implements OnInit {
  candidat: string;
  listecandidats: Candidat[] = [
    {nom: "Kimmy", photo: "../../assets/images/dummy_1.jpg", votes: 0, percRes: 0},
    {nom: "Donnie", photo: "../../assets/images/dummy_2.jpg", votes: 0, percRes: 0},
    {nom: "Blanc", photo: "../../assets/images/blank.jpg", votes: 0, percRes: 0}
  ];

  voteForm = this.fb.group({
    nom: ['', Validators.required],
    photo: [''],
    votes: [''],
    percRes: ['']
  });

  totalvotes: number = 0;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
  }
  
  vote(idx: number) {
    console.log("debug input", idx);
    let voteTo = this.listecandidats[idx];
    voteTo.votes = voteTo.votes +1;
    this.totalvotes ++;
    voteTo.percRes = (100 * voteTo.votes) / this.totalvotes; // todo : actualiser tous les candidats au refresh
    //candidat.votes ++;
  }

  onSubmit(){

  }

}