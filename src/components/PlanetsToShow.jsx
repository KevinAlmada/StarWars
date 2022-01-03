import React ,{ useState ,useEffect}from 'react'
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import { addFavPlanet } from '../redux/FavDucks'
import { getPlanetsAction } from '../redux/StarDucks'
const PlanetsToShow = () => {
    const [page , setPage] = useState(1);
    const dispatch = useDispatch();
    let planetas = useSelector(store => store.planets.planets);
    let planetasError = useSelector(store => store.planets.planetsError);
    useEffect(() => {
        dispatch(getPlanetsAction(page))
    }, [page,dispatch])
    return (
        <div>
            {
                planetas.map(planet => <div key={planet.name}>
                    <p>{planet.name}</p>
                    <button onClick={() => dispatch(addFavPlanet(planet))}>corazon</button>
                </div>)
            }
            {
                page <= 1 ? null : <button onClick={() => setPage(page - 1)}>anterior </button>
            }
            {
                planetasError ? null : <button onClick={() => setPage(page + 1)}>siguiente </button>
            }
        </div>
    )
}

export default PlanetsToShow
