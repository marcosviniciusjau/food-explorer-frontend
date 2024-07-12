import { useState, useEffect } from 'react'
import { Container, Content, Profile, Title } from './styles'

import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Link } from 'react-router-dom'
import { ButtonText } from '../../components/ButtonText'
import dish from '../../assets/dish.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
export function Details() {
  const [data, setData] = useState()	

  const navigate = useNavigate()
  const params = useParams() 
    function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
    }
    fetchMovies()
  }, [params.id])
  return (
    <Container>
      <Header />

      <main>
        <Content>  
        <Link to="/" onClick={handleBack}>
           <ButtonText title="Voltar"/>
        </Link>
        <Profile to="/profile">
          <div className="image">
            <img src={dish} alt="logo" />
            </div>
            <div className="info">  
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
            <div> 
              <Section>
                <Tag 
                  title="{tag.name}"
                />
            </Section>
            </div>
            <p>1
            <Button title="Incluir R$ 15,00"/>
            </p>
            
            </div> 
        </Profile>
        </Content>
      </main>
    </Container>
  )
}