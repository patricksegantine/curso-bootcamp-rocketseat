import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided.' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // inclui a propriedade com o id do usuário do objeto req
    // para ser usado em qualquer controller
    req.userId = decoded.id;

    return next();
  } catch (error) {
    res.status(401).json({ error: 'Token invalid' });
  }
};
