import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    this.observeElementAnimation('#who-we-are', 'comes-from-the-right');
    this.observeElementAnimation('#our-story', 'comes-from-the-left');
    this.observeElementAnimation('#our-project', 'comes-from-the-right');
    this.observeElementAnimation('#our-mission', 'comes-from-the-left');
  }

  observeElementAnimation(elementSelector: string, animationClass: string): void {
    const element = document.querySelector(elementSelector);

    if (element) {
      // Adiciona a classe "hidden" inicialmente
      element.classList.add('hidden');

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.remove('hidden');
          entries[0].target.classList.add(animationClass);
        }
      }, {
        threshold: 0.2
      });

      observer.observe(element);
    }
  }
}
