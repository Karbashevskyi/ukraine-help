import {CheckersTool} from '@app/common/tools/checkers.tool';

export interface IUser {

  id?: string;
  login?: string;
  password?: string;
  token?: string;
  firstName?: string;
  lastName?: string;
  email?: string;

}

export class User implements IUser {

  constructor(
    public id?: string,
    public login?: string,
    public token?: string,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public password?: string,
  ) {
  }

  public static get emptyUser(): User {
    return new User();
  }

  public static getData(): User {
    return this.data;
  }

  public static setData(value: IUser): void {
    this.data = this.create(value);
  }

  public static dataIsEmpty(): boolean {
    return CheckersTool.isNullOrUndefinedOrEmpty(this.getData());
  }

  public static create(event: IUser): User {
    return event;
  }

  private static data: User;

}
