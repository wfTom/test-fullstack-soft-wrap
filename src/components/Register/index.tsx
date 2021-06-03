import React, { useContext, useState } from 'react'
import { ActionContext } from '../../contexts/ActionContext'
import api from '../../services/api'
import {
  Container,
  DarkButton,
  Div,
  DivSubmitButton,
  Form,
  FormGroup,
  Input,
  Label,
  LightButton,
  MessageError,
  MessageSuccess,
  Select
} from './styles'

interface FormProps {}

function Register() {
  const { action, user, show } = useContext(ActionContext)

  //Campo de configuração do texto do botão
  const actionsButton = ['Cadastrar', 'Editar']

  //Campos da entidade
  const [name, setName] = useState(user.name)
  const [age, setAge] = useState(user.age)
  const [marialStatus, setMarialStatus] = useState(user.marialStatus)
  const [cpf, setCPF] = useState(user.cpf)
  const [state, setState] = useState(user.state)
  const [city, setCity] = useState(user.city)

  //Campo para mensagem sucesso
  const [success, setSuccess] = useState(false)

  //Campo para controlar os erros
  const [error, setError] = useState(false)
  const [errors, setErrors] = useState([])
  const [amountErrors, setAmountErrors] = useState(0)
  const actionsSuccessMessage = ['realizado', 'alterado', 'excluído']
  const actionsErrorMessage = ['adicionar', 'alterar', 'excluír']
  const errorColor = 'var(--red-300)'
  const [nameError, setNameError] = useState('')
  const [ageError, setAgeError] = useState('')
  const [marialStatusError, setMarialStatusError] = useState('')
  const [cpfError, setCPFError] = useState('')
  const [stateError, setStateError] = useState('')
  const [cityError, setCityError] = useState('')

  const handleCPFNumber = (cpf: string) => {
    cpf = cpf.replace(/\D/g, '') //Remove tudo o que não é dígito
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2') //Coloca um ponto entre o terceiro e o quarto dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2') //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2') //Coloca um hífen entre o terceiro e o quarto dígitos

    return cpf
  }

  const validateCPFNumber = () => {
    let error = Boolean(true)
    let number = cpf.replace(/[^\d]+/g, '')
    // number = number
    console.log(number)
    if (
      number.length != 11 ||
      number == '00000000000' ||
      number == '11111111111' ||
      number == '22222222222' ||
      number == '33333333333' ||
      number == '44444444444' ||
      number == '55555555555' ||
      number == '66666666666' ||
      number == '77777777777' ||
      number == '88888888888' ||
      number == '99999999999'
    ) {
      error = false
    }
    let add = 0
    let rev = 0
    // Valida 1o digito
    for (let i = 1; i <= 9; i++) {
      add = add + parseInt(number.substring(i - 1, i)) * (11 - i)
    }
    rev = (add * 10) % 11

    if (rev == 10 || rev == 11) {
      rev = 0
    }
    if (rev != parseInt(number.substring(9, 10))) {
      error = false
    }

    // Valida 2o digito
    add = 0
    for (let i = 1; i <= 10; i++) {
      add = add + parseInt(number.substring(i - 1, i)) * (12 - i)
    }
    rev = (add * 10) % 11

    if (rev == 10 || rev == 11) {
      rev = 0
    }
    if (rev != parseInt(number.substring(10, 11))) {
      error = false
    } else {
      error = true
    }
    return error
  }

  const validateForm = () => {
    let error = false
    let errors = []
    if (name.length <= 0) {
      error = true
      setNameError(errorColor)
      errors.push('Campo Nome é obrigatório')
    } else {
      setNameError('')
    }
    if (!age || age == 0) {
      error = true
      setAgeError(errorColor)
      errors.push('Campo Idade é obrigatório')
    } else {
      setAgeError('')
    }
    if (marialStatus == '') {
      error = true
      setMarialStatusError(errorColor)
      errors.push('Campo Estado Civil é obrigatório')
    } else {
      setMarialStatusError('')
    }
    if (cpf.length <= 0) {
      error = true
      setCPFError(errorColor)
      errors.push('Campo CPF é obrigatório')
    } else {
      if (!validateCPFNumber()) {
        errors.push('CPF inválido')
        setCPFError(errorColor)
      } else {
        // TODO Verificar se já existe esse CPF no banco de dados
        // api
        //   .get(`/${cpf}`)
        //   .then(response => {})
        //   .catch(err => {})
        setCPFError('')
      }
    }
    if (city.length <= 0) {
      error = true
      setCityError(errorColor)
      errors.push('Campo Cidade é obrigatório')
    } else {
      setCityError('')
    }
    if (state == '') {
      error = true
      setStateError(errorColor)
      errors.push('Campo Estado é obrigatório')
    } else {
      setStateError('')
    }
    if (error === true) {
      setError(true)
      setErrors(errors)
      setAmountErrors(errors.length)
    } else {
      setError(false)
    }
    return error
  }

  const handleSubmit = e => {
    console.log(marialStatus)
    e.preventDefault()
    let method = 'post'
    if (action === 1) {
      method = 'put'
    }
    if (!validateForm()) {
      try {
        api[method]('', {
          name,
          age,
          marialStatus,
          cpf,
          state,
          city
        })
          .then(response => {
            setSuccess(true)
            setTimeout(() => {
              setName('')
              setAge(null)
              setMarialStatus('')
              setCPF('')
              setCity('')
              setState('')
              show()
              setSuccess(false)
            }, 5000)
          })
          .catch(err => {
            setError(true)
            setErrors(['Desculpe, houve um problema.'])
          })
      } catch (err) {
        setError(true)
        setErrors([
          'Desculpe, houve um problema no servidor, tente novamente mais tarde.'
        ])
      }
    }
  }

  const handleRemove = () => {
    try {
      // TODO Implementar exclusão no firebase
      // api
      //   .delete(`/${cpf}`)
      //   .then(response => {
      //     // getApi()
      //   })
      //   .catch(err => {
      //   })
    } catch (err) {}
  }

  const closeSuccessMessage = () => {
    setSuccess(false)
  }
  const closeErrorMessage = () => {
    setErrors([])
    setError(false)
  }

  return (
    <>
      {success === true && (
        <MessageSuccess>
          <div>
            <h5>Cadastro {actionsSuccessMessage[action]} com sucesso</h5>
          </div>
          <div>
            <button onClick={closeSuccessMessage}>
              <img src="green-x.svg" />
            </button>
          </div>
        </MessageSuccess>
      )}
      {error === true && (
        <MessageError>
          <div>
            <h5>
              Existe(m) {amountErrors} erro(s) ao {actionsErrorMessage[action]}{' '}
              uma nova pessoa.
            </h5>
            {errors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </div>
          <div>
            <button onClick={closeErrorMessage}>
              <img src="red-x.svg" />
            </button>
          </div>
        </MessageError>
      )}
      <Container>
        <div>
          <div>
            <div>
              <h5>Informações Pessoais</h5>
              <p>Adicione aqui as informações da nova pessoa</p>
            </div>
            <div>
              <Form>
                <FormGroup>
                  <Div dir="100%">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      color={nameError}
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </Div>
                  <Div>
                    <Label htmlFor="age">Idade</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      color={ageError}
                      value={age}
                      onChange={e => setAge(Number(e.target.value))}
                    />
                  </Div>
                </FormGroup>
                <FormGroup>
                  <Div>
                    <Label htmlFor="marialStatus">Estado Civil</Label>
                    <Select
                      id="marialStatus"
                      name="marialStatus"
                      color={marialStatusError}
                      value={marialStatus}
                      onChange={e => setMarialStatus(e.target.value)}
                    >
                      <option value="" disabled hidden>
                        Selecione uma opção
                      </option>
                      <option value="Solteiro(a)">Solteiro(a)</option>
                      <option value="Casado(a)">Casado(a)</option>
                      <option value="Divorciado(a)">Divorciado(a)</option>
                      <option value="Viúvo(a)">Viúvo(a)</option>
                    </Select>
                  </Div>
                  <Div>
                    <Label htmlFor="cpf">CPF</Label>
                    <Input
                      id="cpf"
                      name="cpf"
                      type="text"
                      maxLength={14}
                      color={cpfError}
                      value={cpf}
                      onChange={e => setCPF(handleCPFNumber(e.target.value))}
                    />
                  </Div>
                </FormGroup>
                <FormGroup>
                  <Div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      color={cityError}
                      value={city}
                      onChange={e => setCity(e.target.value)}
                    />
                  </Div>
                  <Div>
                    <Label htmlFor="state">Estado</Label>
                    <Select
                      id="state"
                      name="state"
                      color={stateError}
                      value={state}
                      onChange={e => setState(e.target.value)}
                    >
                      <option value="" disabled hidden>
                        Selecione uma opção
                      </option>
                      <option value="São Paulo">São Paulo</option>
                      <option value="Rio de Janeiro">Rio de Janeiro</option>
                      <option value="Mato Grosso">Mato Grosso</option>
                      <option value="Rio Grande so Sul">
                        Rio Grande so Sul
                      </option>
                    </Select>
                  </Div>
                </FormGroup>
              </Form>
              <DivSubmitButton>
                <DarkButton onClick={handleSubmit}>
                  {actionsButton[action]}
                </DarkButton>
                {action == 1 && (
                  <LightButton onClick={handleRemove}>
                    Excluir Pessoa
                  </LightButton>
                )}
              </DivSubmitButton>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Register
