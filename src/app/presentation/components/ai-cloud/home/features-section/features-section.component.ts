// features-section.component.ts
import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../../../../core/directives/scroll-trigger.directive';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [ScrollTriggerDirective, TranslateModule, CommonModule],
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss'],
})
export class FeaturesSectionComponent {
  features = [
    {
      id: 1,
      icon: 'assets/service-img-1.png',
      title: 'User Interface and Experience Design ( UI - UX )',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Learn More',
      link: '#feature1',
    },
    {
      id: 2,
      icon: 'assets/service-img-2.png',
      title: 'Custom Website and Application Development',
      description:
        'This is the description for the second feature card with its benefits.',
      buttonText: 'Get Started',
      link: '#feature2',
    },
    {
      id: 3,
      icon: 'assets/service-img-3.png',
      title: 'Marketing and Advertising Management"',
      description:
        'The third feature card description goes here with important details.',
      buttonText: 'Explore',
      link: '#feature3',
    },
    {
      id: 4,
      icon: 'assets/images/feature4.jpg',
      title: 'Feature Four',
      description: 'Additional feature card for demonstration purposes.',
    },
    {
      id: 5,
      icon: 'assets/images/feature5.jpg',
      title: 'Feature Five',
      description: 'Fifth feature card to show slider functionality.',
    },
    {
      id: 6,
      icon: 'assets/images/feature6.jpg',
      title: 'Feature Six',
      description: 'Final feature card to complete the slider demo.',
    },
  ];

  get groupedFeatures(): any[][] {
    const groupSize =
      window.innerWidth >= 992 ? 3 : window.innerWidth >= 576 ? 2 : 1;
    const groups = [];
    for (let i = 0; i < this.features.length; i += groupSize) {
      groups.push(this.features.slice(i, i + groupSize));
    }
    return groups;
  }
}
