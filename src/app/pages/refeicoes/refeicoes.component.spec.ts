import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefeicoesComponent } from './refeicoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RefeicoesComponent', () => {
  let component: RefeicoesComponent;
  let fixture: ComponentFixture<RefeicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefeicoesComponent],
      imports: [ReactiveFormsModule,
        FormsModule
      ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefeicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
