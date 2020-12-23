import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenuHeaderComponent } from './components/header/menu-header.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MenuComponent, MenuHeaderComponent, CatalogComponent, ProductCardComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
