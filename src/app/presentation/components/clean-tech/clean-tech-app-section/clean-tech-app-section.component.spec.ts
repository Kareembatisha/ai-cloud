import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTechAppSectionComponent } from './clean-tech-app-section.component';

describe('CleanTechAppSectionComponent', () => {
  let component: CleanTechAppSectionComponent;
  let fixture: ComponentFixture<CleanTechAppSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanTechAppSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanTechAppSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
