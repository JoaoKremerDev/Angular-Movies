import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css'],
})
export class DetailsReviewsComponent implements OnInit {
  movieRates: any[] = [
    {
      rate: 7.5,
      review: 'This is just an example of how this text could be in a review!',
      author: 'Author',
      usefulCount: 100,
      totalCount: 120,
      id: 1,
    },
    {
      rate: 9.5,
      review: 'This is just an example of how this text could be in a review!',
      author: 'Author',
      usefulCount: 200,
      totalCount: 320,
      id: 2,
    },
    {
      rate: 8.5,
      review: 'This is just an example of how this text could be in a review!',
      author: 'Author',
      usefulCount: 110,
      totalCount: 120,
      id: 3,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
