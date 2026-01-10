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
  i:number = 2;
  ngOnInit(): void {
    this.apiService.getTopRatedMovies(1).subscribe((data:any) => {
      this.movies = data.results;
      this.cdr.detectChanges();
    });
    
  }
  nextpage(){
    this.apiService.getTopRatedMovies(this.i).subscribe((data:any) => {
      if(data.results.length==0){
        alert("No more pages available");
        return;
      }
      console.log("before next",this.i);
      this.movies = data.results;
      this.i++;
      console.log("after next",this.i);
      this.cdr.detectChanges();
    });
  }
  previouspage(){
    console.log("inside previous",this.i);
    if(this.i>2){
      console.log("before previous",this.i);
    this.i = this.i-2;
    this.apiService.getTopRatedMovies(this.i).subscribe((data:any) => {
      this.movies = data.results;
      console.log("after previous",this.i);
      this.i++;
      this.cdr.detectChanges();
    });
  }
  else{
    alert("There are no previous pages");
  }
}
  viewmoviedetails(movie:any){
    this.route.navigate(['/movies',movie.id],{state:{movie}});
  }
}
