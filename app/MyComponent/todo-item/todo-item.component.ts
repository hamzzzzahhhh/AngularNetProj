import { Component, Input } from '@angular/core';
import { Todo } from '../../Todo';
import { Console } from 'console';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input() todo: Todo = {
    sno: 0,
    title: '',
    description: '',
    active: false
  };

  constructor() {
  }

  onClick() {
    console.log("A button has been deleted");
  }

}
