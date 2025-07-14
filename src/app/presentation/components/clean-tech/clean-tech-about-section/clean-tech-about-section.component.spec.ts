import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTechAboutSectionComponent } from './clean-tech-about-section.component';

describe('CleanTechAboutSectionComponent', () => {
  let component: CleanTechAboutSectionComponent;
  let fixture: ComponentFixture<CleanTechAboutSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanTechAboutSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanTechAboutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
