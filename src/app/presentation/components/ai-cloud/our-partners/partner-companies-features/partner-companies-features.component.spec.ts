import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerCompaniesFeaturesComponent } from './partner-companies-features.component';

describe('PartnerCompaniesFeaturesComponent', () => {
  let component: PartnerCompaniesFeaturesComponent;
  let fixture: ComponentFixture<PartnerCompaniesFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerCompaniesFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerCompaniesFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
