import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceApiService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://api.rawg.io/api';
  apiKey = '47867e219feb47bfb2c383557f1b3781';

  // Most Popular Games
  mostPopular(pageSize: number = 6): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/games?key=${this.apiKey}&page_size=${pageSize}`
    );
  }

  // Detail Games
  gameDetails(data: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/games/${data}?key=${this.apiKey}`);
  }

  // Trailer games
  gameTrailer(data: any, pageSize: number = 1): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/games/${data}/movies?key=${this.apiKey}&pageSize=${pageSize}`
    );
  }

  // Other methods
  gameOther(page: number = 2, pageSize: number = 6): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/games?key=${this.apiKey}&page=${page}&page_size=${pageSize}`
    );
  }

  // Top Rating
  gameRating(pageSize: number = 3): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/games?key=${this.apiKey}&ordering=-rating&page_size=${pageSize}`
    );
  }

  //search
  searchGame(data: any): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/games?key=${this.apiKey}&search=${data.gameName}`
    );
  }

  // View more
  viewMore(): Observable<any> {
    return this.http.get(`${this.apiUrl}/games?key=${this.apiKey}`);
  }
}
