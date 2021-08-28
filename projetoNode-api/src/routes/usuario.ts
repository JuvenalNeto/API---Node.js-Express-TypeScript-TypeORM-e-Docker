import { Router } from 'express'
import { usuarioController } from '../controller/usuarioController';
import { Usuario } from '../entity/Usuario';

export const routerUsuario = Router()
const usuarioCtrl = new usuarioController(); 

routerUsuario.post('/', async (req, res) => {
    const { nome, email } = req.body;
    const usuario = new Usuario(nome, email);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);
    res.json(usuarioSalvo);
});

routerUsuario.get('/', async (req, res) => {
    const usuarios = await usuarioCtrl.recuperarTodos();
    res.json(usuarios);
})

routerUsuario.get('/lancamentos/:idUsuario', async (req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    const lancamentos = await usuarioCtrl.recuperarLancamentoDoUsuario(idUsuario);
    res.json(lancamentos);
})