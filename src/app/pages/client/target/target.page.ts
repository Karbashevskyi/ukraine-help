import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params, Route} from '@angular/router';
import {Reactive} from '@app/common/cdk/reactive';
import {CheckersTool} from '@app/common/tools/checkers.tool';
import {TargetEnum} from '@app/common/enums/target.enum';
import {Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {TargetCardList, TargetServiceApp} from '@app/common/services/app/target/target.service.app';


@Component({
  selector: 'app-target',
  templateUrl: './target.page.html',
  encapsulation: ViewEncapsulation.None
})
export class TargetPage extends Reactive implements OnInit {

  constructor(
    private readonly translateService: TranslateService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly targetServiceApp: TargetServiceApp,
  ) {
    super();
  }

  public get selectedTarget(): TargetEnum {

    return this.targetServiceApp.getSelectedTarget();

  }

  public get cardList$(): Observable<TargetCardList> {

    return this.targetServiceApp.cardList$.pipe(this.takeUntil()) as Observable<TargetCardList>;

  }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(this.takeUntil()).subscribe((params: Params) => this.setTarget(params));

  }

  /**
   *
   * @param params
   * @private
   */
  private setTarget(params: Params): void {

    const target: string = params?.target;
    if (CheckersTool.isNotNullOrUndefinedOrEmpty(target)) {

      this.targetServiceApp.setSelectedTarget(+target);
      this.targetServiceApp.updateSource();

    }

  }

}
