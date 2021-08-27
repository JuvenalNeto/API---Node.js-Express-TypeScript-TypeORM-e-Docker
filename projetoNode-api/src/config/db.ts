import { createConnection } from 'typeorm'

export const conectarServidorDB = async () => {
    const conexao = await createConnection()
    console.log('App conectado ao DB ${conexao.options.database}');
    
    process.on('SIGINT', () => {
        conexao.close().then(() => console.log ('conexão com o DB fechada'))
    })
}