import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // import de la classe Hero
import { HEROES } from '../mock-heroes'; // Import de la constante array d'objets Heroes

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES; // On affecte heroes = HEROES ( l'array importée )
  selectedHero: Hero; // On affecte selectedHero en tant que Hero (la classe)

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void { // Event trigger sur le on select (click) -> on set la proprieté selectedHero a la valeur de l'objet instancié du click (si l'objet selectionné a la classe hero)
    this.selectedHero = hero;
  }
}