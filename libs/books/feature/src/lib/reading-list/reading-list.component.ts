import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList } from '@tmo/books/data-access';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss'],
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store, private feature: FeatureService) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    this.feature.showMessage('Removed', item);
  }

  trackByList(index, item) {
    return item.bookId;
  }
}
