import { Component, inject, Input } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { SearchbarComponent } from '../searchbar/searchbar.component';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	host: {
		class: 'sticky top-0 border-b border-gray-200 bg-gray-50 z-50 border-gray-200 bg-gray-50'
	},
	standalone: true,
	imports: [SearchbarComponent]
})
export class HeaderComponent {
	@Input() public showSearchbar = false;
	@Input() public showCompleteBtn = false;
	@Input() public title = '';

	public readonly todoService = inject(TodoService);
}
