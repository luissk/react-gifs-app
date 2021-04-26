import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const hanldeSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategorias(cats => [inputValue,...cats]);
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={hanldeSubmit}>
                <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
