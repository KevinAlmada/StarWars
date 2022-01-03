import axios from 'axios';
/* constantes */
const dataInit = {
    planets:[],
    planetsError:false,
    searchPlanets:[]
}
/* types */
const GET_PLANETS = "GET_PLANETS"
const GET_SEARCH_PLANETS = "GET_SEARCH_PLANETS"
const ERROR_GET_PLANETS = "ERROR_GET_PLANETS"
const CLEAN_SEARCH_RESULTS = "CLEAN_SEARCH_RESULTS"
/* reducers */
export default function StarReducer(state=dataInit , action) {
    switch (action.type) {
        case GET_PLANETS:
            return{...state,planets:action.payload,planetsError:false};
        case GET_SEARCH_PLANETS:
            return{...state,searchPlanets:action.payload,planetsError:false};
        case ERROR_GET_PLANETS:
            return{...state,planetsError:action.payload};
        case CLEAN_SEARCH_RESULTS:
            return{...state,searchPlanets:action.payload,planetsError:false};
        default:
            return state;
    }
}

/* acciones */
export const getPlanetsAction = (page = 1) => async (dispatch,getState) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/planets/?page=${page}`)
        dispatch({
            type:GET_PLANETS,
            payload:res.data.results
        }) 
    } catch (error) {
        dispatch({
            type:ERROR_GET_PLANETS,
            payload:true
        }) 
    }
}
export const getPlanetsSearchAction = (keyword) => async (dispatch,getState) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/planets/?search=${keyword.toLowerCase()}`)
        dispatch({
            type:GET_SEARCH_PLANETS,
            payload:res.data.results
        }) 
    } catch (error) {
        dispatch({
            type:ERROR_GET_PLANETS,
            payload:true
        }) 
    }
}
export const clearSearchResults = () => async (dispatch,getState) => {
        dispatch({
            type:CLEAN_SEARCH_RESULTS,
            payload:[]
        }) 
}