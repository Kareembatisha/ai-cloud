// src/app/core/routes/ai_cloud.routes.ts
import { Routes } from '@angular/router';
import { AiCloudLayoutComponent } from '../../presentation/layouts/ai-cloud-layout/ai-cloud-layout.component';
import { HomeComponent } from '../../presentation/pages/ai-cloud/home/home.component';
import { OurPartnersComponent } from '../../presentation/pages/ai-cloud/our-partners/our-partners.component';
import { AboutUsComponent } from '../../presentation/pages/ai-cloud/about-us/about-us.component';
import { CleanTechHomeComponent } from '../../presentation/pages/clean-tech/home/home.component';
import { ContactUsComponent } from '../../presentation/pages/ai-cloud/contact-us/contact-us.component';
// import { AiDashboardComponent } from '../../features/ai-cloud/pages/ai-dashboard/ai-dashboard.component';
// import { AiSettingsComponent } from '../../features/ai-cloud/pages/ai-settings/ai-settings.component';

export const AI_Cloud_ROUTES: Routes = [
  {
    path: '',
    component: AiCloudLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: ' Home',
      },
      {
        path: 'our-partners',
        component: OurPartnersComponent,
        title: 'Our Partners',
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
        title: 'About Us',
      },
      {
        path: 'clean-tech',
        component: CleanTechHomeComponent,
        title: ' Clean-Tech',
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
        title: ' Contact Us',
      },
    ],
  },
];
