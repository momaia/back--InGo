import Cliente from "../models/Cliente";

class ClienteController {
    async indexAll(req, res) {
        const clientes = await Cliente.find();

        return res.json(clientes);
    }

    async index(req, res) {
        const { cliente_id } = req.params;

        const cliente = await Cliente.findById(cliente_id);

        return res.json(cliente);
    }

    async store(req, res) {
        const { nome, data_nascimento, documento, empregador, telefone } =
            req.body;

        const cliente = await Cliente.create({
            nome: nome,
            data_nascimento: data_nascimento,
            documento: documento,
            empregador: empregador,
            telefone: telefone,
        });

        return res.json(cliente);
    }
}

export default new ClienteController();
