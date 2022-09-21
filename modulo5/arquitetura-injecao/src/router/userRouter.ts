import { Router } from 'express'
import { userController } from '../Userdependences'


export const userRouter = Router()

// instanciar a classe e todas as dependencias do endpoint de user
// const userController = new UserController(
//     new UserBusiness(
//         new UserDatabase(),
//         new IdGenerator(),
//         new HashManager(),
//         new Authenticator()
//     )
// )


userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.get("/", userController.getUsers)
userRouter.delete("/:id", userController.deleteUser)
userRouter.put("/:id", userController.editUser)