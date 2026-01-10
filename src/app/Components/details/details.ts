import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  movie:any;
  constructor(private route:ActivatedRoute,private cdr:ChangeDetectorRef) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(()=>{
      console.log(history.state.movie);
      if(history.state && history.state.movie){
        this.movie = history.state.movie;
      }
    })
    this.cdr.detectChanges();
  }

}
