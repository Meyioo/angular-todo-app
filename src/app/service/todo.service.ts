import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  title: string;
  description: string;
  completed: boolean;
  selected: boolean;
  deadline?: Date;
}

export class TodoStore {
  open: Todo[] = [];
  completed: Todo[] = [];
}

const initialTodos: TodoStore = {
  open: [
    {
      title: 'Einkaufen gehen',
      description: 'Milch, Eier, Brot und Gemüse kaufen',
      completed: false,
      selected: false,
    },
    {
      title: 'Bachelorarbeit schreiben',
      description: 'Kapitel über Svelte-Framework fertigstellen',
      completed: false,
      selected: false,
    },
    {
      title: 'Fitnessstudio besuchen',
      description: '1 Stunde Ausdauer und Krafttraining',
      completed: false,
      selected: false,
    },

    {
      title: 'Einkaufen gehen',
      description: 'Lebensmittel und Haushaltswaren besorgen',
      completed: false,
      selected: false,
    },
    {
      title: 'Arzttermin wahrnehmen',
      description: 'Jährliche Gesundheitsuntersuchung',
      completed: false,
      selected: false,
    },
    {
      title: 'E-Mails bearbeiten',
      description: 'Alle wichtigen E-Mails durchgehen und beantworten',
      completed: false,
      selected: false,
    },
    {
      title: 'Projektbericht schreiben',
      description: 'Fortschrittsbericht für das aktuelle Projekt erstellen',
      completed: false,
      selected: false,
    },
    {
      title: 'Wohnung putzen',
      description: 'Staubsaugen und Oberflächen abwischen',
      completed: false,
      selected: false,
    },
    {
      title: 'Freunde treffen',
      description: 'Treffen zum Abendessen vereinbaren',
      completed: false,
      selected: false,
    },
    {
      title: 'Rechnung bezahlen',
      description: 'Telefon- und Internetrechnung begleichen',
      completed: false,
      selected: false,
    },
    {
      title: 'Buch lesen',
      description: 'Kapitel 4 des aktuellen Buches durchlesen',
      completed: false,
      selected: false,
    },
    {
      title: 'Joggen gehen',
      description: '30 Minuten joggen im Park',
      completed: false,
      selected: false,
    },
    {
      title: 'Familie anrufen',
      description: 'Kurzes Gespräch mit den Eltern führen',
      completed: false,
      selected: false,
    },
  ],
  completed: [],
};

@Injectable({
  providedIn: 'root',
})
export class TodoService implements OnDestroy {
  private readonly localStorageKey = 'todos';
  private readonly todosSubject: BehaviorSubject<TodoStore>;

  constructor() {
    const storedTodos = localStorage.getItem(this.localStorageKey);
    const todos = storedTodos ? JSON.parse(storedTodos) : initialTodos;
    this.todosSubject = new BehaviorSubject<TodoStore>(todos);

    this.todosSubject.subscribe((todos) =>
      localStorage.setItem(this.localStorageKey, JSON.stringify(todos)),
    );
  }

  get todos$() {
    return this.todosSubject.asObservable();
  }

  public addTodo(todo: Todo): void {
    const currentTodos = this.todosSubject.value;
    currentTodos.open.push(todo);
    this.todosSubject.next(currentTodos);
  }

  public ngOnDestroy(): void {
    this.todosSubject.complete();
    this.todosSubject.unsubscribe();
  }
}
