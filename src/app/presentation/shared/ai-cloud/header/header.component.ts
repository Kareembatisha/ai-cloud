import { Component } from '@angular/core';
import { ContactUsButtonComponent } from '../contact-us-button/contact-us-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ContactUsButtonComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
