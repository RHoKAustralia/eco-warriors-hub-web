import styled from 'styled-components'
import Card from '@material-ui/core/Card';

const StyledProject = styled(Card)`

  max-width: 100%;
  display: flex;
  margin: 1rem;
  width: 80rem;
  height: 18rem;
  background-color: red;
`

const StyledInfo = styled.div`
padding: 1rem;
flex: 3;
border-right: 1px solid gray;
`

const StyledSummary = styled.p`
  text-align: left;
  font-size: 1.25rem;
  color: black;
`

const StyledImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
  padding: 0%.5rem;
`

const StyledTitle = styled.div`
  font-size: 2rem;
  color: black;
`

const StyledImage = styled.img`
width: 100%;

`

const StyledLink = styled.a`
  text-decoration: none;
`

const Project = (props: {name: string, summary: string, link: string, img: string}) => {

  return (
    <StyledLink href={props.link}>
      <StyledProject style={{backgroundColor: 'AliceBlue'}}>
        <StyledInfo>
          <StyledTitle>{props.name}</StyledTitle>
          <StyledSummary>{props.summary}</StyledSummary>
        </StyledInfo>
        <StyledImageContainer>
          <StyledImage src={props.img}></StyledImage>

        </StyledImageContainer>

      </StyledProject>
    </StyledLink>
  )
  
}

export default Project
