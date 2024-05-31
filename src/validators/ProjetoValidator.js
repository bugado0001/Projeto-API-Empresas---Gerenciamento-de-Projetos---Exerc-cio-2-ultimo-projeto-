/*Yup é uma biblioteca JavaScript que permite a validação de esquemas de objetos de forma declarativa e poderosa. É frequentemente usada com bibliotecas de formulários como Formik para validar dados de entrada do usuário.*/
const yup = require("yup")

const schema = yup.object().shape(
{
    /*const schema: Estamos declarando uma constante chamada schema que armazenará o esquema de validação.
yup.object().shape({...}): Criamos um novo esquema Yup para validar um objeto. O método shape() recebe um objeto que descreve os campos e suas regras de validação. */
nome: yup
.string("Campo precisa ser um texto")
.required("Campo obrigatorio")
,
descricao: yup
.string("Campo precisa ser um texto")
.required("Campo obrigatorio")
,
data_incio: yup
.string("Campo precisa ser um texto")
, 
data_fim:
    yup
.string("Campo precisa ser um texto")

} 
)

function validarProjeto(req,res, next){
schema 
.validate(req.body, {abortEarly: false})
.then(()=> next())
.catch(err => {
const erros = err.inner.map(e =>{
const erro = {
campo: e.path, 
erros: e.errors 

}
return erro 

})
res.status(400).json(
    {
        mensagem: "Falha na validação", erros
    }
)


})
}

module.exports = { 
    validarProjeto
}