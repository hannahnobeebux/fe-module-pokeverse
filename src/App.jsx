/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import PokeCard from './components/Card'
import './App.css'

function App() {
  //inside paranthesis - the original state which is the initial value 
  const[pokeList, setPokelist] = useState([]); 

  async function fetchPokidata() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json(); 
    setPokelist(data.results)
  }

  useEffect(() => {
    fetchPokidata()
  }, [])
   

  return (
    <>
    {pokeList.map((pokemon) => {
      return <PokeCard key={pokemon.name} pokemon={pokemon} />
    })}
    </>
  )
}

export default App
