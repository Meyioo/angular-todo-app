import { Component, Input } from '@angular/core';
import { ButtonLinkComponent } from '../button-link/button-link.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [SearchbarComponent, ButtonLinkComponent],
})
export class HeaderComponent {
  @Input() public showSearchbar = false;
  @Input() public title = '';
}
