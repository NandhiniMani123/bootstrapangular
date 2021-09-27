import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './templatecomponents/topnavbar/topnavbar.component';
import { FooterComponent } from './templatecomponents/footer/footer.component';
import { BlogpostComponent } from './templatecomponents/blogpost/blogpost.component';
import { SearchComponent } from './templatecomponents/search/search.component';
import { CategoriesComponent } from './templatecomponents/categories/categories.component';
import { SideComponent } from './templatecomponents/side/side.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    FooterComponent,
    BlogpostComponent,
    SearchComponent,
    CategoriesComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
