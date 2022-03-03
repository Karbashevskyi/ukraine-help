import {CheckersTool} from './checkers.tool';
import {ILocalStorage} from '../interfaces/app/local-storage.interface';
import {LocalStorageConst} from '@app/common/consts/app/local-storage.const';
import {environment} from '@src/environments/environment.prod';
import {User} from '@app/common/repositories/entities/user.model';
import {Asserts} from '@app/common/tools/asserts';

export class LocalStorageTool {

  /**
   *
   * @param object
   */
  public static remove(
    object: ILocalStorage
  ): void {

    localStorage.removeItem(this.getKey(environment.version, object.CURRENT, object?.DONT_CHECK_VERSION));

  }

  /**
   *
   * @param object
   * @param value
   * @param dontUseJsonEncode
   */
  public static set(
    object: ILocalStorage,
    value: any,
    dontUseJsonEncode: boolean = false
  ): void {

    if (dontUseJsonEncode) {

      localStorage.setItem(this.getKey(environment.version, object.CURRENT, object?.DONT_CHECK_VERSION), value);

    } else {

      localStorage.setItem(this.getKey(environment.version, object.CURRENT, object?.DONT_CHECK_VERSION), JSON.stringify(value));

    }

  }

  /**
   *
   * @param object
   * @param dontUseJsonDecode
   */
  public static get(
    object: ILocalStorage,
    dontUseJsonDecode: boolean = false
  ): any {

    Asserts.assertNotNullOrUndefined(object);

    if (object?.CHECKED === false) { // Don`t refactoring, it`s special check

      const result = this.mergePrevious(object.CURRENT, object.PREVIOUS, object.DONT_CHECK_VERSION, dontUseJsonDecode);

      object.CHECKED = true;

      if (CheckersTool.isNotNullOrUndefinedOrEmpty(result)) {

        return result;

      }

    }

    if (dontUseJsonDecode) {

      return localStorage.getItem(this.getKey(environment.version, object.CURRENT, object?.DONT_CHECK_VERSION));

    } else {

      let value = localStorage.getItem(this.getKey(environment.version, object.CURRENT, object?.DONT_CHECK_VERSION));

      try {

        value = JSON.parse(value);

      } catch (e) {

        value = null;

      }

      return value;

    }

  }

  /**
   *
   * @param prevVersionApp
   * @param currentName
   * @param withOutVersion
   */
  public static getKey(
    prevVersionApp: string,
    currentName: string,
    withOutVersion: boolean = false
  ): string {

    const key = `${currentName}{${environment.appName}}`;

    if (withOutVersion) {

      return key;

    }

    // TODO add check for user data and if is empty when try make request to server for getting the data of user.

    const userId: string = User.getData().id;

    return `[${prevVersionApp}]${key}-${userId}`;
  }

  /**
   *
   * @param currentName
   * @param previous
   * @param dontCheckVersion
   * @param dontUseJsonDecode
   * @private
   */
  private static mergePrevious(
    currentName: string,
    previous: string[],
    dontCheckVersion: boolean = false,
    dontUseJsonDecode: boolean = false
  ): any {

    let result = null;

    if (previous?.length > 0) {

      // Check prev names
      previous.forEach((prev) => {

        const item = localStorage.getItem(prev);

        if (CheckersTool.isNotNullOrUndefinedOrEmpty(item)) {

          result = item;

        }

        localStorage.removeItem(prev);

      });

      // Check prev version app
      let prevVersionAppList = this.get(LocalStorageConst.COMMON.PREV_VERSION_APP);

      if (CheckersTool.isNotNullOrUndefinedOrEmpty(prevVersionAppList)) {

        try {

          prevVersionAppList = JSON.parse(prevVersionAppList);

          if (!Array.isArray(prevVersionAppList)) {

            prevVersionAppList = [];

          }

        } catch (e) {

          prevVersionAppList = [];

        }

        prevVersionAppList.forEach((prevVersionApp) => {

          const key = this.getKey(prevVersionApp, currentName);

          const item = localStorage.getItem(key);

          if (CheckersTool.isNotNullOrUndefinedOrEmpty(item)) {

            result = item;
            localStorage.removeItem(key);

          }

        });

      }

      if (CheckersTool.isNotNullOrUndefinedOrEmpty(result)) {

        this.set({
          CURRENT: currentName,
          PREVIOUS: [],
          CHECKED: true,
          DONT_CHECK_VERSION: dontCheckVersion
        }, result, dontUseJsonDecode);

      }

    }

    return result;

  }

}
