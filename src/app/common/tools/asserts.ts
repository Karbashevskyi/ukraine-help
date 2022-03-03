import {CheckersTool} from './checkers.tool';

export class Asserts {

  /**
   *
   * @param input
   */
  public static assertString(input: any): asserts input is string {
    if (typeof input !== 'string') {
      throw new Error('Input must be a string!');
    }
  }

  /**
   *
   * @param input
   */
  public static assertNumber(input: any): asserts input is number {
    if (typeof input !== 'number') {
      throw new Error('Input must be a number!');
    }
  }

  /**
   *
   * @param input
   */
  public static assertBoolean(input: any): asserts input is boolean {
    if (typeof input !== 'boolean') {
      throw new Error('Input must be a boolean!');
    }
  }

  /**
   *
   * @param input
   */
  public static assertNotNullOrUndefined(input: any) {
    if (CheckersTool.isNullOrUndefined(input)) {
      throw new Error('Input must be not null or undefined!');
    }
  }
}
