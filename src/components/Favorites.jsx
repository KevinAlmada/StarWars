import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Favorites = () => {
    let planetasFav = useSelector(store => store.favorites.planetsFav)
    
    return (
        <div>
            {
                planetasFav[0] ? planetasFav.map(planeta => <p key={planeta.diameter}>{planeta.name}</p>) : null
            }
        </div>
    )
}

export default Favorites
