import { Elysia, t } from 'elysia';
import { UserController } from '@/controllers/user-controller';

export const userService = new Elysia();
const userController = new UserController();

userService.post(
  '/create-user',
  async ({ body, set }) => {
    try {
      return await userController.create(body);
    } catch (err) {
      set.status = 404;
      return err;
    }
  },
  {
    body: t.Object({
      email: t.String({ format: 'email', error: 'Email inválido' }),
      name: t.String({ error: 'É necessário informar um nome' }),
      password: t.String({ error: 'É necessário informar uma senha' }),
    }),
  },
);

userService.get('/users', async ({ set }) => {
  try {
    return await userController.findAll();
  } catch (err) {
    set.status = 404;
    return 'Erro ao buscar usuários';
  }
});

userService.put(
  '/user/:id',
  async ({ body, params, set }) => {
    try {
      await userController.update({
        data: body,
        filter: { id: params.id },
      });
      return 'Usuário atualizado com sucesso';
    } catch (err) {
      set.status = 404;
      return 'Erro ao atualizar usuário';
    }
  },
  {
    body: t.Object({
      email: t.String({ format: 'email', error: 'Email inválido' }),
      name: t.String({ error: 'É necessário informar um nome' }),
      password: t.String({ error: 'É necessário informar uma senha' }),
    }),
    params: t.Object({
      id: t.String({ error: 'Id inválido' }),
    }),
  },
);

userService.delete(
  '/user/:id',
  async ({ params, set }) => {
    try {
      await userController.delete({ id: params.id });
      return 'Usuário deletado com sucesso';
    } catch (err) {
      set.status = 404;
      return 'Erro ao deletar usuário';
    }
  },
  {
    params: t.Object({
      id: t.String({ error: 'Id inválido' }),
    }),
  },
);
