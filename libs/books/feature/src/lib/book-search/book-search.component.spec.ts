import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedTestingModule } from '@tmo/shared/testing';

import { BooksFeatureModule } from '../books-feature.module';
import { BookSearchComponent } from './book-search.component';

describe('ProductsListComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, NoopAnimationsModule, SharedTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have <input> with placeholder "Search for books to add to your reading list"', () => {
    const inputElement: HTMLElement = fixture.nativeElement;
    const input = inputElement.querySelector('input')!;
    expect(input.placeholder).toEqual(
      'Search for books to add to your reading list'
    );
  });
  it('should have create <button>', () => {
    const buttonElement: HTMLElement = fixture.nativeElement;
    const button = buttonElement.querySelector('button')!;
    expect(button).toBeDefined();
  });
  it('should have <p> with "Try searching for a topic, for example "JavaScript"."', () => {
    const searchElement: HTMLElement = fixture.nativeElement;
    const p = searchElement.querySelector('p')!;
    expect(p.textContent).toEqual(
      ' Try searching for a topic, for example "JavaScript". '
    );
  });
});