import { Schema, model} from "mongoose";

const UsuarioSchema = new Schema({
    email: String
});

export default model('Usuario', UsuarioSchema);