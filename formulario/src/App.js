import React from 'react'
import { Container } from '@material-ui/core'
import './App.css';
import FormularioCadastro from './component/FormularioCadastro';

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <FormularioCadastro onSubmit={onSubmit} />
    </Container>
  );
}

function onSubmit(payload) {
  console.log(payload)
}

export default App;