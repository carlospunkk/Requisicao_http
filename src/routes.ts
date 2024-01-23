// rotas 
import { Router ,Request,Response } from "express";
import { UserController } from "./controllers/UserController";

export const router = Router();


const usercontroller = new UserController

// método de post 
router.post('/user',usercontroller.createUser) 

// pegando com get 
router.get('/user',usercontroller.getAllUsers)


// deletar usuario simulação
router.delete('/user',(req:Request,res:Response) => {
    const user = req.body
    console.log("deletando ususario",user)
    return res.status(200).json({message:"usuario deletado"})

})