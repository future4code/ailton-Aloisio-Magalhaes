import { Request, Response } from "express";
import moment from "moment";
import insertTask from "../data/insertTask";
export default async function createTask(req:Request, res:Response) {
    try {
        //validar entraas da requisicao
        if(!req.body.titulo || !req.body.descricao || !req.body.deadline || !req.body.authorId){
            res.status(400).send({
                message: '"title","description","deadline","authorId" sao obrigatorios'
            });
            return
        }
        //=================bug ao enviar deadline, assumindo valor de dateDiff, como e pq?????
        const dateDiff: number = moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix();
        if(dateDiff <= 0){
            res.status(400).send({
                message: 'deadline deve ser uma data futura'
            });
            return
        }
        //consultar o banco de dados `author_id`, `deadline`, `description`, `id`, `title`
        const id:string = Date.now() + String(Math.random());
        await insertTask(req.body.authorId,moment(req.body.deadline, 'YYYY/MM/DD').format('DD/MM/YYYY'), req.body.descricao, id,req.body.titulo);
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