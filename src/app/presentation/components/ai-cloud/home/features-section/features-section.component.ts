import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { ScrollTriggerDirective } from '../../../../../core/directives/scroll-trigger.directive';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [
    ScrollTriggerDirective,
    TranslateModule,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss'],
})
export class FeaturesSectionComponent implements OnInit, OnDestroy {
  features: any[] = [];
  groupedFeatures: any[][] = [];
  private resizeSub!: Subscription;
  private langSub!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.initFeatures();
    this.updateGroupedFeatures();
    this.setupResizeListener();
    this.setupLangChangeListener();
  }

  ngOnDestroy() {
    this.cleanupResizeListener();
    if (this.langSub) this.langSub.unsubscribe();
  }

  private setupLangChangeListener() {
    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.initFeatures();
    });
  }

  private initFeatures() {
    this.features = [
      {
        id: 1,
        icon: 'assets/service-img-1.png',
        title: this.translate.instant('FEATURES.UI_UX_TITLE'),
        description: this.translate.instant('FEATURES.UI_UX_DESC'),
        buttonText: this.translate.instant('FEATURES.LEARN_MORE'),
        link: '#feature1',
      },
      {
        id: 2,
        icon: 'assets/service-img-2.png',
        title: this.translate.instant('FEATURES.WEB_DEV_TITLE'),
        description: this.translate.instant('FEATURES.WEB_DEV_DESC'),
        buttonText: this.translate.instant('FEATURES.GET_STARTED'),
        link: '#feature2',
      },
      {
        id: 3,
        icon: 'assets/service-img-3.png',
        title: this.translate.instant('FEATURES.MARKETING_TITLE'),
        description: this.translate.instant('FEATURES.MARKETING_DESC'),
        buttonText: this.translate.instant('FEATURES.EXPLORE'),
        link: '#feature3',
      },
      {
        id: 4,
        icon: 'assets/service-img-4.jpg',
        title: this.translate.instant('FEATURES.AI_TITLE'),
        description: this.translate.instant('FEATURES.AI_DESC'),
      },
      {
        id: 5,
        icon: 'assets/service-img-5.jpg',
        title: this.translate.instant('FEATURES.SYSTEMS_TITLE'),
        description: this.translate.instant('FEATURES.SYSTEMS_DESC'),
      },
      {
        id: 6,
        icon: 'assets/service-img-6.jpg',
        title: this.translate.instant('FEATURES.CUSTOM_DEV_TITLE'),
        description: this.translate.instant('FEATURES.CUSTOM_DEV_DESC'),
      },
    ];

    // Update grouped features after language change
    this.updateGroupedFeatures();
  }

  private setupResizeListener() {
    this.resizeSub = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => {
        this.updateGroupedFeatures();
      });
  }

  private cleanupResizeListener() {
    if (this.resizeSub) {
      this.resizeSub.unsubscribe();
    }
  }

  private updateGroupedFeatures() {
    // Store current active slide index
    const currentActiveIndex = this.getCurrentActiveSlideIndex();

    // Calculate new groups based on window size
    const groupSize = this.calculateGroupSize();
    this.groupedFeatures = this.createFeatureGroups(groupSize);

    // Restore active slide after view updates
    setTimeout(() => {
      this.restoreActiveSlide(currentActiveIndex);
    });
  }

  private calculateGroupSize(): number {
    if (window.innerWidth >= 992) return 3; // Desktop - 3 items per slide
    if (window.innerWidth >= 576) return 2; // Tablet - 2 items per slide
    return 1; // Mobile - 1 item per slide
  }

  private createFeatureGroups(groupSize: number): any[][] {
    const groups = [];
    for (let i = 0; i < this.features.length; i += groupSize) {
      groups.push(this.features.slice(i, i + groupSize));
    }
    return groups;
  }

  private getCurrentActiveSlideIndex(): number {
    const activeSlide = document.querySelector(
      '#featuresCarousel .carousel-item.active'
    );
    if (!activeSlide) return 0;

    const slides = document.querySelectorAll(
      '#featuresCarousel .carousel-item'
    );
    return Array.from(slides).indexOf(activeSlide);
  }

  private restoreActiveSlide(previousIndex: number) {
    const carousel = document.getElementById('featuresCarousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel-item');
    if (slides.length === 0) return;

    // Remove active class from all slides
    slides.forEach((slide) => slide.classList.remove('active'));

    // Calculate new active index (clamped to valid range)
    const newActiveIndex = Math.min(previousIndex, slides.length - 1);

    // Set new active slide
    if (slides[newActiveIndex]) {
      slides[newActiveIndex].classList.add('active');

      // Also update the corresponding indicator
      const indicators = carousel.querySelectorAll(
        '.carousel-indicators button'
      );
      indicators.forEach((indicator) => indicator.classList.remove('active'));
      if (indicators[newActiveIndex]) {
        indicators[newActiveIndex].classList.add('active');
      }
    }
  }
}
