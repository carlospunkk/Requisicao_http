import express , {Request,Response}from 'express';
import { UserController } from './controllers/UserController';


// instanciar o meu userController objeto 
const usercontroller = new UserController()





// inicializar o servidor 
const server = express();

// utilizar o json no express 
server.use(express.json())



// criar rota 

// método get(pega) e post (retorno) // rota de entrada requisição e response
server.get('/',(req:Request,res:Response)=>{

    return res.status(200).json({message:'Diobank Api'})
} )

// método de post 
server.post('/user',usercontroller.createUser) 

// pegando com get 
server.get('/user',usercontroller.getAllUsers)

// utilizar a função do express para a porta que vamos utilizar ela recebe dois parametros(porta,função retorna apenas a msg)
server.listen(5000,()=>console.log('online'))

