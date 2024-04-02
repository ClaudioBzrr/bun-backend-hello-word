export type PasswordRepository = {
  hash: ({ password }: { password: string }) => Promise<string>;
  compare: ({
    password,
    hash,
  }: {
    password: string;
    hash: string;
  }) => Promise<boolean>;
};
