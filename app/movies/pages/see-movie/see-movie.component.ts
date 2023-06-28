import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieService } from '../../services/movie-service';
import { movie } from '../../interfaces/interface-movie';
@Component({
  selector: 'app-see-movie',
  templateUrl: './see-movie.component.html',
  styleUrls: ['./see-movie.component.css']
})
export class SeeMovieComponent  implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: movieService
  ) { }

    movies !: movie;


  ngOnInit(): void {

    this.activatedRoute.params
    .subscribe( ({ id })=>{
      this.movieService.getmovieSearchByTitle( id )
        .subscribe( movie => {
          this.movies = movie;
        } )
      } );
  
    }
}
