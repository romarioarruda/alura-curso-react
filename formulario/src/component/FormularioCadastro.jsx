import React, { useState } from 'react'
import { Button, TextField, Switch } from '@material-ui/core'

export default function FormularioCadastro({ onSubmit }) {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState("")
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const [erroCpf, setErroCpf] = useState({ status: false, text: "" })

  const resetFields = () => {
    setNome("")
    setSobrenome("")
    setCpf("")
    setPromocoes(false)
    setNovidades(false)
    setErroCpf({ status: false, text: "" })
  }

  return (
    <React.Fragment>
      <h1 style={{ textAlign: 'center' }}>Formulário de cadastro</h1>
      <form onSubmit={(event) => {
        event.preventDefault()

        if(cpf.toString().length !== 11) return

        onSubmit({ nome, sobrenome, cpf, promocoes, novidades })
      }}>
        <TextField
          required
          label="Nome"
          margin="dense"
          fullWidth={true}
          value={nome}
          onChange={(event) => {
            setNome(event.target.value)
          }}
        />
        <TextField
          required
          label="Sobrenome"
          margin="dense"
          fullWidth={true}
          value={sobrenome}
          onChange={(event) => {
            setSobrenome(event.target.value)
          }}
        />
        <TextField
          error={erroCpf.status}
          helperText={erroCpf.text}
          required
          label="CPF"
          margin="dense"
          fullWidth={true}
          value={cpf}
          onBlur={(event) => {
            const cpf = Number(event.target.value)
            if(cpf.toString().length !== 11) {
              setErroCpf({ status: true, text: "CPF precisa ter 11 dígitos" })
            } 
          }}
          onChange={(event) => {
            const cpf = Number(event.target.value)
            
            if(isNaN(cpf)) return setCpf("")

            setCpf(cpf.toString().substring(0, 11))
            if(cpf.toString().length === 11) {
              setErroCpf({ status: false, text: "" })
            }
          }}
        />

        <label htmlFor="Promocoes">Promoções</label>
        <Switch
          checked={promocoes}
          onChange={(event) => {
            setPromocoes(event.target.checked)
          }}
        />

        <label htmlFor="novidades">Novidades</label>
        <Switch
          checked={novidades}
          onChange={(event) => {
            setNovidades(event.target.checked)
          }}
        />

        <Button
          style={{ marginTop: '12px' }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth={true}
        >Cadastrar</Button>

        <Button
          style={{ marginTop: '12px' }}
          type="button"
          variant="contained"
          color="warning"
          fullWidth={true}
          onClick={e => resetFields(e)}
        >Resetar campos</Button>
      </form>
    </React.Fragment>
  )
}
