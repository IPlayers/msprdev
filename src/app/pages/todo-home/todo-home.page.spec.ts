import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHomePage } from './todo-home.page';

describe('TodoHomePage', () => {
  let component: TodoHomePage;
  let fixture: ComponentFixture<TodoHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
