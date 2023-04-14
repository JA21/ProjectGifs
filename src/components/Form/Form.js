
import React from 'react';
import { useLocation } from 'wouter';

import { Button } from 'antd';

import useForm from './hook'

import './form.css'
const Rating = ['g', 'pg', 'pg-13', 'r']
const Language = ['en', 'es', 'pt', 'fr', 'it', 'ko']


const Form = ({ initialKeyword = '', initialRating = 'g' }) => {
    const [, setLocation] = useLocation();


    const { keyword, rating,lenguage, updateKeyword, updateRating, updateLenguage } = useForm({ initialKeyword, initialRating });

    const HandleSubmit = evet => {
        evet.preventDefault();
        //navegacion
        setLocation(`/search/${keyword}/${rating}`)

    }
    const HandleInput = evet => {
        updateKeyword(evet.target.value)
    }

    const handleChangeRating = evet => {
        updateRating(evet.target.value)
    }

    const handleChangeLanguage = evet => {
        updateLenguage(evet.target.value)
    }

    const handleChangeReset = evet => {
        evet.preventDefault();
        document.querySelector('input').value=''
        document.querySelector('#rating').value='0'
        document.querySelector('#lenguge').value='0'
    }
    

    return (
        <div className='containerFormSearch'>
            <form onSubmit={HandleSubmit}>
                <input onChange={HandleInput} type='text' placeholder='Search gifs' defaultValue={keyword} />
                <select onChange={handleChangeRating} value={rating} id='rating'>
                    <option disabled value={0} >Ratings chose</option>
                    {Rating.map((r) => <option key={r}>{r}</option>)}
                </select>
                <select onChange={handleChangeLanguage} value={lenguage} id='lenguage'>
                    <option disabled value={0}>Language chose</option>
                    {Language.map((l) => <option key={l}>{l}</option>)}
                </select>
                <Button className='btnHomeSend' htmlType='submit'>Enviar </Button>
                <Button className='btnHomeSend' htmlType='button' onClick={handleChangeReset}>Reset </Button>
            </form>

        </div>
    )
}

export default React.memo(Form);