/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SayimHazirlaComponent } from './sayim-hazirla.component';

describe('SayimHazirlaComponent', () => {
  let component: SayimHazirlaComponent;
  let fixture: ComponentFixture<SayimHazirlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayimHazirlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayimHazirlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
