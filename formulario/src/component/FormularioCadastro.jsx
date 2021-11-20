import React, { useEffect, useState } from 'react'
import { Stepper, Step, StepLabel } from '@material-ui/core'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntrega'

export default function FormularioCadastro({ onSubmit }) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})

  useEffect(() => {
    console.log('payload: ', dadosColetados)
  })

  const proximo = () => {
    setEtapaAtual(etapaAtual + 1)
  }

  const coletarDados = (dados) => {
    setDados({...dadosColetados, ...dados})
    proximo()
  }

  const formularios = [
    <DadosUsuario enviar={coletarDados} />,
    <DadosPessoais onSubmit={coletarDados} />,
    <DadosEntrega enviar={coletarDados} />
  ]

  return (
    <React.Fragment>
      <h1 style={{ textAlign: 'center' }}>Formulário de cadastro</h1>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </React.Fragment>
  )
}
