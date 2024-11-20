import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { combineLatestWith, map } from 'rxjs/operators';
import { SearchService } from '../../service/search.service';
import { Todo, TodoService } from '../../service/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
})
export class TodoListComponent {
  @Input() public completed: boolean = false;
  @Input() public showOpenTodos = true;

  public todos$: Observable<Todo[]>;

  private readonly todoService = inject(TodoService);
  private readonly searchService = inject(SearchService);

  constructor() {
    this.todos$ = this.todoService.todos$
      .pipe(combineLatestWith(this.searchService.search$))
      .pipe(
        map(([todos, search]) => {
          const filteredTodos = this.completed ? todos.completed : todos.open;
          return search.length > 0
            ? filteredTodos.filter(
                (todo) =>
                  todo.title.toLowerCase().includes(search.toLowerCase()) ||
                  todo.description.toLowerCase().includes(search.toLowerCase()),
              )
            : filteredTodos;
        }),
      );
  }
}
