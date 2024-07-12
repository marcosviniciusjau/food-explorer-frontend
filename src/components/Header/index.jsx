import { Container, Profile, Brand, Search, AppearSearch } from './styles'
import { Input } from '../Input'
import { api } from '../../services/api'
import { Results } from '../Results'
import { Button } from '../Button'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import receipts from '../../assets/receipt.svg'
import {FiLogOut} from 'react-icons/fi'

export function Header() {
  const [visible,setVisible] = useState(false)
  const [search,setSearch] = useState('')
  const [movies,setMovies] = useState([]) 
  const navigation = useNavigate()
  function handleSignOut() {
    navigation('/')
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}&tags=${''}`)
      setMovies(response.data)
    }
    fetchMovies()
  },[search])

  return (
    <>
      <Container>
          <Brand>
          <img src={logo} alt="logo" />
          <h1>food explorer</h1>
        </Brand>
        <Search>
          <Input 
            type="text" 
            value={search}
            placeholder="Busque por pratos ou ingredientes"
            onChange={e => setSearch(e.target.value)}
            onFocus={() => setVisible(true)}
          />   
      {   
        visible && 
          <AppearSearch>
              {
              visible && movies.length > 0 ?
              movies.map(movie => <Results key={String(movie.id)} data={movie} id={movie.id}/>)
              : <h1>Não foi possível encontrar o prato ou ingrediente</h1>
            }
          </AppearSearch>
      }
        </Search>
     
        <Profile to="/profile">
          <div className="image">
           
         <Button title="Pedidos">
            <img src={receipts} alt="receipts" />
          </Button>
            <div className="user">  
              <span onClick={handleSignOut}>
                <FiLogOut />
              </span>
            </div>
          
          </div>
        </Profile>  
      
      </Container>
  
  
    </>
  )
}