import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ScrollTriggerDirective } from '../../../../core/directives/scroll-trigger.directive';
import { ContactUsButtonComponent } from '../../ai-cloud/contact-us-button/contact-us-button.component';

@Component({
  selector: 'app-clean-tech-header',
  imports: [ContactUsButtonComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
