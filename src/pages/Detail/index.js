import { Redirect } from 'wouter';
import Gifs from 'components/Gifs/Gifs';
import Spinner from 'components/Spinner/Spinner';
import useSingleGifs from 'hooks/useSingleGifs';
/* import useSeo from 'hooks/useSeo' */
import { Helmet } from 'react-helmet';

export const Detail = (props) => {
    const { id } = props.params;
    const { gif, isLoading, isError } = useSingleGifs({ id })

    /* useSeo({title:gif?gif.title:'',description:`Detail of ${gif?gif.title:''}`}) */
    if (isLoading) return (<>
        <Helmet>
            <title>Cargando ...</title>
        </Helmet>
        <Spinner />
    </>)

    if (isError) return <Redirect to='/404' />

    if (!gif) return null

    return (
        <>
        <Helmet>
        <title>{gif?`${gif.title} || Gifi`:''}</title>
        </Helmet>
        <Gifs
            {...gif} />
        </>
    )
}