import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsPageComponent } from './params-page.component';

describe('ParamsPageComponent', () => {
  let component: ParamsPageComponent;
  let fixture: ComponentFixture<ParamsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
