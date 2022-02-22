import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BooksDataAccessModule } from '@tmo/books/data-access';
import { BookSearchComponent } from './book-search/book-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TotalCountComponent } from './total-count/total-count.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { MaterialModule } from './material.module';
import { FeatureService } from './feature.service';

const EXPORTS = [
  BookSearchComponent,
  TotalCountComponent,
  ReadingListComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: BookSearchComponent },
    ]),
    BooksDataAccessModule,
    MaterialModule,
  ],
  exports: [...EXPORTS],
  declarations: [...EXPORTS],
  providers:[FeatureService]
})
export class BooksFeatureModule {}
