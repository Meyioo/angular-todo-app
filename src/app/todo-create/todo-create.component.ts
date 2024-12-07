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
import { PriorityLevel } from '../core/constants/priority.constants';
import { TodoService } from '../service/todo.service';

@Component({
	selector: 'app-todo-create',
	templateUrl: './todo-create.component.html',
	styleUrls: ['./todo-create.component.css'],
	standalone: true,
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

	onPriorityChange($event: PriorityLevel) {
		this.todoForm.get('priority')?.setValue($event);
	}

	public submit(): void {
		if (this.todoForm.valid) {
			this.todoService.addTodo(this.todoForm.value);
		}
	}
}
