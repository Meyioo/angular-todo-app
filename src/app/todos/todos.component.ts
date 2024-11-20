import { Component } from '@angular/core';
import { TodoListComponent } from '../components/todo-list/todo-list.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  standalone: true,
  imports: [TodoListComponent],
})
export class TodosComponent {}
