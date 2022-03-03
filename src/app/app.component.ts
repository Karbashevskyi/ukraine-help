import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DefaultLangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Reactive} from '@app/common/cdk/reactive';
import {CheckersTool} from '@app/common/tools/checkers.tool';
import { LocalStorageTool } from '@app/common/tools/local-storage.tool';
import {LocalStorageConst} from '@app/common/consts/app/local-storage.const';
import {LanguageEnum} from '@app/common/enums/app/language.enum';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent extends Reactive implements OnInit {
  constructor(
    private readonly translateService: TranslateService
  ) {

    super();
  }

  ngOnInit(): void {

    this.checkTranslate();

  }

  /**
   *
   * @private
   */
  private checkTranslate(): void {
    let languageCode: string = LocalStorageTool.get(LocalStorageConst.COMMON.LANGUAGE_CODE, false);
    this.translateService.addLangs(Object.values(LanguageEnum));
    if (CheckersTool.isNullOrUndefinedOrEmpty(languageCode)) {
      languageCode = LanguageEnum.UA;
      LocalStorageTool.set(LocalStorageConst.COMMON.LANGUAGE_CODE, languageCode, false);
    }
    this.translateService.setDefaultLang(languageCode);
    this.translateService.onDefaultLangChange.pipe(this.takeUntil()).subscribe((result: DefaultLangChangeEvent) => {
      LocalStorageTool.set(LocalStorageConst.COMMON.LANGUAGE_CODE, result.lang);
    });
  }

}
