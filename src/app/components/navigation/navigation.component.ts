import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TodoService } from '../../service/todo.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css'],
	standalone: true,
	imports: [CommonModule, RouterLink]
})
export class NavigationComponent implements OnInit {
	public readonly activatedRoute = inject(ActivatedRoute);
	public readonly router = inject(Router);

	public readonly todoService = inject(TodoService);

	ngOnInit(): void {
		this.activatedRoute.url.subscribe((url) => {
			console.log(url);
		});
	}
}
