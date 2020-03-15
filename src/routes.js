import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import ProviderController from './app/controllers/ProviderController';
import SessionController from './app/controllers/SessionController';
import AppointmentController from './app/controllers/AppointmentController';
import FileController from './app/controllers/FileController';

import authMiddleare from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// ROTAS
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// middleware de autenticação
routes.use(authMiddleare);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', AppointmentController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
