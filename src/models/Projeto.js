/*Modelagem de Dados: Mongoose permite definir modelos de dados com 
esquemas que são utilizados para criar e validar documentos MongoDB. 
Isso simplifica a estruturação dos dados e garante a consistência.*/ 

const mongoose = require("mongoose")
const { date, DateSchema, string } = require("yup")

const schema = new mongoose.Schema(
{
/*
Um schema no contexto do Mongoose é uma estrutura que define a forma dos documentos que serão armazenados em uma coleção do MongoDB. Ele representa um modelo dos dados, especificando quais campos serão armazenados e quais são seus tipos, restrições, padrões de validação, etc.*/

/*Nome de um campo da tabela*/nome:{
    /*Tipo do dado que pode ser inserido nesse campo*/ type: String, 
    /*Se a requisição desse dado é obrigatoria ou não*/required: true
},
descricao:{
type: String, 
required: true
}
,
data_inicio:{
    type: String, 
    required: false
}
,
data_fim:{
    type: String,
     required: false
}

}, {timestamps: true
/*timestamps é uma funcionalidade conveniente e muito comum em aplicações para manter um registro automático dessas informações sem que o desenvolvedor precise gerenciar manualmente esses campos.  */
}
)

const Projeto = mongoose.model("projeto", schema) 
/*mongoose.model: Este método do Mongoose é utilizado para compilar um modelo a partir de um schema. Ele retorna um construtor de modelo que pode ser usado para criar, ler, atualizar e deletar documentos do MongoDB. 

"projeto": É o nome da coleção no MongoDB onde os documentos serão armazenados. No MongoDB, coleções são como tabelas em bancos de dados relacionais. Se a coleção especificada não existir, o Mongoose a criará automaticamente quando você começar a adicionar documentos.

schema: É o schema do Mongoose que define a estrutura dos documentos que serão armazenados na coleção "projeto". O schema contém as definições dos campos e suas opções, como tipos de dados, validações, métodos, etc.
*/

module.exports = Projeto;