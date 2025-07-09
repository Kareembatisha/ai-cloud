import { Component } from '@angular/core';
import { ContactUsButtonComponent } from '../../ai-cloud/contact-us-button/contact-us-button.component';

@Component({
  selector: 'app-clean-tech-footer',
  imports: [ContactUsButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
