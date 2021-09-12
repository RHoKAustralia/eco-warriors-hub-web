import './App.css';
import { db, storage } from './firebase'
import { collection, getDocs } from 'firebase/firestore/lite';
import { useState, useEffect } from 'react';
import { ref, StorageReference, getDownloadURL } from 'firebase/storage'
import Project from "./Project"
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/' 
import AboutUs from './AboutUs'

const StyledProjectsHeading = styled.div`
  font-size: 2rem;
  width: 100%;
  text-align: left;
  margin-bottom: 3rem;
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
        <StyledHeaderLink to="/"><h1>Eco Warriors Hub</h1></StyledHeaderLink>
        <StyledNav>

          <StyledLink to="/">Projects</StyledLink>
          <StyledLink to="/about-us">About us</StyledLink>

        </StyledNav>
      </header>
      <body className="Body">


  

        <Switch>
          <Route exact path="/">
            <StyledProjectsHeading>Current projects</StyledProjectsHeading>
            <StyledProjects>
              {count.map(project => {
                return (
                  <Project name={project.title} summary={project.summary} link={project.link} img={project.img ?? ''}></Project>
                )
              })}
            </StyledProjects>
          </Route>
          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>
        </Switch>

        
      </body>
    </div>
    </Router>
  );
}

export default App;
