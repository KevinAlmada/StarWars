import React from 'react'
import SearchBar from './SearchBar'
import {NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearSearchResults } from '../redux/StarDucks'
const Header = () => {
    const dispatch = useDispatch()
    const clickHandlerSearchResults = () => {
        dispatch(clearSearchResults())
    }
    return (
        <header>
            <nav className='headerNav'>
                <NavLink to="/fav">FAvS</NavLink>
            </nav>
            <NavLink to="/" onClick={() => clickHandlerSearchResults()}>
            <img src="./img/starWarsLogo.png" alt="starwarslogo" className='logoHeader'/>
            </NavLink>
            <SearchBar/>
        </header>
    )
}

export default Header
