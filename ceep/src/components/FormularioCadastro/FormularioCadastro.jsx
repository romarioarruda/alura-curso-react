import React, { Component } from "react";
import "./estilo.css";

export default class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro" onSubmit={e => this.props.saveNota(e)}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          className="form-cadastro_input"
          value={this.props.nota.titulo}
          onChange={e => this.props.handleFields(e)}
        />
        <textarea
          rows={15}
          name="texto"
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          value={this.props.nota.texto}
          onChange={e => this.props.handleFields(e)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
