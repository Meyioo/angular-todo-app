import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators
} from '@angular/forms';
import { PriorityComponent } from '../components/priority/priority.component';
import { TodoService } from '../service/todo.service';

@Component({
	selector: 'app-todo-create',
	templateUrl: './todo-create.component.html',
	styleUrls: ['./todo-create.component.css'],
	standalone: true,
	host: { class: 'grow' },
	imports: [CommonModule, FormsModule, ReactiveFormsModule, PriorityComponent]
})
export class TodoCreateComponent {
	private readonly todoService = inject(TodoService);

	public todoForm: FormGroup;

	constructor(private readonly fb: FormBuilder) {
		this.todoForm = this.fb.group({
			title: ['', Validators.required],
			description: ['', Validators.required],
			dueDate: ['', Validators.required],
			priorityLevel: ['', Validators.required]
		});
	}

	public submit(): void {
		if (this.todoForm.valid) {
			this.todoService.addTodo(this.todoForm.value);
		}
	}
}
