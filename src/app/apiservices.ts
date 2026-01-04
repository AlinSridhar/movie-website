import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservices {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '01c734d6068388ea96f7134d1cbcf968';
  getPopularMovies() {
    const params = new HttpParams()
      .set('api_key', this.apiKey);

    return this.http.get(`${this.apiUrl}/movie/popular`, { params });
  }
}
