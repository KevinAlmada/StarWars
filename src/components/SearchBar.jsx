import React from 'react'
import { useDispatch} from 'react-redux'
import useForm from '../hook/useForm'
import { getPlanetsSearchAction } from '../redux/StarDucks'
const SearchBar = () => {
    const dispatch = useDispatch();
    let [keywordSearch,handleInputChanges,reset] = useForm({
        keyword:""
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPlanetsSearchAction(keywordSearch.keyword))
        reset()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" name="keyword" onChange={handleInputChanges} value={keywordSearch.keyword}/>
            <button type='submit'>BUSCAR</button>
        </form>
    )
}

export default SearchBar
