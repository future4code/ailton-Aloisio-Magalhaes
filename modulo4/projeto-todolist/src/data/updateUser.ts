import connection from "..";

export default async function updateUser(id:string, nome?:string, nickname?:string, email?:string){
    if(nome){
        await connection.raw(`UPDATE to_do_list_users
                              SET nome = '${nome}'
                              WHERE id = '${id}'                        
        `);
    }
    if(nickname){
        await connection.raw(`UPDATE to_do_list_users
                              SET nickname = '${nickname}'
                              WHERE id = '${id}'                        
        `);
    }
    if(email){
        await connection.raw(`UPDATE to_do_list_users
                              SET email = '${email}'
                              WHERE id = '${id}'                        
        `);
    }
};