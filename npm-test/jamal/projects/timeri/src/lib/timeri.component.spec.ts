import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeriComponent } from './timeri.component';

describe('TimeriComponent', () => {
  let component: TimeriComponent;
  let fixture: ComponentFixture<TimeriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
