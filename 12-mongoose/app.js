//criacao de models utilizando o proprio mongoose

const mongoose = require("mongoose") //associando o mongoose a uma variavel
mongoose.connect("mongodb://localhost/banco_mongo", { //realizando a conexão do mongo ao banco
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log("banco conectado!")
}).catch((error) => {
    console.log("erro ao conectar ao banco: " + error)
})

//definição do model de usuarios

const UsuarioSchema = mongoose.Schema({ //dentro das chaves vamos definir todo o model
    nome: { //o mongo trabalha com os tipos do typescript, como String, Number e afins...
        type: String,
        require: true //require serve para significar que o campo é obrigatorio. Por default, é false. 
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number
        //sem require, por padrão é false
    },
    nacionalidade: {
        type: String

    }


})

//definindo o collection

mongoose.model("usuarios", UsuarioSchema) //colocar o nome da collection que vai armazenar o UsuarioSchema. Uma collection é um conjunto de dados. Tipo uma tabela Usuarios. O segundo argumento é o model que a collection se referencia.

//para realizar o insert: 

const novoInsert = mongoose.model('usuarios') //vai fazer com que novoInsert contenha um modelo

new novoInsert({
    nome: 'Pedro',
    sobrenome: 'Carlos',
    email: 'pedrohelias95@hotmail.com',
    idade: 26,
    nacionalidade: 'Brasileiro'
}).save().then(() => {
    console.log("insert adicionado com sucesso!")
}).catch((error) => {
    console.log("insert não adicionado devido ao erro: " + error)
}) //isso vai definir o insert de um usuario. O save vai garantir que o insert seja salvo

//se repetir o codigo ele vai duplicar o registro