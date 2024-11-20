import { Routes } from '@angular/router';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: 'abgeschlossen',
    component: TodosComponent,
  },
  {
    path: 'todo-anlegen',
    component: TodoCreateComponent,
  },
];
