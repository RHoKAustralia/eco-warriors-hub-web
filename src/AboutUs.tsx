import styled from 'styled-components'

const LeftContainer = styled.div`
  flex: 2;
 
  @media only screen and (min-width: 700px){
    padding-right: 2rem;
    padding-left: 1rem;
  }
  padding-right: 0rem;
`

const RightContainer = styled.div`
  flex: 1.5;
  overflow: hidden;
  width: 300px;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 700px){
    flex-direction: row;
  }
  align-items: center;
`

const LargeTitle = styled.div`
  font-size: 3rem;
  margin-bottom: 1em;
  margin-top: 4rem;
  font-weight: bold;
`

const Heading = styled.h2`
  font-size: 3rem;
`

const SmallText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`

const AboutUsImage = styled.img`
  height: 300px;
 
  @media only screen and (min-width: 700px){
    height: 800px;
  }

`

const AboutUs = () => {

  return (
    <ContentContainer>
      <LeftContainer>
        <Heading>Who We Are</Heading>

        <SmallText>EcoWarriorsHub is the place where we as young people go to find support and empowerment to get our ideas into action and collaborate with organisations to create a positive impact on the planet.</SmallText>
        <SmallText>The rising awareness around the catastrophic state of the planet has reached us. While we  have great ideas and want to be part of the solution, we often feel powerless and that our actions lack impact. Organisations on the other hand, do excellent work in the environmental sustainability space but struggle to connect to young volunteers.</SmallText>
        <SmallText>At EcoWarriorsHub we bring these two groups together by providing a ‘one-stop shop’ online platform where EcoWarriors can find information about a range of sustainability projects run by various organisations, network and connect over projects that we are passionate about. Additionally, councils, industry partners and other external stakeholders provide funding and mentorship.</SmallText>

        <LargeTitle>What We Stand For</LargeTitle>
        <SmallText>Our mission is to enable young people to create a positive impact on the planet by connecting them to organisations and supporting them in starting their own environmental and sustainable projects.</SmallText>

        <LargeTitle>Our Vision</LargeTitle>
        <SmallText>Fostering youth passion about environmental sustainability and enabling action.</SmallText>
      </LeftContainer>

      <RightContainer>
        <AboutUsImage alt="about us" src='./about-us.jpg'></AboutUsImage>

      </RightContainer>
    
    </ContentContainer>

  )
}

export default AboutUs
