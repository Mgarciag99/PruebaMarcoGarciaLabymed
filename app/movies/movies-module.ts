import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//movies COMPONENTS
import { MoviesIndexComponent } from './pages/movies-index/movies-index.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ListComponent } from './components/list/list.component'; 
import { SeeMovieComponent } from './pages/see-movie/see-movie.component';

//movies SHARED
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [

    MoviesIndexComponent,
    SearchInputComponent,
    ListComponent,
    SeeMovieComponent

  ],
  exports: [

    MoviesIndexComponent,
    SearchInputComponent,
    ListComponent,
    SeeMovieComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ]
})
export class movieModule { }