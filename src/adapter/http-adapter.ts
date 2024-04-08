export type HttpAdapter = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handle: ({ data }: { data: any }) => Promise<void>;
};
