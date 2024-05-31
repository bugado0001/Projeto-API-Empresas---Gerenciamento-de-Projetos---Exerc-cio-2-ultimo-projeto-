const Projeto = require("../models/Projeto") //Importou o modelo Funcionario

/*async é usada para declarar uma função assíncrona. Uma função assíncrona é uma função que opera de forma assíncrona e retorna implicitamente uma Promise. Qualquer valor retornado por uma função async é automaticamente envolvido em uma Promise.

await só pode ser usada dentro de uma função async. Ela é usada para esperar por uma Promise. Quando o await é colocado antes de uma Promise, ele pausa a execução da função async até que a Promise seja resolvida ou rejeitada.
*/


//Buscar todos os funcionarios do banco de dados
async function bucarTodos(req, res){
res.json(await Projeto.find())
}
/*A função find() é um método muito utilizado no Mongoose para buscar documentos em uma coleção do MongoDB com base em certos critérios de consulta.
Exp: Model.find(query, projection, options, callback);

query (opcional): Um objeto que define os critérios de consulta. Se não for especificado, todos os documentos na coleção serão retornados.

projection (opcional): Um objeto que especifica quais campos devem ser incluídos ou excluídos nos documentos retornados.

options (opcional): Um objeto com opções adicionais, como sort, limit, skip, etc.

callback (opcional): Uma função de callback que é chamada com os resultados da consulta. Se não for fornecido, o método retorna uma promise.

*/

//Buscar o fduncionario pelo ID do objeto
async function bucarPorID(req,res){
/*findById no Mongoose é usada para buscar um único documento na coleção MongoDB com base no seu identificador (ID). É uma forma conveniente e eficiente de recuperar um documento específico quando você conhece o seu ID. 
exemplo: 
Model.findById(id, [projection], [options], [callback])
*/
const projeto = await Projeto.findById(req.params.id)

if(projeto){
    res.json(projeto)
}else{
    res.status(404).json({mensagem:"Projeto não encotrado"})
}
}

//Criado uma novo dado para o banco de dados
async function criar(req,res){
const  projeto = new Projeto(req.body) //Novo dado é criado para a tabela Funcionario atraves do "new Funcionario(req.body)"
const projetoCriado = await projeto.save() //Salvando o novo dado
res.status(201).json(projetoCriado)
}

//Atualizar algum capo de banco de dados
async function atualizar(req,res){
const projetoAtualizardo = await Projeto.findByIdAndUpdate(req.params.id, req.body,{new:true})
/* findByIdAndUpdate do Mongoose é usada para encontrar um documento por seu ID e atualizá-lo com novos dados. Ela retorna o documento atualizado. Vamos entender como utilizá-la corretamente.
exp: 
Model.findByIdAndUpdate(id, update, options, callback)

*/
if (projetoAtualizardo){
    res.json(
        {mensagem: "Projeto atualizado com sucesso!", 
projetoAtualizardo 
    }
    )
}else{
    res.status(404).json({mensagem:"Projeto não encotrado!"})
}
}

async function excluir(req, res){
const projetoExcluido = await Projeto.findByIdAndDelete(req.params.id)
/*findByIdAndDelete no Mongoose é usada para encontrar um documento por seu ID e excluí-lo. Ela retorna o documento excluído se a operação for bem-sucedida.  */

if (projetoExcluido){
    res.json(
        {
        mensagem:"Projeto excluido com sucesso!", 
    projetoExcluido
        }
    )
}else{ 
    res.status(404).json({mensagem: "Projeto não encontrado!"})
}

}

module.exports = {
bucarTodos,
bucarPorID,
criar,
atualizar,
excluir
}






