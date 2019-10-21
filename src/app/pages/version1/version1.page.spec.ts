import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Version1Page } from './version1.page';

describe('Version1Page', () => {
  let component: Version1Page;
  let fixture: ComponentFixture<Version1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Version1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Version1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
