import {Injectable} from '@angular/core';
import {TargetEnum} from '@app/common/enums/target.enum';
import {Observable, ReplaySubject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {CheckersTool} from '@app/common/tools/checkers.tool';

export interface TargetCardInterface {
  title: string;
  subtitle: string;
};

export type TargetCardList = TargetCardInterface[];

@Injectable({
  providedIn: 'root'
})
export class TargetServiceApp {

  #selectedTarget: TargetEnum = null;

  public readonly cardList: TargetCardList = [];
  public readonly rootOfTranslate: string = 'pages.target';
  public readonly rootOfCardListTranslate: string = `${this.rootOfTranslate}.cards`;

  private readonly targetCardListSource$: ReplaySubject<TargetCardList> = new ReplaySubject<TargetCardList>(1);

  constructor(
    private readonly translateService: TranslateService
  ) {
  }


  public get cardList$(): Observable<TargetCardList> {
    return this.targetCardListSource$.asObservable();
  }

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

  public updateSource(): void {


    this.resetCardList();

    const cardList: TargetCardInterface[] = this.translateService.instant(`${this.rootOfCardListTranslate}.${this.#selectedTarget}`);

    if (CheckersTool.isNotNullOrUndefinedOrEmpty(cardList)) {

      this.cardList.push(...Object.values(cardList));
      this.targetCardListSource$.next(this.cardList);

    }

    console.log(this.cardList);


  }

  private resetCardList(): void {
    this.cardList.length = 0;
  }

}
