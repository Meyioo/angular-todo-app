import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class SearchbarComponent {
  public searchForm: FormGroup;

  private readonly searchService = inject(SearchService);

  constructor(private readonly fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchValue: [''],
    });

    this.searchForm.valueChanges.subscribe((value) =>
      this.searchService.setSearch(value.searchValue),
    );
  }
}
