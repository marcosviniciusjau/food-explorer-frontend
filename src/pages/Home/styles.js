import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto ;
  grid-template-rows: 105px 0px auto 64px;
  grid-template-areas: 
  "header header"
  "menu content"
  "newnote content"
  "footer footer"
  ;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`
export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

`

export const Banner = styled.div`
background-color: ${({ theme }) => theme.COLORS.DARK_600};
display: flex;
`