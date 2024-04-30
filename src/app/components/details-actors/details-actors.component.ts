import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrls: ['./details-actors.component.css'],
})
export class DetailsActorsComponent implements OnInit {
  movieActors: any[] = [];

  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadMovieActors();
  }

  loadMovieActors() {
    this.HttpClient.get<any[]>('assets/data/movieActors.json').subscribe(
      (data: any) => {
        this.movieActors = data;
      }
    );
  }
}
