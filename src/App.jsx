import React from 'react';
import Counter from './components/counter';
import  {RepositoryList}  from './components/RepositoryList';
import global from './styles/global.scss'
// import { Container } from './styles';

export function App(){
  return(
    <>
     <RepositoryList />
     <Counter />
    </>
    )
}
