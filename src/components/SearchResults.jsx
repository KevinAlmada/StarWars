import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
const SearchResults = () => {
    const planetResults = useSelector(store => store.planets.searchPlanets)
    return (
        <section>
                {
                    planetResults.map(planet => <Card key={planet.name} planet={planet} />)
                }
        </section>
    )
}

export default SearchResults
