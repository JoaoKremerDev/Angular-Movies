import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css'],
})
export class DetailsMoviesComponent implements OnInit {
  similarMovies: any[] = [
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie Title',
      rate: 9.5,
    },
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie Title',
      rate: 9.5,
    },
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie Title',
      rate: 9.5,
    },
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie Title',
      rate: 9.5,
    },
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie Title',
      rate: 9.5,
    },
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie Title',
      rate: 9.5,
    },

  ];
  constructor() {}

  ngOnInit(): void {}
}
