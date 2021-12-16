import React from 'react'
import PropTypes from 'prop-types'

const FormImages = ({handleSubmit}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row m-2">
                    <label className="col-11 w-75 m-2">
                        Buscar:{' '}
                        <input
                            type="text"
                            name="inputText"
                            className="w-100 m-2"
                        />
                    </label>
                    <button type="submit" className="col-1 m-2">
                        <span className="material-icons">search</span>
                    </button>
                </div>
            </form>
        </>
    );
}

FormImages.propTypes = {
    handleSubmit: PropTypes.func
}

export default FormImages
