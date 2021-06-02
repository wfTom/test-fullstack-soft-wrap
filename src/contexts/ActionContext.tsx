import { createContext, useState, ReactNode, useEffect } from 'react'
import api from '../services/api'

interface IUser {
  id: number
  name: string
  age: number
  marialStatus: string
  cpf: string
  state: string
  city: string
}

interface ActionContextData {
  button: number
  action: number
  show: () => void
  add: () => void
  update: (user: IUser) => void
  users: IUser[]
  user: IUser
  actions: string[]
}

const actions = ['Novo Cadastro', 'Editar Cadastro', 'Visualizar Cadastros']

interface ActionProviderProps {
  children: ReactNode
  users: IUser[]
}

export const ActionContext = createContext({} as ActionContextData)

export function ActionProvider({ children, ...rest }: ActionProviderProps) {
  const [users, setUsers] = useState<IUser[]>(rest.users)
  const [user, setUser] = useState<IUser>({
    id: null,
    name: '',
    age: null,
    marialStatus: '',
    cpf: '',
    state: '',
    city: ''
  })

  const [button, setButton] = useState(0)
  const [action, setAction] = useState(2)

  useEffect(() => {
    getApi()
  }, [])

  async function getApi() {
    await api.get('').then(response => {
      let loaded = []
      for (const i in response.data) {
        loaded.push({
          id: i,
          name: response.data[i].name,
          age: response.data[i].age,
          marialStatus: response.data[i].marialStatus,
          cpf: response.data[i].cpf,
          state: response.data[i].state,
          city: response.data[i].city
        })
      }
      setUsers(loaded)
    })
  }

  function show() {
    getApi()
    setUser({
      id: null,
      name: '',
      age: null,
      marialStatus: '',
      cpf: '',
      state: '',
      city: ''
    })
    setButton(0)
    setAction(2)
  }

  function add() {
    setUser({
      id: null,
      name: '',
      age: null,
      marialStatus: '',
      cpf: '',
      state: '',
      city: ''
    })
    setAction(0)
    setButton(1)
  }

  function update(user: IUser) {
    setUser(user)
    setButton(1)
    setAction(1)
  }

  return (
    <ActionContext.Provider
      value={{
        button,
        action,
        show,
        add,
        update,
        users,
        user,
        actions
      }}
    >
      {children}
    </ActionContext.Provider>
  )
}
