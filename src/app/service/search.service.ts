import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly searchSubject = new BehaviorSubject<string>('');

  get search$(): Observable<string> {
    return this.searchSubject.asObservable();
  }

  setSearch(value: string): void {
    this.searchSubject.next(value);
  }
}
