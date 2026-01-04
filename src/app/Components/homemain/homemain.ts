import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservices } from '../../apiservices';

@Component({
  selector: 'app-homemain',
  imports: [],
  templateUrl: './homemain.html',
  styleUrl: './homemain.css',
})
export class Homemain {
  constructor(private apiService: Apiservices,private cdr:ChangeDetectorRef) {}
  movie1 :string = '';
  movie2 :string = '';
  movie3 :string = '';

  ngOnInit(): void {
    this.apiService.getPopularMovies().subscribe((data:any) => {
      this.movie1 = "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;
      this.movie2 = "https://image.tmdb.org/t/p/w500" + data.results[1].poster_path;
      this.movie3 = "https://image.tmdb.org/t/p/w500" + data.results[2].poster_path;
      this.cdr.detectChanges();
    });
  }
}
