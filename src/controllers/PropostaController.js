import Proposta from "../models/Proposta";
import Usuario from "../models/Usuario";
import Cliente from "../models/Cliente";
import * as yup from "yup";

class PropostaController {
    async indexAll(req, res) {
        const propostas = await Proposta.find();

        return res.json(propostas);
    }

    async index(req, res) {
        const { proposta_id } = req.params;

        const proposta = await Proposta.findById(proposta_id);

        return res.json(proposta);
    }

    async store(req, res) {
        const schema = yup.object().shape({
            status: yup.string().required("O status é obrigatório."),
            data: yup.date().required("A data é obrigatória."),
        });

        const { usuario_id, cliente_id } = req.headers;
        const { status, data } = req.body;

        const usuario = await Usuario.findById(usuario_id);

        if (!usuario) {
            return res.status(500).json({ error: "Usuário não encontrado" });
        }

        const cliente = await Cliente.findById(cliente_id);

        if (!cliente) {
            return res.status(500).json({ error: "Cliente não encontrado" });
        }

        try {
            await schema.validate(req.body, { abortEarly: false });
        } catch (err) {
            return res.status(400).json({ errors: err.errors });
        }

        const proposta = await Proposta.create({
            status: status,
            data: data,
            usuario: usuario,
            cliente: cliente,
        });

        return res.json(proposta);
    }

    async update(req, res) {
        const schema = yup.object().shape({
            status: yup.string().required("O status é obrigatório."),
            data: yup.date().required("A data é obrigatória."),
        });

        const { usuario_id } = req.headers;
        const { proposta_id } = req.params;
        const { status, tipo } = req.body;

        const proposta = await Proposta.findById(proposta_id);
        const usuario = await Usuario.findById(usuario_id);

        if (String(proposta.usuario) !== String(usuario._id)) {
            return res.status(401).json({ error: "Não autorizado" });
        }

        try {
            await schema.validate(req.body, { abortEarly: false });
        } catch (err) {
            return res.status(400).json({ errors: err.errors });
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

        if (String(proposta.usuario) !== String(usuario_id)) {
            return res.status(401).json({ error: "Não autorizado" });
        }

        await Proposta.findByIdAndDelete(proposta_id);

        return res.json({ message: "Proposta deletada com sucesso!" });
    }
}

export default new PropostaController();
