import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

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
  justify-content: center;
  align-items: center;

  gap: 12px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    font-family: 'Roboto', serif;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
export const Search = styled.div`
  grid-area: search;
  padding: 24px 24px 0;
  
  width: 630px;
  position: relative;
`
export const AppearSearch= styled.button`
  display: flex;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.CAKE_100};
  border: none;
  border-radius: 10px;

  > h1 {
    flex: 1;
    text-align: left;
    font-size: 16px;
    padding: 22px;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 18px;
  .image {
    display: flex;
    flex-direction: row-reverse;
    gap: 18px;
  }
  .image > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .user {
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    > svg {
    font-size: 16px;
  }
  }
    

`

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
`