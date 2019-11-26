import { Component } from '@angular/core';
import { Todo } from './models/todo';
//import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ma todo list';
  todo: string; // 1 todo = une chaine qui corresponds a la desc de tache
  todolist: Todo[] = [] // todolist = liste d'instances todo
  /*  { libelle: "Test", isDone: false },
    { libelle: "Test2", isDone: true }
  ]; */

  toggleTodo(todo: Todo): void {
    todo.isDone = !todo.isDone;
  }

  addTodo(): void {
    // ajoute l'element todo à la liste de todo
    if (this.todo) { // si true, donc existant
      this.todolist.push({libelle: this.todo, isDone: false});
      this.todo = ""; // on reset le champ d'input
    }
  }

  deleteTodo(i: number) {
    this.todolist.splice(i,1); // là on vire donc à partir de l'index i sur un indice, donc uniquement i
  }

/*  // filtrage
  todolistFiltre = this.todolist;
// My vers. , working
  displayTodo(s: string): object {
    switch(s) {
      case 'pending':
          this.todolistFiltre = this.todolist.filter(todo => !todo.isDone);
      break;
      case 'done':
          this.todolistFiltre = this.todolist.filter(todo => todo.isDone);
      break;
      default:
          this.todolistFiltre = this.todolist;
      break;
    }
    return this.todolistFiltre;
  }
   */
  // Version off
  todolistFiltre: Todo[] = this.todolist;
  
  filterAll(){
    this.todolistFiltre = this.todolist;
  }

  filterCompleted(){
    this.todolistFiltre = this.todolist.filter(todo => todo.isDone);
  }

  filterActives(){
    this.todolistFiltre = this.todolist.filter(todo => todo.isDone == false);
  }
}