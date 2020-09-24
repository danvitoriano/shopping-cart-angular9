import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: "", component: ProductDetailsComponent }]),
  ],
  declarations: [AppComponent, TopBarComponent, ProductDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
