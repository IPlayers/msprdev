import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxJdrPage } from './jeux-jdr.page';

describe('JeuxJdrPage', () => {
  let component: JeuxJdrPage;
  let fixture: ComponentFixture<JeuxJdrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuxJdrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxJdrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
