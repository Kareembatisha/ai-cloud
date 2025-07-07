import { Component } from '@angular/core';
import { ContactUsButtonComponent } from "../contact-us-button/contact-us-button.component";

@Component({
  selector: 'app-footer',
  imports: [ContactUsButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
