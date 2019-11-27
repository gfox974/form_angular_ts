import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.scss']
})
export class ConvertisseurComponent implements OnInit {
  input = this.fb.group({
    inValue: ['', Validators.required]
  });
  resultCel: number = 0;
  resultFar: number = 0;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmitCel() {
    console.log(this.input.value);
    if (this.input.status) {
      this.resultCel = (this.input.value.inValue * 9/5) + 32;
      console.log(this.resultCel);  
    }
  }

  onSubmitFar() {
    console.log(this.input.value);
    if (this.input.status) {
      this.resultFar = (this.input.value.inValue - 32) * 5/9;
      console.log(this.resultCel);  
    }
  }

}
