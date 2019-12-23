import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVrPage } from './show-vr.page';

describe('ShowVrPage', () => {
  let component: ShowVrPage;
  let fixture: ComponentFixture<ShowVrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
