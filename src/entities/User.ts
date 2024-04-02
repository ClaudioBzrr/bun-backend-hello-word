import type { IAutogen } from './Autogen';

export type IUser = IAutogen & {
  name: string;
  email: string;
  password: string;
};

export type ICreateUserPayload = Omit<IUser, keyof IAutogen>;
