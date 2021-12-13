/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaporComponent } from './rapor.component';

describe('RaporComponent', () => {
  let component: RaporComponent;
  let fixture: ComponentFixture<RaporComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaporComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
