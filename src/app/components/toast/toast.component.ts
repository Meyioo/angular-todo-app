import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IToast, ToastService } from '../../service/toast.service';

@Component({
	selector: 'app-toast',
	templateUrl: './toast.component.html',
	styleUrls: ['./toast.component.css'],
	animations: [
		trigger('toastAnimation', [
			state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
			state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
			transition('hidden => visible', animate('300ms ease-out')),
			transition('visible => hidden', animate('300ms ease-in'))
		])
	],
	standalone: true,
	imports: [CommonModule]
})
export class ToastComponent {
  
	public readonly toastService = inject(ToastService);
	isVisible = false;
	toast: IToast | null = null;

	toastState: 'hidden' | 'visible' = 'hidden';

	constructor() {
		this.toastService.toast$.subscribe((toast) => {
			if (toast) {
				this.toast = toast;
				this.showToast();
			}
		});
	}

	showToast(): void {
		this.toastState = 'visible';
		this.isVisible = true;

		setTimeout(() => {
			this.hideToast();
		}, this.toast!.duration);
	}

	hideToast(): void {
		this.toastState = 'hidden';
		setTimeout(() => {
			this.isVisible = false;
		}, 300);
	}
}
