import { Container, Button } from './styles'

export default function Header() {
  return (
    <Container>
      <h2><a href="/">Hooping</a></h2>
      <Button href="/login">Entrar</Button>
    </Container>
  )
}
