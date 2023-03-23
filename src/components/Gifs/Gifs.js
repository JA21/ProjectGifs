import { Link } from "wouter";
import { useLocation } from 'wouter';
import React from "react";
import './Gifs.css';
const Gifs = ({ id, url, title }) => {
    const [location, setLocation] = useLocation();
    const sendIdDetail = evet => {
        evet.preventDefault();
        setLocation(`/gif/${id}`)
    }
    return (
        <div className="containerGifs">
            <Link to={`/gif/${id}`} className='linkGifs' >
                <h3 className='h3Gifs'> {title} </h3>
                <img loading="lazy" src={url} alt={title} onClick={sendIdDetail} />
            </Link>
        </div>
    )
}

export default React.memo(Gifs, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
});