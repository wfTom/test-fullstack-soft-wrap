import React, { ReactNode, useContext } from 'react'
import { ActionContext } from '../../contexts/ActionContext'
import Register from '../Register'
import List from '../List'

import { Container } from './styles'

interface TesteProps {
  children: ReactNode
}

function Div() {
  const { action } = useContext(ActionContext)

  return <>{action == 0 ? <List /> : <Register />}</>
}

export default Div
