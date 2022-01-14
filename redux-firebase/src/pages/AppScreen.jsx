import React from 'react'
import { useSelector } from 'react-redux'
import FormApp from '../components/FormApp'
import Navbar from '../components/Navbar'

const AppScreen = () => {

    const name = useSelector(state => state.auth.displayName)
    
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="center"> Hola { name }</h1>
                <hr />
                <FormApp/>
            </div>
        </>
    )
}

export default AppScreen
