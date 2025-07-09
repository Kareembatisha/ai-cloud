import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollTrigger]',
})
export class ScrollTriggerDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Initially hide the element
    (this.el.nativeElement as HTMLElement).style.opacity = '0';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            // Get the animation classes from data attributes
            const animation = target.getAttribute('data-animation');
            const delay = target.getAttribute('data-delay') || '';

            // Make element visible before animation
            target.style.opacity = '1';

            if (animation) {
              // Add base animate.css class
              target.classList.add('animate__animated');
              // Add the specific animation class
              target.classList.add(`animate__${animation}`);

              // Add delay if specified
              if (delay) {
                target.classList.add(`animate__delay-${delay}`);
              }
            }

            // Remove observer after animation triggers
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
