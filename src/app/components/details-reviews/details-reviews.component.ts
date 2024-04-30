import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css'],
})
export class DetailsReviewsComponent implements OnInit {
  movieRates: any[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews() {
    this.moviesService.getLoadReviews().subscribe((data: any) => {
      this.movieRates = data;
    });
  }
}
