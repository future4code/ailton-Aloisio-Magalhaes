import connection from "../index";
export default async function insertUser(id:string, nome:string, nickname:string, email:string) {
    await connection.insert(
        {
            id, nome, nickname, email
        }).into('to_do_list_users');    
}