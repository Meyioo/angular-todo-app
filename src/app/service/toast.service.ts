import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IToast {
	message: string;
	color: string;
	duration: number;
}

@Injectable({
	providedIn: 'root'
})
export class ToastService {
	private readonly toastSubject = new BehaviorSubject<IToast | null>(null);
	public readonly toast$ = this.toastSubject.asObservable();

	showToast(toast: IToast): void {
		this.toastSubject.next(toast);
	}
}
