import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Buscador = ({setTexto}) => {

    function handleChange(e) {
        e.preventDefault();
        setTexto(e.target.value);
    }

    return (
        <div>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    onChange={handleChange}
                />
                <button className="btn btn-secondary me-4 disabled" type="button" id="button-addon2"><FontAwesomeIcon role='button' icon={faSearch} /></button>
            </div>
        </div>
    )
}

export default Buscador