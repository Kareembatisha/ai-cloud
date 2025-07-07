import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTechLayoutComponent } from './clean-tech-layout.component';

describe('CleanTechLayoutComponent', () => {
  let component: CleanTechLayoutComponent;
  let fixture: ComponentFixture<CleanTechLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanTechLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanTechLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
