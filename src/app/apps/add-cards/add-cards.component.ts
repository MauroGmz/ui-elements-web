import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';

import { Photo } from '../../models/photo';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  //id: number;
  //url: string;
  flag: boolean;
  photo: Photo;
}

@Component({
  selector: 'app-add-cards',
  templateUrl: './add-cards.component.html',
  styleUrls: ['./add-cards.component.css']
})
export class AddCardsComponent {

  //id: number;
  //url: string;
  flag: boolean;

  @Input() photosArray: Photo[];
  @Output() data: EventEmitter<Photo[]> = new EventEmitter<Photo[]>();

  selectedPhoto: Photo = new Photo();

  constructor(public dialog: MatDialog) {}

  openDialog(photo: Photo) {

    this.openForEdit(photo);
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      //data: {id: this.selectedPhoto.id, url: this.selectedPhoto.url}
      data: {photo: this.selectedPhoto, flag: this.flag}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.flag = result;
      console.log(`Dialog result: ${result}`);
      if(this.flag)
        this.delete();
    });
    this.flag = false;
    this.data.emit([]);
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

  addDefault() {
    this.selectedPhoto.url = "https://material.angular.io/assets/img/examples/shiba2.jpg";
    if(this.selectedPhoto.id === 0) {
      this.selectedPhoto.id = this.photosArray.length + 1;
      this.photosArray.push(this.selectedPhoto);
    }
    this.selectedPhoto = new Photo();
    this.data.emit(this.photosArray);
  }

  delete() {
    // this is for an alert to appear before deleting
    /*
    if(confirm("Are you sure want to delete it?")) {
      this.photosArray = this.photosArray.filter(x => x != this.selectedPhoto);
      this.selectedPhoto = new Photo();
    }
    this.selectedPhoto = new Photo();
    */
    this.photosArray = this.photosArray.filter(x => x != this.selectedPhoto);
    for (let entry of this.photosArray) {
      console.log(entry);
    }
    this.selectedPhoto = new Photo();
  }


}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<AddCardsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
