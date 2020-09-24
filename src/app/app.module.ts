// arquivos inicializador dos módulos angular
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: "", component: AppComponent }]),
  ],
  declarations: [AppComponent, TopBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
