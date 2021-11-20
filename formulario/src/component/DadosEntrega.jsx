import React, { Fragment, useState } from 'react'
import { TextField, Button } from '@material-ui/core'

export default function DadosEntrega({ enviar }) {
  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState("")

  const resetFields = () => {
    setCep("")
    setEndereco("")
  }

  return (
    <Fragment>
      <form onSubmit={(event) => {
        event.preventDefault()

        enviar({ cep, endereco })
      }}>
        <TextField
          value={cep}
          type="number"
          id="cep"
          label="CEP"
          margin="dense"
          fullWidth 
          onChange={(event) => {
            setCep(event.target.valueAsNumber)
          }}/>
        <TextField
          value={endereco}
          type="text"
          id="endereco"
          label="Endereço"
          margin="dense"
          fullWidth 
          onChange={(event) => {
            setEndereco(event.target.value)
          }}/>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth>Finalizar cadastro</Button>

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