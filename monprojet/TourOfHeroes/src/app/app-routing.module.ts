import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { ContactComponent }   from './contact/contact.component';
import { CompteurComponent }   from './compteur/compteur.component';

// Ici on gere les redirect de route, et par defaut -> go dash
const routes: Routes = [
{ 
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},  
{ 
  path: 'heroes',
  component: HeroesComponent
},
{ 
  path: 'dashboard',
  component: DashboardComponent
},
{ 
  path: 'detail/:id', // On utilise un placeholder comme en php, où :id corresponds a une valeur
  component: HeroDetailComponent
},
{ 
  path: 'contact',
  component: ContactComponent
},
{ 
  path: 'compteur',
  component: CompteurComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }