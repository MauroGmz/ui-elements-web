import { Component, OnInit } from '@angular/core';

import { Photo } from '../../models/photo';

import { MatDialog } from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog) {}

  openDialog(photo: Photo) {

    this.openForEdit(photo);
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

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

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
