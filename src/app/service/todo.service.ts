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
