import React ,{ useState ,useEffect}from 'react'
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import { getPlanetsAction } from '../redux/StarDucks'
import Card from './Card'
import Loading from './Loading'
import NotFound from './NotFound'
const PlanetsToShow = () => {
    const [page , setPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    let planetas = useSelector(store => store.planets.planets);
    let planetasError = useSelector(store => store.planets.planetsError);
    useEffect(() => {
        dispatch(getPlanetsAction(page))
    }, [page,dispatch])
    useEffect(() => {
        setLoading(true)
    }, [planetas])
    const handleNextPage = () => {
        setPage(page + 1)
        setLoading(false)
    }
    const handlePrevPage = () => {
        setPage(page - 1)
        setLoading(false)
    }
    return (
        <>
            <section>
                {
                    loading  ? planetas.map(planet => <Card key={planet.name} planet={planet}/>) :  planetasError ? <NotFound page={page} setPage={setPage} type="noPlanets" error="Those are all the planets i know, see them again"/> : <Loading/>
                }
            </section>
            <div className={!loading ? "hide" : 'prevNextContainer'}>
            
                <button className={page <= 1 ? "hide" : "prevButton defButton"} onClick={handlePrevPage}>PRev</button>
            
            {
                planetasError ? null : <button className='nextButton defButton' onClick={handleNextPage}>NexT</button>
            }
            </div>
        </>
    )
}

export default PlanetsToShow
