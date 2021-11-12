import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakstronyComponent } from './brakstrony.component';

describe('BrakstronyComponent', () => {
  let component: BrakstronyComponent;
  let fixture: ComponentFixture<BrakstronyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrakstronyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrakstronyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
