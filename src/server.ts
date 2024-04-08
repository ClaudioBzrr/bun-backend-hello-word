import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@': `${__dirname}`,
  '@entities': `${__dirname}/entities`,
  '@repositories': `${__dirname}/repositories`,
  '@use-cases': `${__dirname}/use-cases`,
});

import { Elysia } from 'elysia';
import 'dotenv/config';
import { route } from './routes';

const port = process.env.SERVER_PORT || 3001;
const server = new Elysia();
server.use(route);

server.listen(port, () => console.log(`Server listening on port ${port}`));
