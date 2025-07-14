import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTechStockSectionComponent } from './clean-tech-stock-section.component';

describe('CleanTechStockSectionComponent', () => {
  let component: CleanTechStockSectionComponent;
  let fixture: ComponentFixture<CleanTechStockSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanTechStockSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanTechStockSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
