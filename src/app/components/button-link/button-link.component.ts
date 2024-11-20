import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.css'],
  standalone: true,
})
export class ButtonLinkComponent {
  @Input() public href: string = '';
  @Input() public label: string = '';
}
