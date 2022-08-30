import { Request, Response } from "express";
export default async function createTask(req:Request, res:Response) {
    try {
        //validar entraas da requisicao
        //consultar o banco de dados
        //validar saida do banco de dados
        //responder a requisicao  xmlRequest() || fetch() || axios()
    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage});
    }
};