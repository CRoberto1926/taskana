import { of } from 'rxjs';

import { Injectable } from '@angular/core';
import { DomainService } from 'app/shared/services/domain/domain.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class DomainGuard  {
  constructor(private domainService: DomainService) {}

  canActivate() {
    return this.domainService.getDomains().pipe(
      map(() => true),
      catchError(() => {
        return of(false);
      })
    );
  }
}
