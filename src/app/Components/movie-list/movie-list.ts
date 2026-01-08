import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apiservices } from '../../apiservices';

@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit{
  constructor(private apiService: Apiservices,private cdr: ChangeDetectorRef) {}
  movies:any[] =[];

  ngOnInit(): void {
    this.apiService.getTopRatedMovies(1).subscribe((data:any) => {
      this.movies = data.results;
      console.log(this.movies);
    });

    this.apiService.getTopRatedMovies(2).subscribe((data:any) => {
      this.movies = this.movies.concat(data.results);
      console.log(this.movies);
      this.cdr.detectChanges();
    });
    
  }
}
