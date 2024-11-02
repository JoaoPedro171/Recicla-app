import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarregarPage } from './carregar.page';

describe('CarregarPage', () => {
  let component: CarregarPage;
  let fixture: ComponentFixture<CarregarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
