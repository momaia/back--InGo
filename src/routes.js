import { Router } from "express";

import SessaoController from "./controllers/SessaoController";
import ClienteController from "./controllers/ClienteController";
import PropostaController from "./controllers/PropostaController";
import DashBoardController from "./controllers/DashBoardController";

const routes = new Router();

routes.post("/sessoes", SessaoController.store);

routes.get("/clientes", ClienteController.indexAll);
routes.get("/clientes/:cliente_id", ClienteController.index);
routes.post("/clientes/", ClienteController.store);

routes.get("/propostas", PropostaController.indexAll);
routes.get("/propostas/:proposta_id", PropostaController.index);
routes.post("/propostas", PropostaController.store);
routes.put("/propostas/:proposta_id", PropostaController.update);
routes.delete("/propostas/:proposta_id", PropostaController.delete);

routes.get("/dashboard", DashBoardController.show);

export default routes;
