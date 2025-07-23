import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-us-button',
  templateUrl: './contact-us-button.component.html',
  styleUrls: ['./contact-us-button.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class ContactUsButtonComponent {
  @Input() link: string = 'contact-us';
  @Input() label: string = 'Contact Us';
}
