import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCzasopismComponent } from './lista-czasopism.component';

describe('ListaCzasopismComponent', () => {
  let component: ListaCzasopismComponent;
  let fixture: ComponentFixture<ListaCzasopismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCzasopismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCzasopismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
