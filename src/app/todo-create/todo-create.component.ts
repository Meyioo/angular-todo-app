import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class TodoCreateComponent {
  private readonly todoService = inject(TodoService);

  public todoForm: FormGroup;
  fields = [
    { name: 'title', placeholder: 'Titel eingeben', type: 'text' },
    {
      name: 'description',
      placeholder: 'Beschreibung hinzufügen',
      type: 'text',
    },
  ];

  constructor(private readonly fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  public submit(): void {
    if (this.todoForm.valid) {
      this.todoService.addTodo(this.todoForm.value);
    }
  }
}
