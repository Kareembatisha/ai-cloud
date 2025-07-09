import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../../../../core/directives/scroll-trigger.directive';

@Component({
  selector: 'app-partner-companies',
  imports: [ScrollTriggerDirective],
  templateUrl: './partner-companies.component.html',
  styleUrl: './partner-companies.component.scss',
})
export class PartnerCompaniesComponent {}
