import React, { useContext } from 'react'
import { ActionContext } from '../../contexts/ActionContext'

import { ActiveButton, Container, NotActiveButton } from './styles'

function SubHeader() {
  const { button, add, show } = useContext(ActionContext)

  return (
    <Container>
      <div>
        {button == 0 ? (
          <ActiveButton onClick={show}>Visualizar</ActiveButton>
        ) : (
          <NotActiveButton onClick={show}>Visualizar</NotActiveButton>
        )}
        {button == 1 ? (
          <ActiveButton onClick={add}>Novo Cadastro</ActiveButton>
        ) : (
          <NotActiveButton onClick={add}>Novo Cadastro</NotActiveButton>
        )}
      </div>
    </Container>
  )
}

export default SubHeader
