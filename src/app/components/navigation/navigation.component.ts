import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TodoService } from '../../service/todo.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css'],
	standalone: true,
	imports: [CommonModule, RouterLink]
})
export class NavigationComponent {
	public readonly router = inject(Router);

	public readonly todoService = inject(TodoService);
}
