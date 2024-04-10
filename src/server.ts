import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@': `${__dirname}`,
});

import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import 'dotenv/config';
import { route } from './routes';

const port = process.env.SERVER_PORT || 3001;
const server = new Elysia();
server.use(route);
server.use(
  swagger({
    path: '/api-docs',
    documentation: { info: { title: 'Api Documentation', version: '1.0.0' } },
    autoDarkMode: true,
  }),
);

server.listen(port, () =>
  console.log(`Server running in ${server.server?.url}`),
);
