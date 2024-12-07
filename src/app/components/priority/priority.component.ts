import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Priorities, PriorityLevel } from '../../core/constants/priority.constants';

@Component({
	selector: 'app-priority',
	templateUrl: './priority.component.html',
	styleUrls: ['./priority.component.css'],
	standalone: true,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PriorityComponent),
			multi: true
		}
	]
})
export class PriorityComponent implements ControlValueAccessor {
	@Input() selectedPriority: PriorityLevel = PriorityLevel.Low;
	@Output() priorityChange = new EventEmitter<PriorityLevel>();

	priorities = Object.values(Priorities);

	private onChange: (value: PriorityLevel) => void = () => null;
	private onTouched: () => void = () => null;

	selectPriority(priority: PriorityLevel): void {
		this.selectedPriority = priority;
		this.priorityChange.emit(priority);
		this.onChange(priority);
		this.onTouched();
	}

	writeValue(priority: PriorityLevel): void {
		this.selectedPriority = priority;
	}

	registerOnChange(fn: (value: PriorityLevel) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {}
}
