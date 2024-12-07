import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TodoService } from '../../service/todo.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css'],
	standalone: true,
	host: {
		class: 'sticky bottom-0 w-full z-50 border-gray-200 bottom-0 start-0 h-16 bg-white border-t'
	},
	imports: [CommonModule, RouterLink]
})
export class NavigationComponent {
	public readonly router = inject(Router);

	public readonly todoService = inject(TodoService);
}
