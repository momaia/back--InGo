import { Router } from 'express';
import SessaoController from './controllers/SessaoController';
import PropostaController from './controllers/PropostaController';

const routes = new Router();

routes.post('/sessoes', SessaoController.store);
routes.post('/propostas', PropostaController.store);

export default routes;