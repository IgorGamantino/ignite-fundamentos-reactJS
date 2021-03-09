import { RepositoryItem } from "./RepositoryItem";


let repository = {
  name: 'ReactJs',
  description: 'repositorio do react',
  link: 'https://github.com/igorGamantino'
}
export function RepositoryList() {
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
