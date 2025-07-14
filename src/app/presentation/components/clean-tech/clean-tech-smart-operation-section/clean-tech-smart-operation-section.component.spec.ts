import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTechSmartOperationSectionComponent } from './clean-tech-smart-operation-section.component';

describe('CleanTechSmartOperationSectionComponent', () => {
  let component: CleanTechSmartOperationSectionComponent;
  let fixture: ComponentFixture<CleanTechSmartOperationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanTechSmartOperationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanTechSmartOperationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
