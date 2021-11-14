import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BasketData, ProductData } from './shared/models/product.interface';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ProductService } from './services/product.service';
import { productsReducer } from './state/products.reducer';
import { collectionReducer } from './state/collection.reducer';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { ShoppingBasketService } from './services/shopping-basket.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingBasketComponent,
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ products: productsReducer, collection: collectionReducer }),
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    HttpClientInMemoryWebApiModule.forRoot(BasketData),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      name: 'Shopping Cart App DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [
    ProductService,
    ShoppingBasketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
