import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../../service/search.service';
import { TodoService } from '../../service/todo.service';

@Component({
	selector: 'app-searchbar',
	templateUrl: './searchbar.component.html',
	styleUrls: ['./searchbar.component.css'],
	standalone: true,
	imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SearchbarComponent {
	public searchForm: FormGroup;
	public isDropdownOpen = false;

	private readonly searchService = inject(SearchService);
	public readonly todoService = inject(TodoService);

	constructor(private readonly fb: FormBuilder) {
		this.searchForm = this.fb.group({
			searchValue: ['']
		});

		this.searchForm.valueChanges.subscribe((value) =>
			this.searchService.setSearch(value.searchValue)
		);
	}
}
