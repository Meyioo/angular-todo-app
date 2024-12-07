import { Component, Input, OnInit } from '@angular/core';
import { IPriority, Priorities, PriorityLevel } from '../../core/constants/priority.constants';

@Component({
	selector: 'app-todo-item-priority',
	templateUrl: './todo-item-priority.component.html',
	styleUrls: ['./todo-item-priority.component.css'],
	standalone: true
})
export class TodoItemPriorityComponent implements OnInit {
	@Input() public priorityLevel: PriorityLevel | undefined = PriorityLevel.Low;

	public priority: IPriority = Priorities[PriorityLevel.Low];

	public ngOnInit(): void {
		this.priority = Priorities[this.priorityLevel!];
	}
}
