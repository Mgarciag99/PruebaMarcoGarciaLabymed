import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from '../interfaces/interface-movie';

@Injectable({
  providedIn: 'root'
})

export class movieService {
  private apiUrl: string = 'http://www.omdbapi.com/?apikey=40b90072';
  constructor( private http: HttpClient ) {}


  getmovieSearch( title: string, year: string ) : Observable<movie>{
    const url = `${ this.apiUrl }&t=${ title }&y=${ year }`;
    return this.http.get<movie>( url );
  }

  getmovieSearchByTitle( title: string ) : Observable<movie>{
    const url = `${ this.apiUrl }&t=${ title }`;
    return this.http.get<movie>( url );
  }
}