import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.footer`
  grid-area: footer;

  height: 105px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  
  border-bottom-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`
export const Brand = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 12px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    font-family: 'Roboto', serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }
  > p{
    align-items: end;
  }
`