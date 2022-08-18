import express, { query, Request, Response } from "express";
import cors from "cors";
import { playlist, Playlist, Musicas, editarMusica } from "./data"

// variavel que tem os poderes de criar endpoints
const app = express();
app.use(cors());
app.use(express.json());


// exercicios que faz mais sentido
// CRUD - Create , Read , Update , Delete

// retornar todas as playlist
// http://localhost:3003/retornaPlaylist
app.get("/retornaPlaylist", (request, response) => {
    try {
        response.send(playlist)
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

// http://localhost:3003/criarPlaylist
app.post("/criarPlaylist", (request, response) => {
    try {
        const { nome } = request.body

        const novaPlaylist: Playlist = {
            nome,
            musicas: []
        }
        playlist.push(novaPlaylist)

        response.send(playlist)

    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})







// retorna uma playlist especifica
// http://localhost:3003/retornaPlaylist/:nome
app.get("/retornaPlaylistEspecifica", (request: Request, response: Response) => {
    try {
        const { nome } = request.body


        // verifica -> undefined , string vazia , null , false
        if (!nome) {
            response.statusCode = 401
            throw new Error("Ei , não pode mandar valores vazios")
        }

        const achouPlaylist: Playlist[] = playlist.filter((playlist) => {
            return playlist.nome.includes(nome.toLowerCase())
        })

        if (!achouPlaylist.length) {
            response.statusCode = 404
            throw new Error(`Não foi possivel achar a playlist com o nome -> ${nome}`)
        }

        response.send(achouPlaylist)
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }

})

app.put("/alterarMusica", (request, response) => {
    try {

    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})


// http://localhost:3003/apagarPlaylist/:nome
app.delete("/apagarPlaylist/:nome", (request, response) => {
    try {

        const nome = request.params.nome
        const deletePlaylist: Playlist[] = playlist.filter((playlist) => {
            return playlist.nome !== nome
        })
        response.send(deletePlaylist)
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }


})



// http://localhost:3003/adicionarMusica/:nomePlaylist
app.post("/adicionarMusica/:nomePlaylist", (request, response) => {
    try {
        const nomePlaylist = request.params.nomePlaylist
        const { musica, artista, ano } = request.body

        const [procurarPlaylist]: Playlist[] = playlist.filter((playlist) => {
            return playlist.nome === nomePlaylist
        })

        const novaMusica: Musicas = {
            musica,
            artista,
            ano
        }

        procurarPlaylist.musicas.push(novaMusica)

        response.send(procurarPlaylist)
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }

})

// servidor esta rodando nesse endereço. Startar o backEnd
// endereço base -> http://localhost:3003/primeira-api
app.listen(3003, () => {
    console.log("SERVER IS RUNNING IN http://localhost:3003")
})






