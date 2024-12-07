import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ITodo } from '../../core/model/todo.model';
import { TodoService } from '../../service/todo.service';
import { TodoItemPriorityComponent } from '../todo-item-priority/todo-item-priority.component';

@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.css'],
	standalone: true,
	imports: [CommonModule, TodoItemPriorityComponent]
})
export class TodoItemComponent {
	@Input() public todo: ITodo | null = null;

	private readonly todoService = inject(TodoService);

	public toggleTodo(): void {
		if (!this.todo!.completed) {
			this.todoService.selectTodo(this.todo!.id);
		}
	}
}
