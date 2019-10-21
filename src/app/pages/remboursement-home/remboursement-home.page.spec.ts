import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemboursementHomePage } from './remboursement-home.page';

describe('RemboursementHomePage', () => {
  let component: RemboursementHomePage;
  let fixture: ComponentFixture<RemboursementHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemboursementHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemboursementHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
