import { Component, Input, OnInit } from '@angular/core';
import { movie } from '../../interfaces/interface-movie';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() movies!: movie;

  constructor() { }

  ngOnInit(): void {
  }
}
