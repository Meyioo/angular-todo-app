import { Component, inject, Input } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { SearchbarComponent } from '../searchbar/searchbar.component';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],

	standalone: true,
	imports: [SearchbarComponent]
})
export class HeaderComponent {
	@Input() public showSearchbar = false;
	@Input() public showCompleteBtn = false;
	@Input() public title = '';

	public readonly todoService = inject(TodoService);
}
