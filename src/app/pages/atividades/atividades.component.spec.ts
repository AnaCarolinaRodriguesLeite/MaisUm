import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesComponent } from './atividades.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('AtividadesComponent', () => {
  let component: AtividadesComponent;
  let fixture: ComponentFixture<AtividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtividadesComponent, FormsModule, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
