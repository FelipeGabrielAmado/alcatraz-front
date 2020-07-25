import React from 'react';
import './styles.css'
import './responsive.css'
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Banner = () => (

    <div className="banner">
        <div className='banner-info'>
            <div className='banner-movie-title'> Joker </div>
            <div className='banner-movie-info'> Crime, Drama, Thriller | Duration: 2h 2min </div>
            <div className='banner-buttons'>
                <a href='http://localhost:3001/movie/1'> <div className='banner-watch-button'> WHERE TO WATCH </div> </a>
                <a href='https://www.imdb.com/title/tt7286456/?ref_=nv_sr_srsg_0'>
                    <div className='rating-button'>
                        <div className='banner-rating'>
                            Rating <div className='rating-source'>based on IMDB</div>
                        </div>
                        <div className='banner-stars'><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStarHalf} /></div>
                    </div>
                </a>
            </div>
        </div>
       <div className='img-banner'> <img src="images/banner-joker.jpg" /> </div>
    </div >

);

export default Banner;