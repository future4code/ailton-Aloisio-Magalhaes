import { Request, Response } from "express";
import updateUser from "../data/updateUser";
export default async function editUser(req:Request, res:Response) {
    try {
        //validar entraas da requisicao
        if(req.body.nome === '' || req.body.nickname === '' || req.body.email === ''){
            res.status(400).send({
                message: "Nenhum dos campos pode estar em branco"
            });
            return
        }
        if(!req.body.nome && !req.body.nickname && !req.body.email){
            res.status(400).send({
                message: "escolha ao menos um valor para alterar"
            });
            return
        }
        //consultar o banco de dados
        await updateUser(req.params.id, req.body.nome, req.body.nickname, req.body.email);
        //validar saida do banco de dados
        //responder a requisicao
        res.status(200).send({
            message: "usuario atualizado!"
        });
    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage});
    }
};