import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservices } from '../../apiservices';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  movie:any;
  genres:any[]=[];

  constructor(private route:ActivatedRoute,private cdr:ChangeDetectorRef,private apiService:Apiservices) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(()=>{
      console.log(history.state.movie);
      if(history.state && history.state.movie){
        this.movie = history.state.movie;
      }
    })
    for(let i of this.movie.genre_ids){
      this.genres.push(this.getGenreName(i));
    }
    this.cdr.detectChanges();
  }
  getGenreName(id:number){
    console.log(this.apiService.getGenre(id));
    return this.apiService.getGenre(id);
    
    this.cdr.detectChanges();
  }
}
