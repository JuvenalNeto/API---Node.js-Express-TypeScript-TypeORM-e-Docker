import { Router } from "express";
import { LancamentoController } from "../controller/lancamentoController";
import { usuarioController } from "../controller/usuarioController";
import { Lancamento } from "../entity/Lancamento";



export const routerLancamento = Router();
const lancamentoCtrl = new LancamentoController();
const usuarioCtrl = new usuarioController();

routerLancamento.post('/', async (req, res) => {
    const { idUsuario, valor, descricao, data } = req.body;
    const usuario = await usuarioCtrl.recuperarPorId(idUsuario);
    if (usuario) {
        const lancamento = new Lancamento(valor, descricao, data, usuario);
        const lancamentoSalvo = await lancamentoCtrl.salvar(lancamento);
        res.json(lancamentoSalvo);   
    }else{
        res.status(404).json({ mansagem: 'usuario do lancamento não encontrado'});
    }
})