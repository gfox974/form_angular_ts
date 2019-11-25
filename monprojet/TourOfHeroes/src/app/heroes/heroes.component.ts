import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // import de la classe Hero
//import { HEROES } from '../mock-heroes'; // Import de la constante array d'objets Heroes
import { HeroService } from '../hero.service'; // Import du service HeroService

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  //heroes = HEROES; // On affecte heroes = HEROES ( l'array importée )
  heroes: Hero[]; // On affecte heroes comme etant les instances de Hero dans l'espace appli
  //selectedHero: Hero; // On affecte selectedHero en tant que Hero (la classe)

  constructor(private heroService: HeroService) { } // On injecte le HeroService en definissant un constructeur privé
//  constructor() { }

  //onSelect(hero: Hero): void { // Event trigger sur le on select (click) -> on set la proprieté selectedHero a la valeur de l'objet instancié du click (si l'objet selectionné a la classe hero)
  //  this.selectedHero = hero;
  //}
  //getHeroes(): void { // on declare la fonction pour recuperer les heroes de ce composant
  //  this.heroes = this.heroService.getHeroes();
  //}
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() { // Là, on dit au composant qu'a son init, il doit lancer sa fonction getheroes
    this.getHeroes();
  }
  
}