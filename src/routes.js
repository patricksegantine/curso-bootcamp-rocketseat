import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Patrick Segantine',
    email: 'patricksegantine@gmail.com',
    password_hash: '12345678'
  });

  // return res.json({ message: 'Hello Patrick' });
  return res.json(user);
});

export default routes;
