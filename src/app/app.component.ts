import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TitleService } from './service/title.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	standalone: true,
	imports: [CommonModule, RouterOutlet, NavigationComponent, HeaderComponent]
})
export class AppComponent implements OnInit {
	public showSearch = true;

	public readonly titleService = inject(TitleService);

	public ngOnInit(): void {
		initFlowbite();
	}
}
