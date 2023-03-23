
import UseGifs from 'hooks/useGifs';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import Trending from 'components/TrendingSearches/index';
import Footer from 'components/Fotter/Footer';
import './home.css'
import Form from 'components/Form/Form';

 const Home = () => {
    const { gifs, loading } = UseGifs()
    return (
        <>
            <div className='containerFormHome'>
                <Form />
            </div>
            <h3 className='h3HomeLastSearch'>The last search</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className='h3Home'>The most popular gifs</h3>
            <Trending />
            <Footer />
        </>
    )
}

export default Home;