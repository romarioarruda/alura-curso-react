import React, { Fragment, useState } from 'react'
import { TextField, Button } from '@material-ui/core'

export default function DadosUsuario({ enviar }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const resetFields = () => {
    setEmail("")
    setSenha("")
  }

  return (
    <Fragment>
      <form onSubmit={(event) => {
        event.preventDefault()

        enviar({ email, senha })
      }}>
        <TextField
          required
          value={email}
          type="email"
          id="email"
          label="email"
          margin="dense"
          fullWidth 
          onChange={(event) => {
            setEmail(event.target.value)
          }}/>
        <TextField
          required
          value={senha}
          type="password"
          id="senha"
          label="senha"
          margin="dense"
          fullWidth 
          onChange={(event) => {
            setSenha(event.target.value)
          }}/>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth>Próximo</Button>

        <Button
          style={{ marginTop: '12px' }}
          type="button"
          variant="contained"
          color="warning"
          fullWidth
          onClick={e => resetFields(e)}
        >Resetar campos</Button>
      </form>
    </Fragment>
  )
}