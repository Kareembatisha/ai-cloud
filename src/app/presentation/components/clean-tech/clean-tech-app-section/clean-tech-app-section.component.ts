import { Component } from '@angular/core';
import { ContactUsButtonComponent } from '../../../shared/ai-cloud/contact-us-button/contact-us-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clean-tech-app-section',
  standalone: true,
  imports: [ContactUsButtonComponent, TranslateModule, CommonModule],
  templateUrl: './clean-tech-app-section.component.html',
  styleUrl: './clean-tech-app-section.component.scss',
})
export class CleanTechAppSectionComponent {
  currentSlideGroup = 0;

  slides = [
    {
      id: 'user-management',
      title: 'User Management',
      description:
        'Easily manage roles, permissions, and user activity to ensure your team works efficiently and securely.',
      image: 'assets/integration-logo-3.png',
    },
    {
      id: 'attendance',
      title: 'Attendance',
      description:
        'Monitor employee check-ins and absences with accuracy. Say goodbye to manual logs. Track Attendance in Real Time.',
      image: 'assets/integration-logo-1.png',
    },
    {
      id: 'stock',
      title: 'Stock',
      description:
        "Track inventory in real time—know what's in, what's out, and what it's worth. Reduce waste and never run out. Smart Stock Monitoring.",
      image: 'assets/integration-logo-2.png',
    },
    {
      id: 'Work Location',
      title: 'Work Location',
      description:
        'Manage and track various work locations for employees or equipment to ensure effective presence and proper planning.',
      image: 'assets/integration-logo-8.png',
    },
    {
      id: 'Shifts',
      title: 'Shifts',
      description:
        'Organize and schedule employee work shifts with ease and accuracy, ensuring adequate coverage and optimized time management.',
      image: 'assets/integration-logo-4.png',
    },
    {
      id: 'Tasks',
      title: 'Tasks',
      description:
        'Define, assign, and monitor daily tasks or projects for employees, ensuring efficient and effective completion of work.',
      image: 'assets/integration-logo-5.png',
    },
    {
      id: 'Activity',
      title: 'Activity',
      description:
        'Monitor and record various activities of users or systems, providing insights into performance and improving operations.',
      image: 'assets/integration-logo-9.png',
    },
    {
      id: 'Sensor',
      title: 'Sensor',
      description:
        'Integrate and manage data from various sensors, providing accurate and real-time information about the environment or equipment',
      image: 'assets/integration-logo-6.png',
    },
    {
      id: 'Assign',
      title: 'Assign',
      description:
        'Connect users to work locations or shifts, or link work locations to shifts, to ensure effective coordination and optimal task distribution.',
      image: 'assets/integration-logo-7.png',
    },
    // Add more slides as needed
  ];

  get visibleSlides() {
    const start = this.currentSlideGroup * 3;
    return this.slides.slice(start, start + 3);
  }

  get totalSlideGroups() {
    return Math.ceil(this.slides.length / 3);
  }

  goToSlideGroup(index: number) {
    this.currentSlideGroup = index;
  }

  nextSlideGroup() {
    if (this.currentSlideGroup < this.totalSlideGroups - 1) {
      this.currentSlideGroup++;
    }
  }

  prevSlideGroup() {
    if (this.currentSlideGroup > 0) {
      this.currentSlideGroup--;
    }
  }

  getNumberArray(length: number): number[] {
    return Array(length)
      .fill(0)
      .map((x, i) => i);
  }
}
