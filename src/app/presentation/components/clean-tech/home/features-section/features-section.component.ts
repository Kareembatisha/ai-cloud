import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../../../../core/directives/scroll-trigger.directive';

@Component({
  selector: 'app-stock-section',
  imports: [ScrollTriggerDirective],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss',
})
export class StockSectionComponent {}
