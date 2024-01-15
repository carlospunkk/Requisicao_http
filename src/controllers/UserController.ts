// esse arquivo é referente para todas as minhas funções referente a user

 import { Request,Response } from "express" 

 // vamos simular um BD objeto 
const db = [
    {
      name:"joana",
      email:"joana@diobank.com",
      idade:31
    }
  ]
  
// classe 
export class UserController {



    // método 
    createUser = (req: Request, res: Response) => {

        // body corpo da requisição
        const user = req.body
        // add um novo usuario
        db.push(user) 
        // mostrando no cs
        console.log(db)
        // retorno da msg 
        return res.status(201).json([{ message: "usuario criado" }])
    }

}
