import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'
import { Banner, Container, Content } from './styles'
import mask from '../../assets/mask.svg'
import { Header } from '../../components/Header'
import { SectionHome } from '../../components/SectionHome'
import { Footer } from '../../components/Footer'
import { DishCard } from '../../components/DishCard'
export function Home() {
    
  const navigate = useNavigate()

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  return (
    <Container>
    
      <Header />

      <Content>
        <Banner>
          <img src={mask} alt="" />
          <div className="text">  
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
          
        </Banner>
        <SectionHome >
        <label>Refeições</label>
      
      
        <DishCard onClick={() => handleDetails(1)}/>
        <label>Sobremesa</label>
        <DishCard />
        <label>Bebidas</label>
        <DishCard />

        </SectionHome>
        
      </Content>
      <Footer/>
    </Container>
  )
}