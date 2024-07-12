import { useState } from 'react'

import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'
export function SignIn() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos')
    }
   
  }
  return (
    <Container>
      <Background>
        <img src={logo} alt="logo" />
        <h1>food explorer</h1>
      </Background>

      <Form>
        <h2>Faça login</h2>

<label>Email</label>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

<label>Senha</label>
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Já tenho uma conta</Link>
      </Form>

    </Container>
  )
}