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
  todo: Todo; // 1 todo = une instance de todo
  todolist: Todo[] = [ // todolist = liste d'instances todo
    { libelle: "Test", isDone: false },
    { libelle: "Test2", isDone: true }
  ];

  toggleTodo(todo: Todo): void {
    todo.isDone = !todo.isDone;
  }
}
