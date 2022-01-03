import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavPlanet } from '../redux/FavDucks'
const SearchResults = () => {
    const dispatch = useDispatch()
    const planetResults = useSelector(store => store.planets.searchPlanets)
    return (
        <div>
             {
                planetResults.map(planet => <div key={planet.name}>
                    <p>{planet.name}</p>
                    <button onClick={() => dispatch(addFavPlanet(planet))}>corazon</button>
                </div>)
            }
        </div>
    )
}

export default SearchResults
