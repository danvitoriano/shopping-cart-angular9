import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      // new route
      { path: "products/:productId", component: ProductDetailsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
