import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  selected: boolean;
  deadline?: Date;
}

const initialTodos: Todo[] = [
  {
    id: 1,
    title: 'Einkaufen gehen',
    description: 'Milch, Eier, Brot und Gemüse kaufen',
    completed: false,
    selected: false,
  },
  {
    id: 2,
    title: 'Bachelorarbeit schreiben',
    description: 'Kapitel über Svelte-Framework fertigstellen',
    completed: false,
    selected: false,
  },
  {
    id: 3,

    title: 'Fitnessstudio besuchen',
    description: '1 Stunde Ausdauer und Krafttraining',
    completed: false,
    selected: false,
  },

  {
    id: 4,
    title: 'Einkaufen gehen',
    description: 'Lebensmittel und Haushaltswaren besorgen',
    completed: false,
    selected: false,
  },
  {
    id: 5,
    title: 'Arzttermin wahrnehmen',
    description: 'Jährliche Gesundheitsuntersuchung',
    completed: false,
    selected: false,
  },
  {
    id: 6,
    title: 'E-Mails bearbeiten',
    description: 'Alle wichtigen E-Mails durchgehen und beantworten',
    completed: false,
    selected: false,
  },
  {
    id: 7,
    title: 'Projektbericht schreiben',
    description: 'Fortschrittsbericht für das aktuelle Projekt erstellen',
    completed: false,
    selected: false,
  },
  {
    id: 8,
    title: 'Wohnung putzen',
    description: 'Staubsaugen und Oberflächen abwischen',
    completed: false,
    selected: false,
  },
  {
    id: 9,
    title: 'Freunde treffen',
    description: 'Treffen zum Abendessen vereinbaren',
    completed: false,
    selected: false,
  },
  {
    id: 10,
    title: 'Rechnung bezahlen',
    description: 'Telefon- und Internetrechnung begleichen',
    completed: false,
    selected: false,
  },
  {
    id: 11,
    title: 'Buch lesen',
    description: 'Kapitel 4 des aktuellen Buches durchlesen',
    completed: false,
    selected: false,
  },
  {
    id: 12,
    title: 'Joggen gehen',
    description: '30 Minuten joggen im Park',
    completed: false,
    selected: false,
  },
  {
    id: 13,
    title: 'Familie anrufen',
    description: 'Kurzes Gespräch mit den Eltern führen',
    completed: false,
    selected: false,
  },
];

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly localStorageKey = 'todos';
  private readonly todosSubject: BehaviorSubject<Todo[]>;

  constructor() {
    const savedTodos = this.loadTodosFromLocalStorage();
    this.todosSubject = new BehaviorSubject<Todo[]>(savedTodos);
  }

  get todos$(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  get getSelectedTodos$(): Observable<Todo[]> {
    return this.todosSubject
      .asObservable()
      .pipe(map((todos) => todos.filter((todo) => todo.selected)));
  }

  addTodo(todo: Todo): void {
    const todos = this.todosSubject.getValue();
    const updatedTodos = [
      ...todos,
      {
        ...todo,
        id: this.generateId(todos),
      },
    ];
    this.updateTodos(updatedTodos);
  }

  public selectTodo(id: number): void {
    const todos = this.todosSubject
      .getValue()
      .map((todo) =>
        todo.id === id ? { ...todo, selected: !todo.selected } : todo,
      );
    this.updateTodos(todos);
  }

  public completeSelectedTodos(): void {
    const todos = this.todosSubject
      .getValue()
      .map((todo) =>
        todo.selected ? { ...todo, completed: true, selected: false } : todo,
      );
    this.updateTodos(todos);
  }

  private loadTodosFromLocalStorage(): Todo[] {
    const todos = localStorage.getItem(this.localStorageKey);
    if (!todos) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(initialTodos));
    }
    return todos ? JSON.parse(todos) : initialTodos;
  }

  private updateTodos(todos: Todo[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
    this.todosSubject.next(todos);
  }

  private generateId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
  }
}
