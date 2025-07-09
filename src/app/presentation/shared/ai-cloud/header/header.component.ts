import { Component } from '@angular/core';
import { ContactUsButtonComponent } from '../contact-us-button/contact-us-button.component';
import { RouterModule } from '@angular/router';
import { ScrollTriggerDirective } from '../../../../core/directives/scroll-trigger.directive';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
    ContactUsButtonComponent,
    RouterModule,
    ScrollTriggerDirective,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentLanguage: string = 'en';

  constructor(private translate: TranslateService) {
    // Set default language
    translate.setDefaultLang('en');

    // Get browser language or use default
    const browserLang = translate.getBrowserLang();
    this.currentLanguage = browserLang?.match(/en|ar/) ? browserLang : 'en';
    translate.use(this.currentLanguage);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }
}
