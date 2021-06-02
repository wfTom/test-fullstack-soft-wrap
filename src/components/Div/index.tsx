import React, { ReactNode, useContext } from 'react'
import { ActionContext } from '../../contexts/ActionContext'
import Register from '../Register'
import List from '../List'

function Div() {
  const { action } = useContext(ActionContext)

  return <>{action == 2 ? <List /> : <Register />}</>
}

export default Div
