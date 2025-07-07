import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerHeroComponent } from './partner-hero.component';

describe('PartnerHeroComponent', () => {
  let component: PartnerHeroComponent;
  let fixture: ComponentFixture<PartnerHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
