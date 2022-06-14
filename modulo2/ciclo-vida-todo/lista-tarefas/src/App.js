import React from 'react'
import styled from 'styled-components'
import './App.css'

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  box-sizing: border-box;
  margin: auto;
  gap: 10px;
`

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`
/* TarefaList > listaFiltrada
key={tarefaId} 
                tarefa={tarefa} 
                RemoverTarefa=
*/
const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`
//const RemoverTarefa = styled.li``
//const EditarTarefa = styled.li``

class App extends React.Component {
    state = {
      tarefas: [{id: Date.now(),
                texto: 'Texto da primeira tarefa',
                completa: false},
               {id: Date.now(),
                texto: 'Texto da segunda tarefa',
                completa: true}],
      inputValue: '',
      filtro: 'nenhum'
    }

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    console.log('add tarefa', this.state.inputValue)
    const novaTarefa = {id: Date.now(),
                        texto: this.state.inputValue ,
                        completa: false}                    
    
    const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas]
    this.setState({tarefas: novaListaDeTarefas})
  }
  
  apagarTarefa = (tarefaId) => {
    console.log('apagar tarefa', tarefaId)
    const novaListaDeTarefas = this.state.tarefas.filter((tarefa)=>{return tarefaId !== tarefa.id})
    this.setState({tarefas: novaListaDeTarefas})
  }
  /*
  editarTarefa = (tarefaId) => {
    //mudar o state.texto ja existente
    const novaListaDeTarefas = this.state.tarefas.map(
      (tarefa)=>{return tarefa = (tarefa.id === tarefaId) ? (tarefa = {...tarefa, completa: !tarefa.completa}): false   
      })
      this.setState({tarefas: novaListaDeTarefas})
  }
  */
  selectTarefa = (tarefaId) => {
    //mudar o texto no state.completo ja existente
    const novaListaDeTarefas = this.state.tarefas.map(
      (tarefa)=>{return tarefa = (tarefa.id === tarefaId) ? (tarefa = {...tarefa, completa: !tarefa.completa}): (tarefa = {...tarefa, completa: tarefa.completa})})
    this.setState({tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
      this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input type="text" value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa  
                completa={tarefa.completa} 
                onClick={() => this.selectTarefa(tarefa.id)}>
                                                              {tarefa.texto}
              </Tarefa>
              //<RemoverTarefa></RemoverTarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

