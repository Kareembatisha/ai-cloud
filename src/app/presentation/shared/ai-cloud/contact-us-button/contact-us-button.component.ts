import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-us-button',
  templateUrl: './contact-us-button.component.html',
  styleUrls: ['./contact-us-button.component.scss'],
  standalone: true,
})
export class ContactUsButtonComponent {
  @Input() link: string = '#';
  @Input() label: string = 'Contact Us';
}
