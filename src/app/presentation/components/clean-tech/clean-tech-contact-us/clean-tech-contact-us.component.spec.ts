import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTechContactUsComponent } from './clean-tech-contact-us.component';

describe('CleanTechContactUsComponent', () => {
  let component: CleanTechContactUsComponent;
  let fixture: ComponentFixture<CleanTechContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanTechContactUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanTechContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
