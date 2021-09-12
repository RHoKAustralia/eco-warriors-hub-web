import styled from 'styled-components'

const FooterContainer = styled.div`
  height: 4rem;
  color: white;
  background-color: darkcyan;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`

const Footer = () => {
  return (
    <FooterContainer>
      <img height="40px" src='/eco-warriors-logo.png'></img>

      © Eco Warriors Hub
    </FooterContainer>
  )
}

export default Footer
