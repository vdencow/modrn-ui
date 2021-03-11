import { TestBed } from '@angular/core/testing';

import { ModrnUiService } from './modrn-ui.service';

describe('ModrnUiService', () => {
  let service: ModrnUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModrnUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
