import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarServerComponent } from './car-server.component';

describe('CarServerComponent', () => {
  let component: CarServerComponent;
  let fixture: ComponentFixture<CarServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
