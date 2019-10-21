import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxJdrHomePage } from './jeux-jdr-home.page';

describe('JeuxJdrHomePage', () => {
  let component: JeuxJdrHomePage;
  let fixture: ComponentFixture<JeuxJdrHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuxJdrHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxJdrHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
