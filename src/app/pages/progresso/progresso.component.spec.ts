import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressoComponent } from './progresso.component';

describe('ProgressoComponent', () => {
  let component: ProgressoComponent;
  let fixture: ComponentFixture<ProgressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
