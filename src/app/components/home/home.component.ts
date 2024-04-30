import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  isVisible = true;

  topMovies: any[] = [
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie #1 Title',
      actors: 'Movie #1 Actors',
      year: '2023',
      rate: '9.5',
      rank: 1,
    },
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie #3 Title',
      actors: 'Movie #3 Actors',
      year: '2023',
      rate: '9.2',
      rank: 3,
    },
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie #4 Title',
      actors: 'Movie #4 Actors',
      year: '2023',
      rate: '9.2',
      rank: 4,
    },
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie #2 Title',
      actors: 'Movie #1 Actors',
      year: '2023',
      rate: '9.2',
      rank: 4,
    },
  ];

  fanFavoriteMovies: any[] = [
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie #1 Title',
      actors: 'Movie #1 Actors',
      year: '2023',
      rate: '9.5',
      rank: 1,
    },
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie #3 Title',
      actors: 'Movie #3 Actors',
      year: '2023',
      rate: '9.2',
      rank: 3,
    },
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie #4 Title',
      actors: 'Movie #4 Actors',
      year: '2023',
      rate: '9.2',
      rank: 4,
    },
    {
      imageUrl: '../../../assets/images/pic.jpg',
      title: 'Movie #2 Title',
      actors: 'Movie #1 Actors',
      year: '2023',
      rate: '9.2',
      rank: 4,
    },
  ];

  ngOnInit(): void {}
}
