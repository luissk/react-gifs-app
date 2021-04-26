import React,{useState} from 'react';
import {AddCategory} from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch']);

    /* const handleAdd = () => {
        //setCategorias([...categorias, 'Avengers']);
        setCategorias( cats => [...cats, 'Avengers'] );
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr />

            {
                categorias.map( categoria => 
                    <GifGrid 
                    categoria={categoria}
                    key={categoria}
                    />
                )
            }          
        </>
    );
}

export default GifExpertApp;