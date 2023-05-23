import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetailsComponent } from './pages/details/details.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { ViewmoreComponent } from './pages/viewmore/viewmore.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'detail/:id', component: DetailsComponent },
  { path: 'searchResult', component: SearchResultComponent },
  { path: 'viewMore', component: ViewmoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
