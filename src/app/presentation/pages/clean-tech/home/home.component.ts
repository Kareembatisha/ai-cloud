import { Component, ElementRef, ViewChild } from '@angular/core';
import { AboutUsSectionComponent } from '../../../components/ai-cloud/home/about-us-section/about-us-section.component';
import { StockSectionComponent } from '../../../components/clean-tech/home/features-section/features-section.component';
import { CleanTechServiceComponent } from '../../../components/ai-cloud/home/clean-tech-service/clean-tech-service.component';
import { HeroSectionComponent } from '../../../components/clean-tech/home/hero-section/hero-section.component';
import { debounceTime, fromEvent, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clean-tech-home',
  imports: [
    AboutUsSectionComponent,
    CleanTechServiceComponent,
    HeroSectionComponent,
    StockSectionComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class CleanTechHomeComponent {
  activeSection: string = 'hero';
  sections = [
    { id: 'hero', title: 'Home' },
    { id: 'about', title: 'About Us' },
    { id: 'stock', title: 'Stock' },
    { id: 'services', title: 'Services' },
  ];

  // Optionally, if you want to use ViewChildren for more precise control
  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  // Add others as needed

  ngOnInit() {
    this.setupScrollSpy();
  }

  setupScrollSpy() {
    window.addEventListener('scroll', () => {
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
        top: element.offsetTop - 80, // Adjust for header height
        behavior: 'smooth',
      });
    }
  }

  // Clean up the event listener when component is destroyed
  ngOnDestroy() {
    window.removeEventListener('scroll', this.detectActiveSection);
  }
}
