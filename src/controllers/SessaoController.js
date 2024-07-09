import Usuario from "../models/Usuario";

class SessaoController {
  async store(req, res) {
    const { email, codigo } = req.body;

    let usuario = await Usuario.findOne({ email });

    if (!usuario) {
      usuario = await Usuario.create({
        email: email,
        codigo: codigo,
      });
    }

    return res.json(usuario);
  }
}

export default new SessaoController();
