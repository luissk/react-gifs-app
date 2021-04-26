import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({categoria}) => {

    const {data:images, loading} = useFetchGifs(categoria); //data:images -> renombrando data a images

    return (
        <>
            <h3 className="animate__animated animate__bounce">{categoria}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>} {/* operador ternario corto  */}
            {<div className="card-grid">            
                {
                    images.map( img => (
                        <GifGridItem 
                        key = {img.id}
                        {...img}
                        />
                    ))
                }
            </div>}
        </>
    )
}

export default GifGrid
