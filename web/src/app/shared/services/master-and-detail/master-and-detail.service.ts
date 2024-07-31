import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class MasterAndDetailService {
  public showDetail = new BehaviorSubject<boolean>(false);

  setShowDetail(newValue: boolean) {
    this.showDetail.next(newValue);
  }

  getShowDetail() {
    return this.showDetail.asObservable();
  }
}
