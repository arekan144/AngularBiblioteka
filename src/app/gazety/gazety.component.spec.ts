import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GazetyComponent } from './gazety.component';

describe('GazetyComponent', () => {
  let component: GazetyComponent;
  let fixture: ComponentFixture<GazetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GazetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GazetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
