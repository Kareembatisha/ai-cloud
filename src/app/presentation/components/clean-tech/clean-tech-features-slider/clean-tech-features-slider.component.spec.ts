import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTechFeaturesSliderComponent } from './clean-tech-features-slider.component';

describe('CleanTechFeaturesSliderComponent', () => {
  let component: CleanTechFeaturesSliderComponent;
  let fixture: ComponentFixture<CleanTechFeaturesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanTechFeaturesSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanTechFeaturesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
