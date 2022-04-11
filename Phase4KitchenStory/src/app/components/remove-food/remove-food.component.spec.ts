import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFoodComponent } from './remove-food.component';

describe('RemoveFoodComponent', () => {
  let component: RemoveFoodComponent;
  let fixture: ComponentFixture<RemoveFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
