import type { IAutogen } from './Autogen';

export type IRepository<T> = {
  create: (data: Omit<T, keyof IAutogen>) => Promise<T>;
  findOne: (filter: Partial<T>) => Promise<T>;
  findAll: (filter?: Partial<T>) => Promise<T[]>;
  update: (
    filter: Partial<T>,
    data: Partial<Omit<T, keyof IAutogen>>,
  ) => Promise<void>;
  delete: (filter: Partial<T>) => Promise<void>;
};
