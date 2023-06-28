import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { movieService } from '../../services/movie-service';
import { movie } from '../../interfaces/interface-movie';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {


  constructor(
    private movieService: movieService
  ) { }
  movies !: movie;

  title : string | undefined;
  anio : string | undefined;
  haveError: boolean = false;

  search(formValue: any) {
    // capture the valors
    const title = formValue.title;
    const anio = formValue.anio;
    this.haveError = false;


    this.movieService.getmovieSearch( title, anio )
    .subscribe( movie =>{
     // console.log( movie );
      this.movies = movie;
      this.haveError = false;

      // this.valueResponse.emit( movie );
      
    }, (err) => {
      this.haveError = true;
      // this.movies = this.movie
      //this.movies = false; 
      //console.info(err);
    });

  }



}
