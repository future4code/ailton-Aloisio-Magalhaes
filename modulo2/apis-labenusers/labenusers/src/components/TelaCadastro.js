import React from "react"
import axios from "axios"
import styled from "styled-components"

const Login = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: 10px;
    border: 1px solid black;
    padding: 20px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 1px 1px 5px;
    border: none;
    height: 33vh;
    input{
        margin: 5px;
        height: 30px;
    }

`




const Botao = styled.button`
margin: 0 auto;
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




export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "chijo-paiva"
            }
        })
        .then((res) => {
            alert("Usuário(a) cadastrado(a) com sucesso!")
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        return(
            <div>
                <Botao onClick={this.props.irParaLista}>Ir para Lista de Usuários</Botao>
                <Login>
                    <h2>Cadastro</h2>
                    <input
                        placeholder={"Nome"}
                        value={this.state.nome}
                        onChange={this.handleNome}
                    />
                    <input
                        placeholder={"E-mail"}
                        value={this.state.email}
                        onChange={this.handleEmail}
                    />
                    <Botao onClick={this.fazerCadastro}>Cadastrar</Botao>
                </Login>
            </div>
        )
    }
}