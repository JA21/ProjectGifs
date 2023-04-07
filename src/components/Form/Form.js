
import React, { useState } from 'react';
import { useLocation } from 'wouter';

import { Button } from 'antd';

import './form.css'

const Form = () => {
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useLocation();
    const HandleSubmit = evet => {
        evet.preventDefault();
        console.log(evet)
        //navegacion
        setLocation(`/search/${keyword}`)

    }
    const HandleInput = evet => {
        setKeyword(evet.target.value)
    }
    return (
        <form onSubmit={HandleSubmit}>
            <input onChange={HandleInput} type='text' placeholder='Search gifs' />
            <Button className='btnHomeSend' htmlType='submit'  >Enviar </Button>
        </form>
    )
}

export default React.memo(Form);