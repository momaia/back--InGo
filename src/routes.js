import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import SessaoController from './controllers/SessaoController';
import PropostaController from './controllers/PropostaController';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessoes', SessaoController.store);

routes.post('/propostas', upload.single('arquivo'), PropostaController.store);
routes.get('/propostas/:numero', PropostaController.index);
routes.get('/propostas', PropostaController.indexAll);
routes.put('/propostas/:proposta_id', PropostaController.update);
routes.delete('/propostas/:proposta_id', PropostaController.delete);

export default routes;