import React, { useState } from 'react'
import { Container, Div, Form, FormGroup, Input, Label } from './styles'

interface FormProps {}

function Register() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [marialStatus, setMarialStatus] = useState('')
  const [cpf, setCPF] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  return (
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
                <Div>
                   {/* width="100%"> */}
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    onChange={e => setName(e.target.value)}
                  />
                </Div>
                <Div>
                  <Label htmlFor="age">Idade</Label>
                  <Input
                    id="age"
                    name="age"
                    type="text"
                    onChange={e => setAge(e.target.value)}
                  />
                </Div>
              </FormGroup>
              <FormGroup>
                <Div>
                  <Label htmlFor="marialStatus">Estado Civil</Label>
                  <Input
                    id="marialStatus"
                    name="marialStatus"
                    type="text"
                    onChange={e => setMarialStatus(e.target.value)}
                  />
                </Div>
                <Div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    name="cpf"
                    type="text"
                    onChange={e => setCPF(e.target.value)}
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
                    onChange={e => setCity(e.target.value)}
                  />
                </Div>
                <Div>
                  <Label htmlFor="state">Estado</Label>
                  <Input
                    id="state"
                    name="state"
                    type="text"
                    onChange={e => setState(e.target.value)}
                  />
                </Div>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Register
