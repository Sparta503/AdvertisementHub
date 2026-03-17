import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {

  @ViewChildren('card') cards!: QueryList<ElementRef>;

  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const counters = this.elementRef.nativeElement.querySelectorAll('.counter');
      const speed = 200; // Change animation speed here

      const animateCounter = (counter: Element) => {
        const target = +counter.getAttribute('data-target')!;
        const count = +counter.textContent!;
        const increment = target / speed;

        if (count < target) {
          counter.textContent = Math.ceil(count + increment).toString();
          setTimeout(() => animateCounter(counter), 1);
        } else {
          counter.textContent = target.toString();
        }
      };

      // Card animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            }
          });
        },
        {
          threshold: 0.3
        }
      );

      this.cards.forEach(card => {
        observer.observe(card.nativeElement);
      });

      // Statistics counting animation
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              counters.forEach((counter: Element) => {
                if (!counter.classList.contains('animated')) {
                  counter.classList.add('animated');
                  animateCounter(counter);
                }
              });
            }
          });
        },
        {
          threshold: 0.5
        }
      );

      const statsSection = this.elementRef.nativeElement.querySelector('section.bg-gray-900');
      if (statsSection) {
        statsObserver.observe(statsSection);
      }
    }
  }
}
