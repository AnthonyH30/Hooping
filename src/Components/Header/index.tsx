import { Container, Button } from './styles';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Container>
      <h2><Link to="/">Hooping</Link></h2>
      <Button href="/login"><Link style={{color: 'white'}} to='/login'>Entrar</Link></Button>
    </Container>
  )
}
