import { PriorityLevel } from '../constants/priority.constants';

export interface ITodo {
	id: number;
	createDate: Date;
	title: string;
	description: string;
	completed: boolean;
	selected: boolean;
	dueDate: Date;
	priority: PriorityLevel;
}
