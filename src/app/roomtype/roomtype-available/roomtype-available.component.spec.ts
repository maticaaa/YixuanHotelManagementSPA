import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomtypeAvailableComponent } from './roomtype-available.component';

describe('RoomtypeAvailableComponent', () => {
  let component: RoomtypeAvailableComponent;
  let fixture: ComponentFixture<RoomtypeAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomtypeAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomtypeAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
