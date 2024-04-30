import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  movieId = '';

  stars = [];
  directors = [];
  genres = [];

  constructor(
    private _activedRoute: ActivatedRoute,
    private HttpClient: HttpClient
  ) {
    this._activedRoute.params.subscribe((p) => {
      this.movieId = p['id'];
      console.log(this.movieId);
    });
  }

  ngOnInit(): void {
    this.loadMovieSummary();
  }

  loadMovieSummary() {
    this.HttpClient.get('assets/data/movieSummary.json').subscribe(
      (data: any) => {
        this.stars = data.stars;
        this.genres = data.genres;
        this.directors = data.directors;
      }
    );
  }
}
