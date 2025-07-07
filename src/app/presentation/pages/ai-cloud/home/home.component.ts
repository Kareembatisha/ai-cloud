import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../../components/ai-cloud/home/hero-section/hero-section.component';
import { AboutUsSectionComponent } from '../../../components/ai-cloud/home/about-us-section/about-us-section.component';
import { FeaturesSectionComponent } from '../../../components/ai-cloud/home/features-section/features-section.component';
import { CleanTechServiceComponent } from '../../../components/ai-cloud/home/clean-tech-service/clean-tech-service.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    AboutUsSectionComponent,
    FeaturesSectionComponent,
    CleanTechServiceComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
