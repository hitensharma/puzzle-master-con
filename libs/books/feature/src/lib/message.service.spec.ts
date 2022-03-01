import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MessageService } from './message.service';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, StoreModule.forRoot({})],
      providers: [MessageService, Store],
    });
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
