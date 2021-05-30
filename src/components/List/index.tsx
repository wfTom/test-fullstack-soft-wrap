import { useContext, useState } from 'react'
import { ActionContext } from '../../contexts/ActionContext'
import { Container } from './styles'

interface IUser {
  id: string
  name: string
  age: number
  maritalStatus: number
  cpf: string
  state: string
  city: string
}

function List() {
  const { users } = useContext(ActionContext)
  const [initialQuantityScreen, setInitialQuantityScreen] = useState(0)
  const [endQuantityScreen, setEndQuantityScreen] = useState(0)

  return (
    <Container>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>NOME</th>
                <th>IDADE</th>
                <th>ESTADO CIVIL</th>
                <th>CPF</th>
                <th>CIDADE</th>
                <th>ESTADO</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.maritalStatus}</td>
                    <td>{user.cpf}</td>
                    <td>{user.city}</td>
                    <td>{user.state}</td>
                    <td>
                      <button>Editar</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>Sem Pessoas Cadastradas</td>
                </tr>
              )}
            </tbody>
          </table>
          <div>
            <div>
              Mostrando de {initialQuantityScreen} até {endQuantityScreen} de{' '}
              {users.length} resultados
            </div>
            <div>
              <button>Anterior</button>
              <button>Próximo</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default List
