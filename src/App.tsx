import logo from './logo.svg';
import './App.css';
import { db, storage } from './firebase'
import { collection, getDocs } from 'firebase/firestore/lite';
import { useState, useEffect } from 'react';
import { ref, StorageReference, listAll, getDownloadURL } from 'firebase/storage'

type Project = {
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
      const projectsList = projectsSnapshot.docs.map(doc => doc.data()) as Project[]

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

  const [count, setCount] = useState<Project[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Eco Warriors Hub</h1>
        {count.map(a => {
          return (
            <div>
              {a.title}
              <p>{a.summary}</p>
              <a className="App-link" href={a.link}>{a.link}</a>
              <div>
                <img src={a.img ?? ''}/>
              </div>
            </div>
          )
        })}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
