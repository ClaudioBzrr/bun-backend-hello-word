import type { Context } from 'elysia';
import type { HttpAdapter } from './http-adapter';

export class ElysiahttpAdapte implements HttpAdapter {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async handle({ data }: { data: any }): Promise<void> {
    async (context: Context) => {
      context.body = data;
      return data;
    };
  }
}
