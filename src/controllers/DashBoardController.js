import Proposta from "../models/Proposta";

class DashBoardController {
  async show(req, res) {
    const { usuario_id } = req.headers;

    const propostas = await Proposta.find({ usuario: usuario_id });

    return res.json(propostas);
  }
}

export default new DashBoardController();
