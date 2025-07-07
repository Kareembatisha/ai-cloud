import { Component } from '@angular/core';
import { ContactUsButtonComponent } from '../../../../shared/ai-cloud/contact-us-button/contact-us-button.component';

@Component({
  selector: 'app-hero-section',
  imports: [ContactUsButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {}
