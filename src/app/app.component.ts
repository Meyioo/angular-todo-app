import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToastComponent } from './components/toast/toast.component';
import { TitleService } from './service/title.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	standalone: true,
	imports: [CommonModule, RouterOutlet, NavigationComponent, HeaderComponent, ToastComponent]
})
export class AppComponent {
	public showSearch = true;

	public readonly titleService = inject(TitleService);
}
