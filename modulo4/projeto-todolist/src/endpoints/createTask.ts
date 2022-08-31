import { Request, Response } from "express";
import moment from "moment";
export default async function createTask(req:Request, res:Response) {
    try {
        //validar entraas da requisicao
        if(!req.body.title || !req.body.description || !req.body.deadline || !req.body.authorId){
            res.status(400).send({
                message: '"title","description","deadline","authorId" sao obrigatorios'
            });
            return
        }
        const dateDiff: number = moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix();
        //consultar o banco de dados
        //validar saida do banco de dados
        //responder a requisicao  xmlRequest() || fetch() || axios()
    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage});
    }
};