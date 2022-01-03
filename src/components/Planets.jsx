import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlanetsToShow from './PlanetsToShow'
import SearchResults from './SearchResults'

const Planets = () => {
    const dispatch = useDispatch();
    let planetasResults = useSelector(store => store.planets.searchPlanets);
    return (
        <div>
            {   planetasResults.length > 0 ?
            <div>
                <p>resultados</p>
                <SearchResults/>
            </div>:
                <PlanetsToShow/>
            }
        </div>
    )
}

export default Planets
