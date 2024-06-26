import { Component } from '@angular/core';
import { Todo } from '../../Todo';

import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";  // Import CommonModule


@Component({
    selector: 'app-todo',
    standalone: true,
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css',
    imports: [
        CommonModule,
        TodoItemComponent
    ]
})
export class TodoComponent {

  todo: Todo[];

  constructor() {
    this.todo = [
      {
        sno: 1,
        title: 'Learn Angular1',
        description: 'Learn Angular',
        active: true
      },
      {
        sno: 2,
        title: 'Learn Angular2',
        description: 'Learn Angular',
        active: true
      },
      {
        sno: 3,
        title: 'Learn Angular3',
        description: 'Learn Angular',
        active: true

      }
    ]
  }
}
