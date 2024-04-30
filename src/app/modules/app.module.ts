import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { DetailsComponent } from '../components/details/details.component';
import { DetailsActorsComponent } from '../components/details-actors/details-actors.component';
import { DetailsMoviesComponent } from '../components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../components/details-reviews/details-reviews.component';
import { SearchComponent } from '../components/search/search.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { FeedbackComponent } from '../components/feedback/feedback.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'details/:id',
    component: DetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details/actors/:id',
    component: DetailsActorsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details/movies/:id',
    component: DetailsMoviesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details/reviews/:id',
    component: DetailsReviewsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'search/:movieTitle',
    component: SearchComponent,
    canActivate: [AuthGuard],
  },
  { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuard] },

  // START: Nested Routes (just an example to show that i know how to use nested routes in Angular)
  // This routes would be access from 'details/1/nestedRoute' for example.
  // I would just need to use the app-outlet where i want it to be shown which is not the case
  //  at this application!
  //But there is the nested Route example below!

  // {
  //   path: 'details/:id',
  //   component: DetailsComponent,
  //   children: [
  //     { path: 'actors', component: DetailsActorsComponent },
  //     { path: 'movies', component: DetailsMoviesComponent },
  //     { path: 'reviews', component: DetailsReviewsComponent },
  //   ],
  // },

  // 404 page for non-existing URLs
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
