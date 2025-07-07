// src/app/core/routes/ai_cloud.routes.ts
import { Routes } from '@angular/router';
import { AiCloudLayoutComponent } from '../../presentation/layouts/ai-cloud-layout/ai-cloud-layout.component';
import { HomeComponent } from '../../presentation/pages/ai-cloud/home/home.component';
import { OurPartnersComponent } from '../../presentation/pages/ai-cloud/our-partners/our-partners.component';
import { AboutUsComponent } from '../../presentation/pages/ai-cloud/about-us/about-us.component';
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
    ],
  },
];
