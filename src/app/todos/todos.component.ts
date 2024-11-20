import { Component, inject } from '@angular/core';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { TitleService } from '../service/title.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  standalone: true,
  imports: [TodoListComponent],
})
export class TodosComponent {
  public showOpenTodos = true;

  private readonly titleService = inject(TitleService);

  constructor() {
    this.titleService.title$.subscribe(
      (title) => (this.showOpenTodos = title === 'Offene Aufgaben'),
    );
  }
}
