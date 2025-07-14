import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTechIotSectionComponent } from './clean-tech-iot-section.component';

describe('CleanTechIotSectionComponent', () => {
  let component: CleanTechIotSectionComponent;
  let fixture: ComponentFixture<CleanTechIotSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanTechIotSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanTechIotSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
