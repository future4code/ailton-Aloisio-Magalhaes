import connection from "..";

export default async function insertTask(id:string,titulo:string,descricao:string,deadline:string,authorId:string){
    await connection('to_do_list_tasks').insert({
        id,
        titulo,
        descricao,
        deadline,
        author_id: authorId
    });
};