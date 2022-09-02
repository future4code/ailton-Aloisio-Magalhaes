import { Request, Response } from "express";
import moment from "moment";
import insertTask from "../data/insertTask";
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
        if(dateDiff <= 0){
            res.status(400).send({
                message: 'deadline deve ser uma data futura'
            });
            return
        }
        //consultar o banco de dados `author_id`, `deadline`, `description`, `id`, `title`
        const id:string = Date.now() + String(Math.random());
        await insertTask(req.body.authorId,moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY/MM/DD'), req.body.description, id,req.body.title);
        //validar saida do banco de dados
        //responder a requisicao  
        res.status(200).send({
            message: "tarefa criada com sucesso",
            id
        });
    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage});
    }
};