import { Component } from '@angular/core';
import { ContactUsButtonComponent } from '../../../shared/ai-cloud/contact-us-button/contact-us-button.component';
import { ScrollTriggerDirective } from '../../../../core/directives/scroll-trigger.directive';

@Component({
  selector: 'app-clean-tech-about-section',
  imports: [ContactUsButtonComponent, ScrollTriggerDirective],
  templateUrl: './clean-tech-about-section.component.html',
  styleUrl: './clean-tech-about-section.component.scss',
})
export class CleanTechAboutSectionComponent {}
