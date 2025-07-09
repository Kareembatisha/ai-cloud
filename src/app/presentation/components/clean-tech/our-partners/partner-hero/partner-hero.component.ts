import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../../../../core/directives/scroll-trigger.directive';

@Component({
  selector: 'app-partner-hero',
  imports: [ScrollTriggerDirective],
  templateUrl: './partner-hero.component.html',
  styleUrl: './partner-hero.component.scss',
})
export class PartnerHeroComponent {}
