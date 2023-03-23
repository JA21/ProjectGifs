
import Gifs from 'components/Gifs/Gifs';
import GlobalGifs from 'hooks/GlobalGifs';
export const Detail = (props) => {
    const { id } = props.params;
    const gifs = GlobalGifs();

    const gif = gifs.find(g => g.id === id)

    return (
        <Gifs
            {...gif} />
    )
}