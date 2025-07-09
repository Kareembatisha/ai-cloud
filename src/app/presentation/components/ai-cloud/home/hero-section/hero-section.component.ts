import { Component } from '@angular/core';
import { ContactUsButtonComponent } from '../../../../shared/ai-cloud/contact-us-button/contact-us-button.component';
import { ScrollTriggerDirective } from '../../../../../core/directives/scroll-trigger.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  imports: [ContactUsButtonComponent, ScrollTriggerDirective, TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {}
