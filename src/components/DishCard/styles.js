import styled from 'styled-components'

export const Container = styled.button`

  width: 208px;
  height: 248px;
  border: none;
  border-radius: 10px;

 > div > svg{ 
  margin-left: 150px;
 }
  > h1 {
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
  > p {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
  }
`