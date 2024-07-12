import { Container, Brand} from './styles'
import logo from '../../assets/logo_gray.svg'

export function Footer() {
 
  const year = new Date().getFullYear()
  return (
    <>
      <Container>
          <Brand>
          <img src={logo} alt="logo" />
          <h1>food explorer</h1>  
   
         <p>© {year}- Todos os direitos reservados.</p>

        </Brand>
      
      
      </Container>
  
    </>
  )
}