import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DefaultTodos } from '../core/constants/todos.constants';
import { ITodo } from '../core/model/todo.model';

@Injectable({
	providedIn: 'root'
})
export class TodoService {
	private readonly localStorageKey = 'todos';
	private readonly todosSubject = new BehaviorSubject<ITodo[]>(DefaultTodos);
	private readonly router = inject(Router);

	private ascSelectionOrder = true;
	private ascDueDateOrder = true;
	private ascCreateDateOrder = true;
	private ascPriorityOrder = true;

	constructor() {
		this.todosSubject.next(this.loadTodosFromLocalStorage());
	}

	get todos$(): Observable<ITodo[]> {
		return this.todosSubject.asObservable();
	}
	get hasNoSelectedTodos$(): Observable<boolean> {
		return this.todosSubject
			.asObservable()
			.pipe(map((todos) => todos.every((todo) => !todo.selected)));
	}

	public addTodo(todo: ITodo): void {
		const todos = this.todosSubject.getValue();
		const updatedTodos: ITodo[] = [
			...todos,
			{
				...todo,
				completed: false,
				selected: false,
				id: this.generateId(todos)
			}
		];
		this.updateTodos(updatedTodos);
		this.router.navigate(['/']);
	}

	public selectTodo(id: number): void {
		const todos = this.todosSubject
			.getValue()
			.map((todo) => (todo.id === id ? { ...todo, selected: !todo.selected } : todo));
		this.updateTodos(todos);
	}

	public completeSelectedTodos(): void {
		const todos = this.todosSubject
			.getValue()
			.map((todo) => (todo.selected ? { ...todo, completed: true, selected: false } : todo));
		this.updateTodos(todos);
	}

	public getSelectedCount(): number {
		return this.todosSubject.getValue().filter((todo) => todo.selected).length;
	}

	sortBySelection() {
		const todos = this.todosSubject.getValue();
		todos.sort((a, b) =>
			this.ascSelectionOrder
				? Number(a.selected) - Number(b.selected)
				: Number(b.selected) - Number(a.selected)
		);
		this.ascSelectionOrder = !this.ascSelectionOrder;
		this.updateTodos(todos);
	}

	sortByCreateDate() {
		const todos = this.todosSubject.getValue();
		todos.sort((a, b) =>
			this.ascCreateDateOrder
				? new Date(a.createDate).getTime() - new Date(b.createDate).getTime()
				: new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
		);
		this.ascCreateDateOrder = !this.ascCreateDateOrder;
		this.updateTodos(todos);
	}

	sortByDueDate() {
		const todos = this.todosSubject.getValue();
		todos.sort((a, b) =>
			this.ascDueDateOrder
				? new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
				: new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
		);
		this.ascDueDateOrder = !this.ascDueDateOrder;
		this.updateTodos(todos);
	}

	sortByPriority() {
		const priorityOrder = ['low', 'medium', 'high'];
		const todos = this.todosSubject.getValue();
		todos.sort((a, b) =>
			this.ascPriorityOrder
				? priorityOrder.indexOf(a.priorityLevel) - priorityOrder.indexOf(b.priorityLevel)
				: priorityOrder.indexOf(b.priorityLevel) - priorityOrder.indexOf(a.priorityLevel)
		);
		this.ascPriorityOrder = !this.ascPriorityOrder;
		this.updateTodos(todos);
	}

	private loadTodosFromLocalStorage(): ITodo[] {
		const todos = localStorage.getItem(this.localStorageKey);
		if (!todos) {
			localStorage.setItem(this.localStorageKey, JSON.stringify(DefaultTodos));
		}
		return todos ? JSON.parse(todos) : DefaultTodos;
	}

	private updateTodos(todos: ITodo[]): void {
		localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
		this.todosSubject.next(todos);
	}

	private generateId(todos: ITodo[]): number {
		return todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
	}
}
