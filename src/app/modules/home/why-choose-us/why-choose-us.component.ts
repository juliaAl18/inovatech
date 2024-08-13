import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss'],
})
export class WhyChooseUsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    this.observeElementAnimation('#upper-benefit-left', 'comes-from-down');
    this.observeElementAnimation('#upper-benefit-right', 'comes-from-down');
    this.observeElementAnimation('#lower-benefit', 'comes-from-down');
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