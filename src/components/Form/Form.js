
import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { ButtonAnt } from "../ButtonAnt/ButtonAnt";

import './form.css'

const Form = () => {
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useLocation();
    const HandleSubmit = evet => {
        evet.preventDefault();
        //navegacion
        setLocation(`/search/${keyword}`)

    }
    const HandleInput = evet => {
        setKeyword(evet.target.value)
    }
    return (
        <form onSubmit={HandleSubmit}>
            <input onChange={HandleInput} type='text' placeholder='Search gifs' />
            <ButtonAnt className='btnHomeSend' Type='submit' Name='Enviar' />
        </form>
    )
}

export default React.memo(Form);