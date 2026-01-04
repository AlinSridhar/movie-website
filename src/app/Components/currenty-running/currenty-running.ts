import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apiservices } from '../../apiservices';

@Component({
  selector: 'app-currenty-running',
  imports: [],
  templateUrl: './currenty-running.html',
  styleUrl: './currenty-running.css',
})
export class CurrentyRunning implements OnInit {
  constructor(private apiService: Apiservices,private cdr:ChangeDetectorRef) {}
  movies:any[] =[];

  ngOnInit(): void {
    this.apiService.getCurrentlyRunningMovies().subscribe((data:any) => {
      this.movies[0] = data.results[0];
      this.movies[1] = data.results[1];
      this.movies[2] = data.results[2];
      this.movies[3] = data.results[3];
      this.movies[4] = data.results[4];
      // this.movies[5] = data.results[5];
      this.cdr.detectChanges();
    });
  }
}
