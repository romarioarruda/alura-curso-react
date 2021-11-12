import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';


const initialState = {
  nota: {
    titulo: '',
    texto: ''
  },
  notas: []
}

class App extends Component {
  state = {...initialState}

  clearFields() {
    this.setState({ nota: initialState.nota })
  }

  handleFields(event) {
    const nota = { ...this.state.nota }
    
    nota[event.target.name] = event.target.value

    this.setState({ nota })
  }

  saveNota(event) {
    event.preventDefault()

    const novaNota = { ...this.state.nota }
    const list = [...this.state.notas, novaNota]

    this.setState({ notas: list })
    this.clearFields()
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          handleFields={e => this.handleFields(e)} 
          saveNota={e => this.saveNota(e)}
          nota={this.state.nota}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
