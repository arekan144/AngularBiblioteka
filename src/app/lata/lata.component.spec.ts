import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LataComponent } from './lata.component';

describe('LataComponent', () => {
  let component: LataComponent;
  let fixture: ComponentFixture<LataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
