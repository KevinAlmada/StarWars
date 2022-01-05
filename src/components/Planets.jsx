import React from 'react'
import { useSelector } from 'react-redux'

import PlanetsToShow from './PlanetsToShow'
import SearchResults from './SearchResults'

const Planets = () => {
    let planetasResults = useSelector(store => store.planets.searchPlanets);
    return (
        <div className='planetsContainer'>
            {   planetasResults.length > 0 ?
            <>
                <h2 className='resultadoTitle'>RESULTADoS : {planetasResults.length}</h2>
                <SearchResults/>
            </>:
                <PlanetsToShow/>
            }
        </div>
    )
}

export default Planets
