import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideTranslate } from './translate.config';

bootstrapApplication(AppComponent, {
  // Spread the appConfig first
  ...appConfig,

  // Then override/add providers
  providers: [...(appConfig.providers || []), ...provideTranslate()],
}).catch((err) => console.error(err));
