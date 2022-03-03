import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Route} from '@angular/router';
import {Reactive} from '@app/common/cdk/reactive';
import {CheckersTool} from '@app/common/tools/checkers.tool';
import {TargetEnum} from '@app/common/enums/target.enum';
import {OfferListInterface, TargetServiceApp} from '@app/common/services/app/target/target.service.app';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-target',
  templateUrl: './target.page.html',
  styleUrls: ['./target.page.scss'],
})
export class TargetPage extends Reactive implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly targetServiceApp: TargetServiceApp,
  ) {
    super();
  }

  public get selectedTarget(): TargetEnum {

    return this.targetServiceApp.getSelectedTarget();

  }

  public get offerList$(): Observable<OfferListInterface> {

    return this.targetServiceApp.offerList$.pipe(this.takeUntil()) as Observable<OfferListInterface>;

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
