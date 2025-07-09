import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTechServiceComponent } from './clean-tech-service.component';

describe('CleanTechServiceComponent', () => {
  let component: CleanTechServiceComponent;
  let fixture: ComponentFixture<CleanTechServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanTechServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanTechServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
