import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClockComponent } from './register-clock.component';

describe('RegisterClockComponent', () => {
  let component: RegisterClockComponent;
  let fixture: ComponentFixture<RegisterClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
