import React from 'react'
import { useSelector } from 'react-redux'
import Element from '../components/Element'
import FormApp from '../components/FormAdd'
import Navbar from '../components/Navbar'

const AppScreen = () => {

    const name = useSelector(state => state.auth.displayName)
    const data = useSelector(state => state.nomina.data)
    
    return (
        <>
            <Navbar />
            <div className="container animate__animated animate__zoomIn">
                <h1 className="center"> Hola {name}</h1>
                <hr />
                <FormApp />
                <table className="">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Cantidad</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((elemento) => {
                            return (
                                <tr
                                    key={elemento.id}
                                    className="animate__animated animate__fadeInUp"
                                >
                                    <Element data={elemento} />
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AppScreen
