import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCloudLayoutComponent } from './ai-cloud-layout.component';

describe('AiCloudLayoutComponent', () => {
  let component: AiCloudLayoutComponent;
  let fixture: ComponentFixture<AiCloudLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCloudLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiCloudLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
