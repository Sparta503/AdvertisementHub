import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';

import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit {

  @ViewChildren('card') cards!: QueryList<ElementRef>;

  ngAfterViewInit(): void {

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

  }

}
