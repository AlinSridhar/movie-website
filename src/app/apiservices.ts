import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservices {
  // "genres": [
  //   {
  //     "id": 28,
  //     "name": "Action"
  //   },
  //   {
  //     "id": 12,
  //     "name": "Abenteuer"
  //   },
  //   {
  //     "id": 16,
  //     "name": "Animation"
  //   },
  //   {
  //     "id": 35,
  //     "name": "Komödie"
  //   },
  //   {
  //     "id": 80,
  //     "name": "Krimi"
  //   },
  //   {
  //     "id": 99,
  //     "name": "Dokumentarfilm"
  //   },
  //   {
  //     "id": 18,
  //     "name": "Drama"
  //   },
  //   {
  //     "id": 10751,
  //     "name": "Familie"
  //   },
  //   {
  //     "id": 14,
  //     "name": "Fantasy"
  //   },
  //   {
  //     "id": 36,
  //     "name": "Historie"
  //   },
  //   {
  //     "id": 27,
  //     "name": "Horror"
  //   },
  //   {
  //     "id": 10402,
  //     "name": "Musik"
  //   },
  //   {
  //     "id": 9648,
  //     "name": "Mystery"
  //   },
  //   {
  //     "id": 10749,
  //     "name": "Liebesfilm"
  //   },
  //   {
  //     "id": 878,
  //     "name": "Science Fiction"
  //   },
  //   {
  //     "id": 10770,
  //     "name": "TV-Film"
  //   },
  //   {
  //     "id": 53,
  //     "name": "Thriller"
  //   },
  //   {
  //     "id": 10752,
  //     "name": "Kriegsfilm"
  //   },
  //   {
  //     "id": 37,
  //     "name": "Western"
  //   }
  // ]
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '01c734d6068388ea96f7134d1cbcf968';
  genres = new Map([
    [28, 'Action'],
    [12, 'Abenteuer'],
    [16, 'Animation'],
    [35, 'Komödie'],
    [80, 'Krimi'],
    [99, 'Dokumentarfilm'],
    [18, 'Drama'],
    [10751, 'Familie'], 
    [14, 'Fantasy'], 
    [36, 'Historie'], 
    [27, 'Horror'], 
    [10402, 'Musik'], 
    [9648, 'Mystery'], 
    [10749, 'Liebesfilm'], 
    [878, 'Science Fiction'], 
    [10770, 'TV-Film'], 
    [53, 'Thriller'], 
    [10752, 'Kriegsfilm'], 
    [37, 'Western']]);

  getPopularMovies() {
    const params = new HttpParams()
      .set('api_key', this.apiKey);

    return this.http.get(`${this.apiUrl}/movie/popular`, { params });
  }
  getCurrentlyRunningMovies() {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get(`${this.apiUrl}/movie/now_playing`, { params });
  }
  getTopRatedMovies(pgno:number) {
    const params = new HttpParams().set('api_key', this.apiKey).set('page', pgno.toString());
    return this.http.get(`${this.apiUrl}/movie/top_rated`, { params });
  }
  getGenre(id:number){
    return this.genres.get(id);
  }
}
