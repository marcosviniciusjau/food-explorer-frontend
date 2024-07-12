import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
 margin-right: 120px;
  margin-top: 120px;
  width: 476px;
  height: 70vh;
  background-color:  ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    margin-top: 12px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Background = styled.div`

  font-family: 'Roboto ', sans-serif;
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: center;
  align-items: center;
`