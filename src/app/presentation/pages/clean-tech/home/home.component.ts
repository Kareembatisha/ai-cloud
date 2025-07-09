import { Component } from '@angular/core';
import { AboutUsSectionComponent } from '../../../components/ai-cloud/home/about-us-section/about-us-section.component';
import { StockSectionComponent } from '../../../components/clean-tech/home/features-section/features-section.component';
import { CleanTechServiceComponent } from '../../../components/ai-cloud/home/clean-tech-service/clean-tech-service.component';
import { HeroSectionComponent } from '../../../components/clean-tech/home/hero-section/hero-section.component';
import { debounceTime, fromEvent, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clean-tech-home',
  imports: [
    // AboutUsSectionComponent,
    // CleanTechServiceComponent,
    // HeroSectionComponent,
    // StockSectionComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class CleanTechHomeComponent {
  sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'features', title: 'Features' },
    { id: 'pricing', title: 'Pricing' },
    { id: 'testimonials', title: 'Testimonials' },
    { id: 'team', title: 'Our Team' },
    { id: 'contact', title: 'Contact Us' },
  ];

  activeSection = this.sections[0].id;
  private scrollSub!: Subscription;

  ngOnInit() {
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(debounceTime(10))
      .subscribe(() => this.onScroll());
  }

  ngOnDestroy() {
    this.scrollSub?.unsubscribe();
  }

  onScroll() {
    const scrollPosition = window.scrollY + 100;

    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (!element) continue;

      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        this.activeSection = section.id;
        break;
      }
    }
  }

  scrollTo(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  }
}
