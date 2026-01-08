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
      this.movies = data.results;
      this.cdr.detectChanges();
    });
  }
}
