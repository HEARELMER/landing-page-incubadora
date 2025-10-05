import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfoqueComponent } from './enfoque.component';

describe('EnfoqueComponent', () => {
  let component: EnfoqueComponent;
  let fixture: ComponentFixture<EnfoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnfoqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
