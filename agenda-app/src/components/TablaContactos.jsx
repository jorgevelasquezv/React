import React from 'react'

const TablaContactos = ({contactos}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Numero</th>
                    <th>Accion</th>
                </tr>
            </thead>
        </table>
    )
}

export default TablaContactos
