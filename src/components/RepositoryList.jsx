import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";


//https://api.github.com/users/IgorGamantino


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
             {repositories.map(repository => {
              return  <RepositoryItem key={repository.id} repository={repository}/>
             } )}
          </ul>
        </section>
    )
}
