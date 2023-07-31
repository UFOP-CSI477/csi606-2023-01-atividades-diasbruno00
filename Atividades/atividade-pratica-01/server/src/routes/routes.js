import {Router} from "express";
const router = Router()

import ControllerProduto from "../controller/Produto.js"
import ControllerUsuarios from '../controller/Usuario.js';
import ControllerEstados from '../controller/Estados.js';
import ControllerCidades from '../controller/Cidades.js';
import ControllerEnderecos from "../controller/Enderecos.js";
import ControllerCompras from "../controller/Compras.js";

const controllerProduto = new ControllerProduto()
const controllerUsuarios = new ControllerUsuarios()
const controllerEstados = new ControllerEstados()
const controllerCidades = new ControllerCidades()
const controllerEnderecos = new ControllerEnderecos()
const controllerCompras = new ControllerCompras()

// rotas controller Produtos
router.get('/produtos', controllerProduto.recuperarTodosProdutos)
router.get('/produto/:id',controllerProduto.recuperarProdutoPorId)
router.get('/produto/descrisao/:descrisao',controllerProduto.recuperarProdutoPorDescrisao)
router.post('/produto', controllerProduto.salvarProduto)
router.delete('/delete/produto/:id',controllerProduto.excluirProduto)
router.put('/update/produto/:id',controllerProduto.atualizarProduto)

// rotas controller Usuario
router.get('/usuarios',controllerUsuarios.recuperarTodosUsuarios)
router.get('/usuario/:id',controllerUsuarios.recuperarUsuarioPorId)
router.get('/usuario/nome/:nome',controllerUsuarios.recuperarUsuarioPorNome)
router.post('/usuario',controllerUsuarios.salvarUsuario)
router.delete('/delete/usuario/:id',controllerUsuarios.excluirUsuario) 
router.put('/update/usuario/:id',controllerUsuarios.atualizarUsuario)

// rotas controller Estados
router.get('/estados',controllerEstados.recuperarTodosEstados)
router.get('/estados/:id',controllerEstados.recuperarEstadoPorId)
router.get('/estados/nome/:nome',controllerEstados.recuperarEstadoPorNome)
router.post('/estados', controllerEstados.salvarEstados)
router.put('/update/estados/:id',controllerEstados.atualizarEstados)
router.delete('/delete/estados/:id',controllerEstados.excluirEstados)

//rotas controller Cidades
router.post('/cidades',controllerCidades.salvarCidade)
router.get('/cidades',controllerCidades.recuperarTodasCidades)
router.get('/cidade/:id',controllerCidades.recuperarCidadePorId)
router.get('/cidade/nome/:nome',controllerCidades.recuperarCidadePorNome)
router.delete('/delete/cidade/:id',controllerCidades.excluirCidade)
router.put('/update/cidade/:id',controllerCidades.atualizarCidade)

// rotas controller Enderecos
router.post("/endereco", controllerEnderecos.salvarEndereco)
router.get("/enderecos", controllerEnderecos.recuperarTodosEnderecos)
router.delete('/delete/endereco/:id',controllerEnderecos.excluirEndereco)
router.put('/update/endereco/:id', controllerEnderecos.atualizarEndereco)
router.get('/endereco/:id',controllerEnderecos.recuperarEnderecoPorId)

// Rotas Controller Compras
router.get('/compras', controllerCompras.recuprarTodasAsCompras)
router.get('/compra/:id',controllerCompras.recuperarComprarPorId)
router.post('/compra',controllerCompras.salvarCompra)
router.delete('/delete/compra/:id',controllerCompras.deletarCompra)
router.put('/update/compra/:id',controllerCompras.atualizarCompras)

export default router

// produtos , compras e enderecos