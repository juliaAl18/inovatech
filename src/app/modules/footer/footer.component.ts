import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.observeElementAnimation('#whatsapp', 'comes-from-down-whatsapp');
    this.observeElementAnimation('#instagram', 'comes-from-down-instagram');
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