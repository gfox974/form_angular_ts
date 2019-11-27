import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})
export class ImcComponent implements OnInit {
  input = this.fb.group({
    taille: ['', Validators.required],
    poids: ['', Validators.required]
  });
  result: number = 0;
  eval: string = "";
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.input.value);
    if (this.input.status) {
      this.result = this.input.value.poids/(this.input.value.taille/100*this.input.value.taille/100);
      console.log(this.result);
      if(this.result < 40 && this.result >= 35) {
        this.eval = "Obésité severe";
      }
      else if(this.result < 35 && this.result >= 30) {
        this.eval = "Obésité moderée";
      }
      else if(this.result < 30 && this.result >= 25) {
        this.eval = "Surpoids";
      }
      else {
        this.eval = "Corpulence normale";
      }
    }
  }

}
