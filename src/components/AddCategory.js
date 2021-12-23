import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategoria}) => {
    const [inputValue, setInputValue] = useState('');

    const handleImputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // setCategoria([inputValue]);
        if(inputValue.trim().length>2){
            setCategoria( cate => [inputValue,...cate]);
            setInputValue('');
        }
        // console.log('Submit Formulario');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={ handleImputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired
}

// onChange={ (e)=> console.log(e) }
// {/* <h1> {inputValue} </h1> */}

// Se puede utilizar asi tambien 
// export const AddCategory = (props) => {
// props.setCategoria( cate => [...cate,inputValue]);
