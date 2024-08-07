import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/header/header.component';
import { CarouselComponent } from './modules/home/carousel/carousel.component';
import { StoreComponent } from './modules/home/store/store.component';
import { ProductsComponent } from './modules/home/products/products.component';
import { MapsComponent } from './modules/home/maps/maps.component';
import { FooterComponent } from './modules/footer/footer.component';
import { WhyChooseUsComponent } from './modules/home/why-choose-us/why-choose-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: "full", redirectTo: 'home' },
  { path: 'header', component: HeaderComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'store', component: StoreComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'why', component: WhyChooseUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
