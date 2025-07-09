// src/app/core/routes/clean_tech.routes.ts
import { Routes } from '@angular/router';
import { CleanTechLayoutComponent } from '../../presentation/layouts/clean-tech-layout/clean-tech-layout.component';
import { CleanTechHomeComponent } from '../../presentation/pages/clean-tech/home/home.component';
import { OurPartnersComponent } from '../../presentation/pages/clean-tech/our-partners/our-partners.component';
// import { CleanDashboardComponent } from '../../features/clean-tech/pages/clean-dashboard/clean-dashboard.component';
// import { CleanReportsComponent } from '../../features/clean-tech/pages/clean-reports/clean-reports.component';

export const Clean_Tech_Routes: Routes = [
  {
    path: '',
    component: CleanTechLayoutComponent,
    children: [
      {
        path: '',
        component: CleanTechHomeComponent,
        title: ' Home',
      },
      {
        path: 'our-partners',
        component: OurPartnersComponent,
        title: 'Our Partners',
      },
      // {
      //   path: 'about-us',
      //   component: AboutUsComponent,
      //   title: 'About Us',
      // },
    ],
  },
];
