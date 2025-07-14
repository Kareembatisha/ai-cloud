import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CleanTechAboutSectionComponent } from '../../../components/clean-tech/clean-tech-about-section/clean-tech-about-section.component';
import { CleanTechIotSectionComponent } from '../../../components/clean-tech/clean-tech-iot-section/clean-tech-iot-section.component';
import { CleanTechFeaturesSliderComponent } from '../../../components/clean-tech/clean-tech-features-slider/clean-tech-features-slider.component';
import { CleanTechAppSectionComponent } from '../../../components/clean-tech/clean-tech-app-section/clean-tech-app-section.component';
import { CleanTechSmartOperationSectionComponent } from '../../../components/clean-tech/clean-tech-smart-operation-section/clean-tech-smart-operation-section.component';
import { CleanTechContactUsComponent } from '../../../components/clean-tech/clean-tech-contact-us/clean-tech-contact-us.component';

@Component({
  selector: 'app-clean-tech-home',
  standalone: true,
  imports: [
    CommonModule,
    CleanTechAboutSectionComponent,
    CleanTechIotSectionComponent,
    CleanTechFeaturesSliderComponent,
    CleanTechAppSectionComponent,
    CleanTechSmartOperationSectionComponent,
    CleanTechContactUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class CleanTechHomeComponent implements OnInit, OnDestroy {
  activeSection: string = 'about';
  sections = [
    { id: 'about', title: 'About' },
    { id: 'iot', title: 'Iot' },
    { id: 'features', title: 'Features' },
    { id: 'app', title: 'App' },
    { id: 'operations', title: 'Operations' },
    { id: 'contact', title: 'Contact' },
  ];

  private scrollSubscription!: Subscription;

  ngOnInit() {
    this.setupScrollSpy();
  }

  setupScrollSpy() {
    // Use debounceTime to optimize scroll performance
    this.scrollSubscription = fromEvent(window, 'scroll')
      .pipe(debounceTime(50))
      .subscribe(() => {
        this.detectActiveSection();
      });
  }

  detectActiveSection() {
    const scrollPosition = window.scrollY + 100; // Adding offset for better detection

    // Get all sections and their positions
    const sections = this.sections.map((section) => {
      const element = document.getElementById(section.id);
      return {
        id: section.id,
        offsetTop: element ? element.offsetTop : 0,
        offsetHeight: element ? element.offsetHeight : 0,
      };
    });

    // Find which section is currently in view
    const currentSection = sections.find(
      (section) =>
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
    );

    if (currentSection) {
      this.activeSection = currentSection.id;
    }
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20, // Small offset for better visibility
        behavior: 'smooth',
      });
    }
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
}
