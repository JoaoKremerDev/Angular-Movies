import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private HttpClientOther = inject(HttpClient);
  constructor(private httpClient: HttpClient) {}

  isActive = false;

  topMovies: any[] = [];
  fanFavoriteMovies: any[] = [];

  ngOnInit(): void {
    this.getFanFavoriteMovies();
    this.getTopMovies();
  }

  // it's just an example to show how i would do it using the pipe method.
  // but i preferred the other one.

  // getFanFvoriteMovies() {
  //   this.httpClient
  //     .get<any[]>('assets/data/fanFavoriteMovies.json')
  //     .pipe(
  //       catchError((error) => {
  //         console.log(error);
  //         return of(null);
  //       })
  //     )
  //     .subscribe((data) => {
  //       if (data) {
  //         this.fanFavoriteMovies = data;
  //       } else {
  //         this.fanFavoriteMovies = [];
  //       }
  //     });
  // }

  // here is how i've chosen to use it!

  getFanFavoriteMovies() {
    this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json').subscribe({
      next: (data: any[]) => {
        this.fanFavoriteMovies = data;
      },
      error: (error) => {
        console.log('Error loading fan favorites data:', error);
      },
      complete: () => {
        console.log('[getFanFvoriteMovies] Request completed successfuly');
      },
    });
  }

  getTopMovies() {
    this.httpClient.get<any[]>('assets/data/topMovies.json').subscribe({
      next: (data: any[]) => {
        this.topMovies = data;
      },
      error: (error) => {
        console.log('Error loading top movies data:', error);
      },
      complete: () => {
        console.log('[getTopMovies] Request completed successfuly');
      },
    });
  }
}
