import { Component } from '@angular/core';
import { ContactUsButtonComponent } from '../contact-us-button/contact-us-button.component';
import { RouterModule } from '@angular/router';
import { ScrollTriggerDirective } from '../../../../core/directives/scroll-trigger.directive';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  // ===========================================
  // Standalone Component Imports
  // - ContactUsButtonComponent: reusable CTA button
  // - RouterModule: for routerLink navigation
  // - ScrollTriggerDirective: triggers scroll-based animations
  // - TranslateModule: enables translation pipes in the template
  // ===========================================
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
  // ===========================================
  // Holds the currently active language code (e.g., 'en' or 'ar')
  // Used for UI language toggle and updating the template
  // ===========================================
  currentLanguage: string = 'en';

  constructor(private translate: TranslateService) {
    // ===========================================
    // Initialize translation settings
    // - Set default language to English
    // - Attempt to detect browser language (only 'en' or 'ar')
    // - Fallback to English if unsupported
    // ===========================================
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    this.currentLanguage = browserLang?.match(/en|ar/) ? browserLang : 'en';
    translate.use(this.currentLanguage);
  }

  // ===========================================
  // Change application language
  // - Updates translation service to the selected language
  // - Updates <html> tag attributes:
  //   - dir: sets text direction (rtl/ltr)
  //   - lang: sets language attribute for accessibility and SEO
  // ===========================================
  changeLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }
}
