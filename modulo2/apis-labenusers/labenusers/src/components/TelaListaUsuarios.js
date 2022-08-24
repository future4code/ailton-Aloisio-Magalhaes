import React from "react"
import axios from "axios"
import styled from "styled-components"
const Botao = styled.button`
    background-color: hsl(236,32%,26%);
    color: white;
    border: none;
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    overflow: hidden;
    cursor: pointer;
`

const ListaUsuarios = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    button{
        width: 10%;
        align-self: flex-start;
 
    }
    
`

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    box-shadow: 1px 1px 3px;
    border: none;
    

    
`


export default class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        // axios.get(url, {
        //     headers: {
        //         Authorization: "chijo-paiva"
        //     }
        // }).then((res) => {
        //     this.setState({ usuarios: res.data })
        // })
        // .catch((err) => {
        //     alert("Ocorreu um problema, tente novamente")
        // })

        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "chijo-paiva"
                }
            })

            this.setState({ usuarios: res.data })
        } catch (err) {
            alert("Ocorreu um problema, tente novamente")
        }
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "chijo-paiva"
            }
        })
            .then((res) => {
                alert("Usuário(a) deletado(a) com sucesso!")
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button onClick={() => this.deletarUsuario(user.id)}>X</button>
                </CardUsuario>
            )
        })

        return (
            <ListaUsuarios >
                <Botao onClick={this.props.irParaCadastro}>Ir para Cadastro</Botao>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </ListaUsuarios >
        )
    }
}