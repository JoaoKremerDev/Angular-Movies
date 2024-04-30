import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css'],
})
export class DetailsReviewsComponent implements OnInit {
  movieRates: any[] = [];
  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews() {
    this.HttpClient.get('assets/data/movieRates.json').subscribe((data: any) => {
      this.movieRates = data;
    });
  }
}
