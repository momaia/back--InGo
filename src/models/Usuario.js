import { Schema, model } from "mongoose";

const UsuarioSchema = new Schema({
    email: String,
    codigo: Number,
});

export default model("Usuario", UsuarioSchema);
