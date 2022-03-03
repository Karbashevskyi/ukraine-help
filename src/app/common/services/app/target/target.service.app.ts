import {Injectable} from '@angular/core';
import {TargetEnum} from '@app/common/enums/target.enum';
import {Observable, ReplaySubject} from 'rxjs';

interface OfferInterface {
  title: string;
  url: string;
}

export interface OfferListInterface {
  list: OfferInterface[];
}

type TargetSourceType = Record<TargetEnum, OfferListInterface>;

@Injectable({
  providedIn: 'root'
})
export class TargetServiceApp {

  #selectedTarget: TargetEnum = null;

  private readonly source: TargetSourceType = {
    [TargetEnum.NEED_HELP]: {
      list: [
        {
          title: 'Room',
          url: '123'
        },
        {
          title: 'Food',
          url: '123'
        },
        {
          title: 'Contacts',
          url: '123'
        }
      ]
    },
    [TargetEnum.TO_HELP]: {
      list: [
        {
          title: 'Room',
          url: '123'
        },
        {
          title: 'Food',
          url: '123'
        },
        {
          title: 'Stuff',
          url: '123'
        },
        {
          title: 'Transport',
          url: '123'
        },
        {
          title: 'Money',
          url: '123'
        },
        {
          title: 'Other',
          url: '123'
        }
      ]
    }
  };

  private readonly offerListSource$: ReplaySubject<OfferListInterface> = new ReplaySubject<OfferListInterface>(1);

  public getSelectedTarget(): TargetEnum {
    return this.#selectedTarget;
  }

  /**
   *
   * @param value
   */
  public setSelectedTarget(value: TargetEnum) {
    this.#selectedTarget = value;
  }

  public get offerList$(): Observable<OfferListInterface> {
    return this.offerListSource$.asObservable();
  }

  public updateSource(): void {

    this.offerListSource$.next(this.source[this.#selectedTarget]);

  }

}
