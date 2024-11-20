/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosOpenComponent } from './todos.component';

describe('TodosOpenComponent', () => {
  let component: TodosOpenComponent;
  let fixture: ComponentFixture<TodosOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosOpenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
