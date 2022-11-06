const usuarioServices = require("../services/UsuariosServices");
const usuarios = require("../databases/usuarios.json");
let cadastrando = {
    nome:"Testando",
    email:"testando@teste.com",
    senha:"Soparateste",
    endereco:"Rua do Teste, n 10"
}
usuarioServices.detalhar(132);

