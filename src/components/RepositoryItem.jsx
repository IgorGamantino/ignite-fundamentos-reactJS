export function RepositoryItem(props){


  return (
    <li>

      <strong>{props.repository.name ??'nome'}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.link}>Acessar repositorio</a>

    </li>
  );
}
