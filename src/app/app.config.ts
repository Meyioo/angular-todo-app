import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { SearchService } from './service/search.service';
import { TodoService } from './service/todo.service';

export const appConfig: ApplicationConfig = {
	providers: [
		{ provide: TodoService },
		{ provide: SearchService },

		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideAnimations()
	]
};
