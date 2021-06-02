import { useContext, useState } from 'react'
import { ActionContext } from '../../contexts/ActionContext'
import { Container } from './styles'

interface IUser {
  name: string
  age: number
  maritalStatus: number
  cpf: string
  state: string
  city: string
}

function List() {
  const { users, update } = useContext(ActionContext)
  const [initialQuantityScreen, setInitialQuantityScreen] = useState(
    users.length !== 0 ? 1 : 0
  )
  const [endQuantityScreen, setEndQuantityScreen] = useState(
    users.length !== 0 ? (users.length > 6 ? 6 : users.length) : 0
  )

  const setNextPage = () => {}
  const setPreviousPage = () => {}

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
              {console.log(initialQuantityScreen)}
              {users.length > 0 ? (
                users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.marialStatus}</td>
                    <td>{user.cpf}</td>
                    <td>{user.city}</td>
                    <td>{user.state}</td>
                    <td>
                      <button onClick={() => update(user)}>Editar</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7}>Sem Pessoas Cadastradas</td>
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
              <button onClick={setNextPage}>Anterior</button>
              <button onClick={setPreviousPage}>Próximo</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default List
