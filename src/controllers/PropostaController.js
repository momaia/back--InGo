import Proposta from "../models/Proposta";
import Usuario from "../models/Usuario";

class PropostaController {
  async indexAll(req, res) {
    const propostas = await Proposta.find();

    return res.json(propostas);
  }

  async index(req, res) {
    const { numero } = req.params;

    const propostas = await Proposta.find({ numero });

    return res.json(propostas);
  }

  async store(req, res) {
    const { arquivo } = req.file;
    const { usuario_id } = req.headers;
    const { numero, status, tipo } = req.body;

    const proposta = await Proposta.create({
      arquivo: arquivo,
      numero: numero,
      status: status,
      tipo: tipo,
      usuario: usuario_id
    });

    return res.json(proposta);
  }

  async update(req, res) {
    const { usuario_id } = req.headers;
    const { proposta_id } = req.params;
    const { status, tipo } = req.body;
    
    const proposta = await Proposta.findById(proposta_id);
    const usuario = await Usuario.findById(usuario_id);

    if(String(proposta.usuario) !== String(usuario._id)){
      return res.status(401).json({error: 'Não autorizado'});
    }

    await Proposta.updateOne(
      { _id: proposta_id },
      {
        status: status,
        tipo: tipo,
      }
    );

    return res.send();
  }

  async delete(req, res) {
    const { proposta_id } = req.params;
    const { usuario_id } = req.headers;

    const proposta = await Proposta.findById(proposta_id);
    const usuario = await Usuario.findById(usuario_id);

    if(String(proposta.usuario) !== String(usuario._id)){
      return res.status(401).json({error: 'Não autorizado'});
    }

    await Proposta.findByIdAndDelete(proposta_id);

    return res.json({ message: 'Proposta deletada com sucesso!' });
  }
}

export default new PropostaController();
