import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinuteurComponent }   from './minuteur/minuteur.component';
import { ConvertisseurComponent }   from './convertisseur/convertisseur.component';
import { ImcComponent }   from './imc/imc.component';
import { RpnComponent }   from './rpn/rpn.component';
import { ChuckComponent }   from './chuck/chuck.component';
import { CvoteComponent }   from './cvote/cvote.component';


const routes: Routes = [
  { 
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },  
  { 
    path: 'minuteur',
    component: MinuteurComponent
  },
  { 
    path: 'convertisseur',
    component: ConvertisseurComponent
  },
  { 
    path: 'imc',
    component: ImcComponent
  },
  { 
    path: 'rpn',
    component: RpnComponent
  },
  { 
    path: 'chuck',
    component: ChuckComponent
  },
  { 
    path: 'cvote',
    component: CvoteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
