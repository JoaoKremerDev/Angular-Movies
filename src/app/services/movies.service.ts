import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getFanFavoriteMovies() {
    return this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json');
  }

  getTopMovies() {
    return this.httpClient.get<any[]>('assets/data/topMovies.json');
  }

  getLoadMovieSummary() {
    return this.httpClient.get('assets/data/movieSummary.json');
  }

  getLoadMovieActors() {
    return this.httpClient.get<any[]>('assets/data/movieActors.json');
  }

  getLoadSimilarMovies() {
    return this.httpClient.get('assets/data/similarMovies.json');
  }

  getLoadReviews() {
    return this.httpClient.get('assets/data/movieRates.json');
  }

  getSearchedMovies() {
    return this.httpClient.get('assets/data/movieSearch.json');
  }
}
