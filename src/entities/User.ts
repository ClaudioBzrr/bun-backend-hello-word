import type { IAutogen } from './Autogen';

export type IUser = IAutogen & {
  name: string;
  email: string;
  password: string;
};

export type ICreateUserPayload = Omit<IUser, keyof IAutogen>;
export type IFilterUserPayload = Omit<IUser, 'password'>;
export type IUpdatedUserPayload = {
  filter: IFilterUserPayload;
  data: Partial<ICreateUserPayload>;
};
