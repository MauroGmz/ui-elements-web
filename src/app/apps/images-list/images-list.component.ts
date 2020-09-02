import { Component, OnInit, Input } from '@angular/core';

import { Photo } from '../../models/photo';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {
  @Input() photosArray: Photo[];

  constructor() { }

  ngOnInit(): void {
  }

  lengthView() {
    console.log(this.photosArray.length);
  }

}
