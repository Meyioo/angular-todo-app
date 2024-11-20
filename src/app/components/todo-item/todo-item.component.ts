import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Todo, TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TodoItemComponent {
  @Input() public todo: Todo | null = null;

  private readonly todoService = inject(TodoService);

  public toggleTodo(): void {
    this.todoService.selectTodo(this.todo!.id);
  }
}
