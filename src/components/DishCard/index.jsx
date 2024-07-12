import { Container } from './styles'
import logo from '../../assets/logo.svg'
import { FiHeart } from 'react-icons/fi'
export function DishCard({ data, ...rest }) {
  return (
    <Container {...rest}>
      <div>
      <FiHeart /></div>
      <img src={logo} alt="logo" />
      <h1>2</h1>
     <h2>3</h2>
     <p>Lorem</p>
    </Container>
  )
}