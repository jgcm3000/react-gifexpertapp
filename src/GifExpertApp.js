import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';
const GifExpertApp = () => {//se puede colocar enter y ordenarlos
    // const categorias = ['One Punch','Samurai X','Dragon Ball'];
    // const [categorias, setCategoria] = useState(['One Punch','Samurai X','Dragon Ball']);
    const [categorias, setCategoria] = useState(['Megadeth']);

    // const handleAdd = () =>{
    //     // setCategoria( [...categorias, 'NuevaCat']);
    //     setCategoria( cate => [...cate,'NuevaCat']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategoria={setCategoria} />
            <hr />
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {
                    categorias.map( category => (
                        <GifGrid 
                            key={ category } 
                            categoria={ category } 
                        />
                    ))
                }
            </ol>
        </>
    );
}

//colocado en el html 
// {
//     categorias
// }

//aqui es donde se hace la validacion de lasa props
// GifExpertApp.propTypes = {
//     saludo: PropTypes.string.isRequired
// }

// PrimeraApp.defaultProps = {
//     subtitulo: 'Subtitulo Pred'
// }

// categorias.map( category => {
//     //el key no puede ser el indice...
//     return <li key={category}>{ category }</li>
// })

export default GifExpertApp;