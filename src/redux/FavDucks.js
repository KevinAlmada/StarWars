/* constantes */
const dataInit = {
    planetsFav:[]
}
/* types */
const ADD_FAV_PLANET = "ADD_FAV_PLANET"
const REMOVE_FAV_PLANET = "REMOVE_FAV_PLANET"
/* reducers */
export default function FavReducer(state=dataInit , action) {
    switch (action.type) {
        case ADD_FAV_PLANET:
            return{...state,planetsFav:[...state.planetsFav,action.payload]};
        case REMOVE_FAV_PLANET:
            return{...state,planetsFav:action.payload};
        default:
            return state;
    }
}

/* acciones */
export const addFavPlanet = (planet) => async (dispatch,getState) => {
    const favPLanets = getState().favorites.planetsFav
    const planetFav = favPLanets.find(planeta => planeta.name === planet.name)
        if (planetFav) {
            const planetsWithoutPlanet = favPLanets.filter(planeta => planeta.name !== planetFav.name)
            dispatch({
                type:REMOVE_FAV_PLANET,
                payload:planetsWithoutPlanet
            })  
        }else{
            dispatch({
                type:ADD_FAV_PLANET,
                payload:planet
            })   
        }
}
