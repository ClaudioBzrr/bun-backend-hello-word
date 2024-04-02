import { Elysia } from 'elysia';
import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@': `${__dirname}`,
  '@entities': `${__dirname}/entities`,
  '@repositories': `${__dirname}/repositories`,
  '@use-cases': `${__dirname}/use-cases`,
});

const port = '3000';
const server = new Elysia();

server.listen(port, () => console.log(`Server listening on port ${port}`));
