import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../../../../core/directives/scroll-trigger.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-partner-hero',
  imports: [ScrollTriggerDirective,TranslateModule],
  templateUrl: './partner-hero.component.html',
  styleUrl: './partner-hero.component.scss',
})
export class PartnerHeroComponent {}
