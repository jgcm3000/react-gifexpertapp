// import React, { useEffect, useState } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {
    const {data:images, loading} = useFetchGifs(categoria);
    return (
        <>
            <h3 className='animate__animated animate__backInDown'>{categoria}</h3>
            <div className='card-grid'>
            { loading&&<p className='animate__animated animate__flash'>Cargando...</p>}
            {
            images.map( img => (
                <GifGridItem
                    key = { img.id }
                    { ...img }
                />
            ))
            }
            </div>
        </>
    )
}

// { loading?'Cargando..':'Data Cargada'}

// {
//     images.map( ({id,title}) => (
//         <li key={ id } > { title } </li>
//     ))
// }