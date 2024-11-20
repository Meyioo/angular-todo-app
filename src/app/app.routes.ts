import { Routes } from '@angular/router';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    data: { title: 'Offene Aufgaben' },
  },
  {
    path: 'abgeschlossen',
    component: TodosComponent,
    data: { title: 'Abgeschlossene Aufgaben' },
  },
  {
    path: 'todo-anlegen',
    component: TodoCreateComponent,
  },
];
