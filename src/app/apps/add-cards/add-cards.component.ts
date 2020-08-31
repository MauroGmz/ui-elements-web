import { Component, OnInit } from '@angular/core';

import { Photo } from '../../models/photo';

@Component({
  selector: 'app-add-cards',
  templateUrl: './add-cards.component.html',
  styleUrls: ['./add-cards.component.css']
})
export class AddCardsComponent {

  photosArray: Photo[] = [
    {id: 1, url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {id: 2, url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {id: 3, url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {id: 4, url: "https://material.angular.io/assets/img/examples/shiba2.jpg"}
  ];

  selectedPhoto: Photo = new Photo();

  openForEdit(photo: Photo) {
    this.selectedPhoto = photo;
  }

  addOrEdit() {
    if(this.selectedPhoto.id === 0) {
      this.selectedPhoto.id = this.photosArray.length + 1;
      this.photosArray.push(this.selectedPhoto);
    }
    this.selectedPhoto = new Photo();
  }

  delete() {
    if(confirm("Are you sure want to delete it?")) {
      this.photosArray = this.photosArray.filter(x => x != this.selectedPhoto);
      this.selectedPhoto = new Photo();
    }
  }

}
