import knex, {Knex} from "knex";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import createUser from "./endpoints/createUser";
import getUserById from "./endpoints/getUserById";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";
//========= Middlewares
dotenv.config();
//conexao servidor backend
const connection: Knex<any, unknown[]> = knex({
    client:'mysql',
    connection:{
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    }
});
export default connection;
//criando servidor frontend
const app = express();
app.use(express.json());
app.use(cors());
//endpoints cadastrados

//----Cadastrar Usuario
app.put('/user', createUser);
//----Busca por todos os usuários
app.get('/user/:id', getUserById);
app.post('/user/edit/:id', editUser);
app.put('/task', createTask);
//iniciando servidor
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});