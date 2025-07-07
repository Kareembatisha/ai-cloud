// scroll-trigger.directive.ts
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollTrigger]',
})
export class ScrollTriggerDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            // Remove observer after animation triggers
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    ); // Trigger when 10% of element is visible

    observer.observe(this.el.nativeElement);
  }
}
