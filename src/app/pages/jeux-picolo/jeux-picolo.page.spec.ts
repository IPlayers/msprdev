import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxPicoloPage } from './jeux-picolo.page';

describe('JeuxPicoloPage', () => {
  let component: JeuxPicoloPage;
  let fixture: ComponentFixture<JeuxPicoloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuxPicoloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxPicoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
