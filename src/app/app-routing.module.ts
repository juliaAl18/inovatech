import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/header/header.component';
import { CarouselComponent } from './modules/home/carousel/carousel.component';
import { StoreComponent } from './modules/home/store/store.component';
import { MapsComponent } from './modules/home/maps/maps.component';
import { FooterComponent } from './modules/footer/footer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: "full", redirectTo: 'home' },
  { path: 'header', component: HeaderComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'store', component: StoreComponent },
  { path: 'map', component: MapsComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
