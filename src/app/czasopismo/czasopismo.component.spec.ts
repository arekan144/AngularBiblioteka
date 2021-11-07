import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzasopismoComponent } from './czasopismo.component';

describe('CzasopismoComponent', () => {
  let component: CzasopismoComponent;
  let fixture: ComponentFixture<CzasopismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CzasopismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CzasopismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
