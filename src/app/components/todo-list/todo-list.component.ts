import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo } from '../../core/model/todo.model';
import { SearchService } from '../../service/search.service';
import { TodoService } from '../../service/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css'],
	standalone: true,
	imports: [CommonModule, TodoItemComponent]
})
export class TodoListComponent {
	@Input() public showOpenTodos = true;

	private readonly todoService = inject(TodoService);
	private readonly searchService = inject(SearchService);

	public todos$: Observable<ITodo[]> = combineLatest([
		this.todoService.todos$,
		this.searchService.search$
	]).pipe(
		map(([todos, searchTerm]) => {
			return todos
				.filter((todo: ITodo) => todo.completed === this.showOpenTodos)
				.filter((todo: ITodo) =>
					searchTerm.length > 0
						? todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
							todo.description.toLowerCase().includes(searchTerm.toLowerCase())
						: true
				);
		})
	);
}
