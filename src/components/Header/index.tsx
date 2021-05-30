import { useContext } from 'react'
import { ActionContext } from '../../contexts/ActionContext'

import { Container } from './styles'

interface HeaderProps {
  action: string
}

function Header() {
  const { action, actions } = useContext(ActionContext)

  return (
    <Container>
      <div>{actions[action]}</div>
    </Container>
  )
}

export default Header
