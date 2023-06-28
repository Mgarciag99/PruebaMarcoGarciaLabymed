import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesIndexComponent } from './movies/pages/movies-index/movies-index.component';
import { SeeMovieComponent } from './movies/pages/see-movie/see-movie.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesIndexComponent,
    pathMatch: 'full'
  },

  {
    path: 'movie/:id',
    component: SeeMovieComponent
  },
  {
    path: '**',
    redirectTo: ''
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }