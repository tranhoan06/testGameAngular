import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './pages/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetailsComponent } from './pages/details/details.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewmoreComponent } from './pages/viewmore/viewmore.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    DetailsComponent,
    BrowseComponent,
    SearchResultComponent,
    ViewmoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
