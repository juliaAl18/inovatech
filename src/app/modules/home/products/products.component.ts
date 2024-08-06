import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';

export interface Aparelho {
  id: number;
  nome: string;
  valor: number;
  categoria: 'Novos' | 'Semi-novos' | 'Notebook';
  imagens: string[];
  cores: string[];
  hover?: boolean;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  aparelhos: Aparelho[] = [
    {
      id: 1,
      nome: 'iPhone 15 Pro Max 256GB',
      valor: 7150.00,
      categoria: 'Novos',
      imagens: ['./assets/iphone15-pro-max.jpeg'],
      cores: ['blue', 'orange', 'white', 'black']
    },
    {
      id: 2,
      nome: 'iPhone 15 Pro 256GB',
      valor: 6599.00,
      categoria: 'Novos',
      imagens: ['./assets/testeiphone15-pro.jpeg', './assets/teste2iphone15-pro.jpg'],
      cores: ['orange']
    },
    {
      id: 3,
      nome: 'iPhone 15 128GB',
      valor: 4699.00,
      categoria: 'Novos',
      imagens: ['./assets/iphone15.jpg', './assets/iphone15-teste2.jpg'],
      cores: ['black', 'orange', 'pink']
    },
    {
      id: 4,
      nome: 'iPhone 14 Pro Max',
      valor: 4749.00,
      categoria: 'Semi-novos',
      imagens: ['./assets/iphone14-pro-max.jpeg', './assets/iphone14-pro-max2.jpeg', './assets/iphone14-pro-max3.jpeg', './assets/iphone14-pro-max4.jpeg', './assets/iphone14-pro-max5.jpeg'],
      cores: ['purple']
    },
    {
      id: 5,
      nome: 'Poco X6 256GB',
      valor: 1950.00,
      categoria: 'Novos',
      imagens: ['./assets/pocox6.jpeg'],
      cores: ['black', 'blue']
    },
    {
      id: 6,
      nome: 'Poco X6 Pro 512GB',
      valor: 2400.00,
      categoria: 'Semi-novos',
      imagens: ['./assets/pocox6-pro.jpeg'],
      cores: ['black', 'yellow', 'white']
    },



  ];


  selectedColors: { [id: string]: string } = {};
  private hoverSubscriptions: { [id: number]: Subscription } = {};

  @ViewChild('novosContainer', { static: false }) novosContainer!: ElementRef;
  @ViewChild('semiNovosContainer', { static: false }) semiNovosContainer!: ElementRef;
  @ViewChild('notebookContainer', { static: false }) notebookContainer!: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    for (const key in this.hoverSubscriptions) {
      if (this.hoverSubscriptions[key]) {
        this.hoverSubscriptions[key].unsubscribe();
      }
    }
  }

  getAparelhosByCategoria(categoria: string): Aparelho[] {
    return this.aparelhos.filter(aparelho => aparelho.categoria === categoria).slice(0, 4);
  }

  onMouseEnter(aparelho: Aparelho) {
    aparelho.hover = true;
    this.startImageSlider(aparelho);
  }

  onMouseLeave(aparelho: Aparelho) {
    aparelho.hover = false;
    this.stopImageSlider(aparelho);
  }

  private startImageSlider(aparelho: Aparelho) {
    if (aparelho.imagens.length > 1) {
      let currentImageIndex = 0;
      const imageElement = document.getElementById(`image-${aparelho.id}`) as HTMLImageElement;

      if (imageElement) {
        this.hoverSubscriptions[aparelho.id] = interval(1500).subscribe(() => {
          currentImageIndex = (currentImageIndex + 1) % aparelho.imagens.length;
          imageElement.src = aparelho.imagens[currentImageIndex];
        });
      }
    }
  }

  private stopImageSlider(aparelho: Aparelho) {
    if (this.hoverSubscriptions[aparelho.id]) {
      this.hoverSubscriptions[aparelho.id].unsubscribe();
    }
    const imageElement = document.getElementById(`image-${aparelho.id}`) as HTMLImageElement;
    if (imageElement && aparelho.imagens.length > 0) {
      imageElement.src = aparelho.imagens[0];
    }
  }

  moveLeft(categoria: string) {
    const container = this.getContainer(categoria);
    if (container) {
      const currentScroll = container.nativeElement.scrollLeft;
      container.nativeElement.scrollTo({
        left: currentScroll - 320,
        behavior: 'smooth'
      });
    }
  }

  moveRight(categoria: string) {
    const container = this.getContainer(categoria);
    if (container) {
      const currentScroll = container.nativeElement.scrollLeft;
      container.nativeElement.scrollTo({
        left: currentScroll + 320,
        behavior: 'smooth'
      });
    }
  }

  private getContainer(categoria: string): ElementRef | undefined {
    switch (categoria) {
      case 'novos':
        return this.novosContainer;
      case 'semi-novos':
        return this.semiNovosContainer;
      case 'notebook':
        return this.notebookContainer;
      default:
        return undefined;
    }
  }

  generateWhatsAppLink(aparelho: Aparelho): string {
    const phoneNumber = '5561983036347';
    const message = `
      Olá, gostaria de mais informações sobre o produto abaixo:
      Nome: ${aparelho.nome}
      Valor: R$ ${aparelho.valor.toFixed(2)}
      Categoria: ${aparelho.categoria}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }
}
