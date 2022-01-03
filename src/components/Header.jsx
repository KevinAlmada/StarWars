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
            <nav>
                <NavLink to="/fav">favoritos</NavLink>
                <NavLink to="/" onClick={() => clickHandlerSearchResults()}>home</NavLink>
            </nav>
            <SearchBar/>
        </header>
    )
}

export default Header
