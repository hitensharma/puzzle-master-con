import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tmo/shared/testing';

import { ReadingListComponent } from './reading-list.component';
import { BooksFeatureModule } from '@tmo/books/feature';

describe('ReadingListComponent', () => {
  let component: ReadingListComponent;
  let fixture: ComponentFixture<ReadingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <p> with "You haven\'t added any books to your reading list yet."', () => {
    const readElement: HTMLElement = fixture.nativeElement;
    const p = readElement.querySelector('p')!;
    expect(p.textContent).toEqual(
      "You haven't added any books to your reading list yet."
    );
  });
});