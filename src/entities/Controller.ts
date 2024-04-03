/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpResponse = {
  statusCode: string;
  data: any;
};

export type HttpController = {
  handle(body: any): Promise<HttpResponse>;
};
