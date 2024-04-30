import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { AppRoutesModule } from './modules/app.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderDirective } from './directives/header.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { AuthGuard, provideAuth0 } from '@auth0/auth0-angular';

//Import HttpClientModule

import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { GlobalErrorHandler } from './services/global-error-handler.service';
import { FeedbackComponent } from './components/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    NotAuthorizedComponent,
    SearchComponent,
    LoaderComponent,
    ModalComponent,
    DetailsActorsComponent,
    NotFoundComponent,
    FeedbackComponent,

    // Directives
    HeaderDirective,
    MyIfDirective,
  ],
  imports: [BrowserModule, AppRoutesModule, FormsModule, HttpClientModule],
  providers: [
    MoviesService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    AuthGuard,
    provideAuth0({
      domain: 'dev-07q8f5vtscttrbjy.us.auth0.com',
      clientId: 'brI2qObASAwbh3Lm6sHlNPWGd1xzUBnD',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
