import { useState, useEffect } from "react"
import {Card} from 'antd'; 

export default function PokeCard({pokemon}) {
    const [pokeImage, setPokeImage] = useState({})

    async function fetchPokeDetails(){
        const response = await fetch(pokemon.url)
        const data = await response.json()
        setPokeImage(data.sprites.front_default)
    }

        useEffect(() => {
            fetchPokeDetails()
        }, [])


    return (
        <Card
        cover={<img alt="example" src={pokeImage} />}
        >

            <Card.Meta title={pokemon.name} />

        </Card>
    )
}