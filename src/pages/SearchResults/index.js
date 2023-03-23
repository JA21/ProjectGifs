import { useCallback, useRef, useEffect } from 'react';
import UseGifs from 'hooks/useGifs.js';
import Spinner from 'components/Spinner/Spinner.js';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs.js';

import './index.css'
import UseNearScreen from 'hooks/UseNearScreen';
import debounce from 'just-debounce-it';
export const SearchResult = (props) => {
    const { keyword } = props.params
    const { gifs, loading, setPage } = UseGifs({ keyword });
    const externalRef = useRef();
    const { show } = UseNearScreen({ externalRef: loading ? null : externalRef, one: false });
    const debounceHandleNextPage = useCallback(debounce(() =>
    setPage(prevPage => prevPage + 1), 1000), [])

    useEffect(() => {
        
        if (show) debounceHandleNextPage();
    }, [debounceHandleNextPage, show])

    return (
        <div>
            {
                loading ?
                    <Spinner />
                    :
                    <ListOfGifs gifs={gifs} />
            }
            <div id='visor' ref={externalRef}></div>
        </div>
    )
}   