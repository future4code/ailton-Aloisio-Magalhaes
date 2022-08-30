import { Request, Response } from "express";
import insertUser from "../data/insertUser";
export default async function createUser(req:Request, res:Response) {
    try {
        //validar entraas da requisicao
        if(!req.body.nome || !req.body.nickname || !req.body.email){
            res.status(400).send('preencha os campos "nome", "nickname", "email"');
            //return
        }
        //consultar o banco de dados knex.mysql
        const id:string = Date.now() + String(Math.random());

        await insertUser(id, req.body.nome, req.body.nickname, req.body.email)
        //validar saida do banco de dados
        //responder a requisicao  xmlRequest() || fetch() || axios()
        res.status(200).send('usuario criado com sucesso!');
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        });
    }
};