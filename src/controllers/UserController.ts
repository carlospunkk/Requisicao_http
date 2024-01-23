

// validação

// esse arquivo é referente para todas as minhas funções referente a user

 import { Request,Response } from "express" 
import { UserService } from "../services/UserServices"

 
  
// classe 
export class UserController {



// método 
    createUser = (req: Request, res: Response) => {

        const userservices = new UserService() // intanciei new UserService 
        const user = req.body // no thunder client nós testamos no body (json) todo nosso objeto criado 

        // validação uso exclamação para dizer se for nulo 
        if(!user.nome){
          return res.status(400).json({message:'bad request : name inválid'})
        } 
          userservices.createUser(user.nome,user.email,user.idade) // parametros 
          return res.status(201).json({ message: "usuario criado" })
    } 
    
    // método que pega todos os usuarios 
    getAllUsers = (req:Request,res:Response) => {
      const userservices = new UserService

      const users = userservices.getAllUsers()
      return res.status(200).json(users)

    }
    // parei aqui 
    DeletarNome = (req:Request,res:Response){
      const user = 
    }
  

}
