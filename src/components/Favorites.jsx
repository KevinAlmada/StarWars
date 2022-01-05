import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import NotFound from './NotFound'
const Favorites = () => {
    let planetasFav = useSelector(store => store.favorites.planetsFav)
    
    return (
        <div className='planetsContainer'>
            <section>
            {
                planetasFav[0] ? planetasFav.map(planet => <Card key={planet.name} planet={planet} />) : <NotFound error="you don't have favorite planets yet, jedi." />
            }
            </section>
        </div>
    )
}

export default Favorites
