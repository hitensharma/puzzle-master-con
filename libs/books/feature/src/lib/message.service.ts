import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  removeFromReadingList,
} from '@tmo/books/data-access';
import { Book, ReadingListItem } from '@tmo/shared/models';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private snackBar: MatSnackBar, private readonly store: Store) {}

  public showMessage(message: string, item): void {
    const snackBarRef = this.snackBar.open(message, 'Undo', {
      duration: 5000,
      panelClass: 'undo-dialog',
    });

    snackBarRef.onAction().subscribe(() => {
      const snackbarElement = document.getElementsByClassName(
        'mat-simple-snackbar'
      )[0];
      snackbarElement
        .getElementsByClassName('mat-button-base')[0]
        .setAttribute('data-testing', 'undo-button');
      item = JSON.parse(JSON.stringify(item));
      if (message === 'Book Added') {
        item.bookId = item.id;
        this.store.dispatch(removeFromReadingList({ item }));
      }
      if (message === 'Book Removed') {
        const book: Book = item;
        this.store.dispatch(addToReadingList({ book }));
      }
    });
  }
}
