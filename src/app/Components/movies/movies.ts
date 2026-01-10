import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apiservices } from '../../apiservices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies implements OnInit {
  constructor(private apiService: Apiservices,private cdr:ChangeDetectorRef,private route:Router) {}
  movies:any[] =[];

  ngOnInit(): void {
    this.apiService.getPopularMovies().subscribe((data:any) => {
      this.movies = data.results;
      this.cdr.detectChanges();
    });
  }
  viewmoviedetails(movie:any){
    this.route.navigate(['/movies',movie.id],{state:{movie}});
  }
}
