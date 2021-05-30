import { createContext, useState, ReactNode } from 'react'

interface IUser {
  id: string
  name: string
  age: number
  maritalStatus: number
  cpf: string
  state: string
  city: string
}

interface ActionContextData {
  button: number
  action: number
  show: () => void
  add: () => void
  users: IUser[]
  actions: string[]
}

const actions = ['Visualizar Cadastros', 'Novo Cadastro', 'Editar Cadastro']

interface ActionProviderProps {
  children: ReactNode
}

export const ActionContext = createContext({} as ActionContextData)

export function ActionProvider({ children, ...rest }: ActionProviderProps) {
  const [users, setUsers] = useState<IUser[]>([])
  const [button, setButton] = useState(0)
  const [action, setAction] = useState(0)

  function show() {
    setButton(0)
    setAction(0)
  }

  function add() {
    setAction(1)
    setButton(1)
  }

  function update() {
    setAction(2)
  }

  return (
    <ActionContext.Provider
      value={{ button, action, show, add, users, actions }}
    >
      {children}
    </ActionContext.Provider>
  )
}
