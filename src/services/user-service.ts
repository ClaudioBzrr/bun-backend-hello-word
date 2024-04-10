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
      name: t.String(),
      password: t.String(),
    }),
  },
);

userService.get('/users', async ({ set }) => {
  try {
    await userController.findAll();
  } catch (err) {
    set.status = 404;
    return 'Erro ao buscar usuários';
  }
});
