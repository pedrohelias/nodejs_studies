const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Categoria = new Schema({
    nome: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now() //isso vai fazer com que a data seja associada diretamente a inserção de dados, sem precisar do usuario colocar. Se o usuario não passar nenhum valor para o campo date, o sistema vai associar
    }

})

mongoose.model("categorias", Categoria)