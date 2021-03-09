import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";


//https://api.github.com/users/IgorGamantino

let repository = {
  name: 'ReactJs',
  description: 'repositorio do react',
  link: 'https://github.com/igorGamantino'
}
export function RepositoryList() {
  const [repositories,setRepositories] = useState([])

  useEffect(() => {
   fetch('https://api.github.com/users/IgorGamantino/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  },[])
    return (
        <section className='repository-list'>

          <h1>Lista de repositorio</h1>

          <ul>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository} />
          </ul>
        </section>
    )
}
