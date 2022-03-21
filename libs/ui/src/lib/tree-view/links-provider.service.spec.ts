import { TestBed } from '@angular/core/testing';

import { LinksProviderService } from './links-provider.service';

describe('LinksProviderService', () => {
  let service: LinksProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinksProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
