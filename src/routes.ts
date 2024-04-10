import { Elysia } from 'elysia';
import { userService } from '@/services/user-service';

export const route = new Elysia();

route.use(userService);
