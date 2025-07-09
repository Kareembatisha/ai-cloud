import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../../../../core/directives/scroll-trigger.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-partner-companies-features',
  imports: [ScrollTriggerDirective,TranslateModule],
  templateUrl: './partner-companies-features.component.html',
  styleUrl: './partner-companies-features.component.scss',
})
export class PartnerCompaniesFeaturesComponent {}
