import React from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useForm from '../hook/useForm'
import { getPlanetsSearchAction } from '../redux/StarDucks'
const SearchBar = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate()
    let [keywordSearch,handleInputChanges,reset] = useForm({
        keyword:""
    })
    let currentPath = window.location.pathname;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPlanetsSearchAction(keywordSearch.keyword))
        reset()
        if (currentPath !== "/") {
            navigate('/')
        }
    }
    return (
        <form onSubmit={handleSubmit} className='searchBarHeader'>
            <input type="search" name="keyword" onChange={handleInputChanges} value={keywordSearch.keyword}/>
            <button type='submit'><i className="fas fa-search"></i></button>
        </form>
    )
}

export default SearchBar
