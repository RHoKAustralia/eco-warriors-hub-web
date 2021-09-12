import './App.css';
import { db, storage } from './firebase'
import { collection, getDocs } from 'firebase/firestore/lite';
import { useState, useEffect } from 'react';
import { ref, StorageReference, getDownloadURL } from 'firebase/storage'
import Project from "./Project"
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/' 
import AboutUs from './AboutUs'
import NotFound from './NotFound'
import Footer from './Footer'

const StyledProjectsHeading = styled.div`
  font-size: 3rem;
  width: 100%;
  text-align: left;
  margin-bottom: 3rem;
  font-weight: bold
`

const StyledProjects = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledNav = styled.div`
  display: flex;
`

const StyledLink = styled(Link)`
  margin-right: 1rem;
  color: white;
`

const StyledHeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`

type ProjectType = {
  title: string
  summary: string
  link: string
  img: string | null
}

const App =  () => {

  useEffect(() => {
    const getProjects = async () => {
      const projectsCol = collection(db, 'projects');
      const projectsSnapshot = await getDocs(projectsCol);
      const projectsList = projectsSnapshot.docs.map(doc => doc.data()) as ProjectType[]

      let imgUrls: string[] = []

      for (let i = 0; i< projectsList.length; i++) {

        try {
          const imagesStorageRef: StorageReference = ref(storage, `images/${projectsList[i].img}`) 
          const imgUrl = await getDownloadURL(imagesStorageRef)
          imgUrls.push(imgUrl)

        } catch {
          imgUrls.push('')
        }
      }

      const projectsWithImgUrls = projectsList.map((project, index) => {
        return {...project, img: imgUrls[index]}
      })

      setCount(projectsWithImgUrls)
    }
  
    getProjects()
  }, []);

  const [count, setCount] = useState<ProjectType[]>([]);

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <StyledHeaderLink to="/">
          <img height="100px" src='/eco-warriors-logo.png'></img>
          <h1>Eco Warriors Hub</h1>
          </StyledHeaderLink>
        <StyledNav>

          <StyledLink to="/projects">Projects</StyledLink>
          <StyledLink to="/about-us">About us</StyledLink>

        </StyledNav>
      </header>
      <body className="Body">


        <Switch>
          <Route exact path="/">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/projects">
            <StyledProjectsHeading>Current projects</StyledProjectsHeading>
            <StyledProjects>
              {count.map(project => {
                return (
                  <Project name={project.title} summary={project.summary} link={project.link} img={project.img ?? ''}></Project>
                )
              })}
            </StyledProjects>
          </Route>
         
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>

        
      </body>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
