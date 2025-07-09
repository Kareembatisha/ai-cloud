import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../../../../core/directives/scroll-trigger.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-partner-companies',
  imports: [ScrollTriggerDirective,TranslateModule],
  templateUrl: './partner-companies.component.html',
  styleUrl: './partner-companies.component.scss',
})
export class PartnerCompaniesComponent {}
