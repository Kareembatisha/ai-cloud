import { Component } from '@angular/core';
import { ContactUsButtonComponent } from "../contact-us-button/contact-us-button.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [ContactUsButtonComponent,TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
