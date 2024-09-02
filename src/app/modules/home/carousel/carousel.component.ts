import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  brands = [
    { imgSrc: 'assets/lenovo-logo.png', altText: 'Le Novo' },
    { imgSrc: 'assets/iphone-logo.png', altText: 'Apple' },
    { imgSrc: 'assets/Samsung-logo.png', altText: 'Samsung' },
    { imgSrc: 'assets/macos-logo.png', altText: 'Macos' },
    { imgSrc: 'assets/Xiaomi-logo.png', altText: 'Xiaomi' },
    { imgSrc: 'assets/Dell-Logo.png', altText: 'Dell' },
    { imgSrc: 'assets/acer-logo.png', altText: 'Acer' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
