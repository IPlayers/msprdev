import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxHomePage } from './jeux-home.page';

describe('JeuxHomePage', () => {
  let component: JeuxHomePage;
  let fixture: ComponentFixture<JeuxHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuxHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
