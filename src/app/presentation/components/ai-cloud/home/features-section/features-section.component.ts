import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../../../../core/directives/scroll-trigger.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-features-section',
  imports: [ScrollTriggerDirective,TranslateModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss',
})
export class FeaturesSectionComponent {}
