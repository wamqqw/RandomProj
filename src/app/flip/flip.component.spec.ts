import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipComponent } from './flip.component';

describe('FlipComponent', () => {
  let component: FlipComponent;
  let fixture: ComponentFixture<FlipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlipComponent]
    });
    fixture = TestBed.createComponent(FlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
