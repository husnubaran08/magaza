/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SayimComponent } from './sayim.component';

describe('SayimComponent', () => {
  let component: SayimComponent;
  let fixture: ComponentFixture<SayimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
