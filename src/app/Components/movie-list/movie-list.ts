import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apiservices } from '../../apiservices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit{
  constructor(private apiService: Apiservices,private cdr: ChangeDetectorRef,private route:Router) {}
  movies:any[] =[];

  ngOnInit(): void {
    this.apiService.getTopRatedMovies(1).subscribe((data:any) => {
      this.movies = data.results;
    });

    this.apiService.getTopRatedMovies(2).subscribe((data:any) => {
      this.movies = this.movies.concat(data.results);
      this.cdr.detectChanges();
    });
    
  }
  viewmoviedetails(movie:any){
    this.route.navigate(['/movies',movie.id],{state:{movie}});
  }
}
