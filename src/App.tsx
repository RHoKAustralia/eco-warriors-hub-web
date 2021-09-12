import './App.css';
import { db, storage } from './firebase'
import { collection, getDocs } from 'firebase/firestore/lite';
import { useState, useEffect } from 'react';
import { ref, StorageReference, getDownloadURL } from 'firebase/storage'
import Project from "./Project"
import styled from 'styled-components'


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
    <div className="App">
      <header className="App-header">
        <h1>Eco Warriors Hub</h1>
      </header>
      <body className="Body">
        <StyledProjectsHeading>Current projects</StyledProjectsHeading>
        <StyledProjects>
          {count.map(project => {
            return (
              <Project name={project.title} summary={project.summary} link={project.link} img={project.img ?? ''}></Project>
            )
          })}
        </StyledProjects>
      </body>
    </div>
  );
}

export default App;
