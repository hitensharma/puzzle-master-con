import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  getReadingList,
  removeFromReadingList,
} from '@tmo/books/data-access';
import { Book, ReadingListItem } from '@tmo/shared/models';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  constructor(private snackBar: MatSnackBar, private readonly store: Store) {}

  public showMessage(message: string, item): void {
    // this.snackBar._openedSnackBarRef.dismiss();
    let snackBarRef = this.snackBar.open(message, 'Undo', {
      duration: 60000,
      panelClass: 'undo-dialog',
    });

    snackBarRef.onAction().subscribe(() => {
      let snackbarElement = document.getElementsByClassName(
        'mat-simple-snackbar'
      )[0];
      snackbarElement
        .getElementsByClassName('mat-button-base')[0]
        // .setAttribute('data-testing', 'remove-from-read');
        .setAttribute('data-testing', 'undo-button');
      item = JSON.parse(JSON.stringify(item));
      if (message==="Added") {
        item.bookId = item.id;
        this.store.dispatch(removeFromReadingList({ item }));
      } 
      if (message==="Removed") {
        let book: Book=item;
        this.store.dispatch(addToReadingList({ book }));
      }
    });
  }
}