import express , {Request,Response}from 'express';
import { router } from './routes';









// inicializar o servidor 
const server = express();

// utilizar o json no express 
server.use(express.json())
// uilizar a rota 
server.use(router)



// criar rota 

// método get(pega) e post (retorno) // rota de entrada requisição e response
server.get('/',(req:Request,res:Response)=>{

    return res.status(200).json({message:'Diobank Api'})
} )



// utilizar a função do express para a porta que vamos utilizar ela recebe dois parametros(porta,função retorna apenas a msg)
server.listen(5000,()=>console.log('Server on '))

