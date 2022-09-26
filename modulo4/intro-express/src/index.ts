import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//ENDPOINTS
//exercicio 1
// http://localhost:3003/
app.get("/", (req, res) => {          
		res.send("Hello from Express")
});
// http://localhost:3003/auth
app.get("/auth", (req, res) => {          
		const token = req.headers.authorization;
		res.send(token);
});
// http://localhost:3003/body
app.get("/body", (req, res) => {          
		const pessoa = req.body;
		res.send(pessoa);
});
// http://localhost:3003/param/:id
app.get("/param/:id",(req, res)=>{
	const id = req.params;
	console.log(id);
});
// http://localhost:3003/query/
app.get("/query/",(req, res)=>{
	const nome = req.query;
	console.log(nome);
});

//exercicio 2
type Usuario = {
	id:number,
	name:string,
	phone:number,
	email:string,
	website:string	
};
const aloisio:Usuario[] = [{
	id: 1,
	name: "aloisio",
	phone: 86988839700,
	email: "educacao1ouro@gmail.com",
	website: "aloisio.com"
}];

app.get("/usuarios",(req, res)=>{
	//const exercicio2 = req.query;
	res.send(aloisio);
});


//ENTREGANDO VIA HTTP OS ENDPOINTS
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
