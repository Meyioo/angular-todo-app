import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  public readonly title = new BehaviorSubject<string>('');
  public readonly title$ = this.title.asObservable();

  private readonly router = inject(Router);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) =>
        this.title.next(this.getTitleFromRoute(event.urlAfterRedirects)),
      );
  }

  private getTitleFromRoute(url: string): string {
    if (url === '/') {
      return 'Offene Aufgaben';
    } else if (url === '/abgeschlossen') {
      return 'Abgeschlossene Aufgaben';
    } else {
      return 'Aufgabe anlegen';
    }
  }
}
