import { Component } from '@angular/core';
import { ContactUsButtonComponent } from '../../../../shared/ai-cloud/contact-us-button/contact-us-button.component';
import { ScrollTriggerDirective } from '../../../../../core/directives/scroll-trigger.directive';

@Component({
  selector: 'clean-tech-hero-section',
  imports: [ContactUsButtonComponent,ScrollTriggerDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {}
