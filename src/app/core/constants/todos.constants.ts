import { ITodo } from '../model/todo.model';
import { PriorityLevel } from './priority.constants';

export const DefaultTodos: ITodo[] = [
	{
		id: 1,
		title: 'Einkaufen gehen',
		description: 'Milch, Eier, Brot und Gemüse kaufen',
		completed: false,
		selected: false,
		dueDate: new Date('2023-12-01'),
		createDate: new Date('2023-11-30'),
		priority: PriorityLevel.Medium
	},
	{
		id: 2,
		title: 'Bachelorarbeit schreiben',
		description: 'Kapitel über Svelte-Framework fertigstellen',
		completed: false,
		selected: false,
		dueDate: new Date('2023-12-02'),
		createDate: new Date('2023-11-30'),
		priority: PriorityLevel.High
	},
	{
		id: 3,
		title: 'Fitnessstudio besuchen',
		description: '1 Stunde Ausdauer und Krafttraining',
		completed: false,
		selected: false,
		dueDate: new Date('2023-12-03'),
		createDate: new Date('2023-11-29'),
		priority: PriorityLevel.Low
	},
	{
		id: 4,
		title: 'Einkaufen gehen',
		description: 'Lebensmittel und Haushaltswaren besorgen',
		completed: false,
		selected: false,
		dueDate: new Date('2023-12-04'),
		createDate: new Date('2023-11-28'),
		priority: PriorityLevel.Medium
	},
	{
		id: 5,
		title: 'Arzttermin wahrnehmen',
		description: 'Jährliche Gesundheitsuntersuchung',
		completed: false,
		selected: false,
		dueDate: new Date('2023-12-05'),
		createDate: new Date('2023-10-28'),
		priority: PriorityLevel.Medium
	},
	{
		id: 6,
		title: 'E-Mails bearbeiten',
		description: 'Alle wichtigen E-Mails durchgehen und beantworten',
		completed: false,
		selected: false,
		dueDate: new Date('2023-12-06'),
		createDate: new Date('2023-10-28'),
		priority: PriorityLevel.High
	},
	{
		id: 7,
		title: 'Projektbericht schreiben',
		description: 'Fortschrittsbericht für das aktuelle Projekt erstellen',
		completed: false,
		selected: false,
		dueDate: new Date('2023-12-07'),
		createDate: new Date('2023-10-28'),
		priority: PriorityLevel.High
	},
	{
		id: 8,
		title: 'Wohnung putzen',
		description: 'Staubsaugen und Oberflächen abwischen',
		completed: false,
		selected: false,
		dueDate: new Date('2023-12-08'),
		createDate: new Date('2023-10-28'),
		priority: PriorityLevel.Medium
	},
	{
		id: 9,
		title: 'Freunde treffen',
		description: 'Treffen zum Abendessen vereinbaren',
		completed: false,
		selected: false,
		dueDate: new Date('2023-12-09'),
		createDate: new Date('2023-10-28'),
		priority: PriorityLevel.Medium
	},
	{
		id: 10,
		title: 'Rechnung bezahlen',
		description: 'Telefon- und Internetrechnung begleichen',
		completed: false,
		selected: false,
		dueDate: new Date('2023-12-10'),
		createDate: new Date('2023-10-28'),
		priority: PriorityLevel.Medium
	},
	{
		id: 11,
		title: 'Buch lesen',
		description: 'Kapitel 4 des aktuellen Buches durchlesen',
		completed: false,
		selected: false,
		dueDate: new Date('2023-12-11'),
		createDate: new Date('2023-10-28'),
		priority: PriorityLevel.Medium
	},
	{
		id: 12,
		title: 'Joggen gehen',
		description: '30 Minuten joggen im Park',
		completed: false,
		selected: false,
		dueDate: new Date('2023-12-12'),
		createDate: new Date('2023-10-28'),
		priority: PriorityLevel.Medium
	},
	{
		id: 13,
		title: 'Familie anrufen',
		description: 'Kurzes Gespräch mit den Eltern führen',
		completed: false,
		selected: false,
		dueDate: new Date('2023-12-13'),
		createDate: new Date('2023-10-28'),
		priority: PriorityLevel.Medium
	}
];
