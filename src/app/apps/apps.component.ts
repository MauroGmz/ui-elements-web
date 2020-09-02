import { Component, OnInit } from '@angular/core';

import { Photo } from '../models/photo';


@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  photosArray: Photo[] = [];

  constructor() { }

  ngOnInit(): void {
  }



}
