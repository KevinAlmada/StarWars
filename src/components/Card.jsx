import React,{useState,useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { addFavPlanet } from '../redux/FavDucks'

const Card = ({planet}) => {
    const dispatch = useDispatch()
    const [favState, setFavState] = useState(false)
    const favs = useSelector(store =>  store.favorites.planetsFav)
    const {name , terrain ,climate , diameter} = planet
    useEffect(() => {
        let includes = false ;
        favs.forEach(favorite => {
            if (favorite.name === name) {
                includes = true;
            }
        })
        includes === true ? setFavState(true) : setFavState(false) ;
    }, [favs,name])
    return (
        <article className='planetCard'>
            <h2 className='planetCardH2'>{name}</h2>
            <h4 className='planetCardH4'>Diameter :</h4>
            <span className='planetCardSpan'>{diameter}</span>
            <h4 className='planetCardH4'>Terrain :</h4>
            <span className='planetCardSpan'>{terrain}</span>
            <h4 className='planetCardH4'>Climate :</h4>
            <span className='planetCardSpan'>{climate}</span>
            <button onClick={() => dispatch(addFavPlanet(planet))}><i className={ favState ? "fas fa-heart": "far fa-heart"}></i></button>
        </article>
    )
}

export default Card
