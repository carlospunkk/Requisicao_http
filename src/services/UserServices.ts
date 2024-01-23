
// manipulando o banco de dados 


// vamos simular um BD objeto 
const db = [
    {
      nome:"joana",
      email:"joana@diobank.com",
      idade:31
    }
  ]


export class UserService {

    // método 

    createUser = (nome:string,email:string,idade:number) => {
        const user = {
            nome,
            email,
            idade
        }
        // adicionando no banco com push 
        db.push(user)
        console.log('DB atualizado ', db)
    }

    // retorno do meu db 
    getAllUsers = () =>{
    return db
    }

    DeletarNome =() =>{
      db.slice(1)
      return db
    }
}