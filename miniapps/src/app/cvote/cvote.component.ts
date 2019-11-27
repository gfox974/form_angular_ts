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
    {nom: "Kimmy", photo: "../../assets/images/dummy_1.jpg", votes: 0},
    {nom: "Donnie", photo: "../../assets/images/dummy_2.jpg", votes: 0},
    {nom: "Blanc", photo: "../../assets/images/blank.jpg", votes: 0}
  ];

  voteForm = this.fb.group({
    nom: ['', Validators.required],
    photo: [''],
    votes: ['']
  });

  totalvotes: number = 0;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
  }
  
  onSubmit() {
    //console.log("debug input", candidat.nom);
    //let voteTo = this.listecandidats[idx];
    //voteTo.votes ++;
    this.totalvotes ++;
    //candidat.votes ++;
  }

}