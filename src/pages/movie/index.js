import React, { Component } from 'react'

import api from '../../services/api'
import './styles.css'
import './responsive.css'

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import YouTube from 'react-youtube';



export default class Movie extends Component {
    state = {
        movies: []

    };

    async componentDidMount() {
        window.scrollTo(0, 0)
        const { id } = this.props.match.params;
        const response = await api.get(`/movies/${id}`);
        console.log(response);
        this.setState({ movies: response.data });
    }

    render() {
        const { movies } = this.state;
        if (!movies) return null;

        const opts = {
            height: '390',
            width: '640'
        };
        const netflix = movies.filter(movie => movie.netflix !== null);
        const prime = movies.filter(movie => movie.prime !== null);
        const disney = movies.filter(movie => movie.disney !== null);
        const hbo = movies.filter(movie => movie.hbo !== null);
        const youtube = movies.filter(movie => movie.youtube !== null);

        return (
                <div className='movie-inner'>
                    {movies.map(movie => (
                        <div className='movie'>
                            <div className='movie-info-inner'>
                                <div className='info-inner'>
                                    <div className='movie-title-inner'> {movie.name} </div>
                                    <div className='movie-director-inner'> <div className='movie-pre-text'> Director: </div> {movie.director} </div>
                                    <div className='movie-stars-inner'> <div className='movie-pre-text'> Stars: </div> {movie.stars} </div>
                                    <div className='movie-genre-inner'> <div className='movie-pre-text'> Genre: </div> {movie.genre} </div>
                                    <div className='movie-rating-inner'> <FontAwesomeIcon icon={faStar} /> <div className='movie-pre-text'> Rating: </div>{movie.rating} </div>
                                    <div className='movie-description-inner'> {movie.description} </div>
                                </div>
                                <div className='movie-trailer-player'> <YouTube videoId={movie.trailer} opts={opts} onReady={this._onReady} /> </div>
                            </div>

                            <div className='movie-link'>
                                {netflix.map(movie => (
                                    <a href={movie.netflix} target="_blank"> <img src="/images/netflix.png" alt="Netflix" /> </a>
                                ))}

                                {prime.map(movie => (
                                    <a href={movie.prime} target="_blank"> <img src="/images/primevideo.png" alt="Prime Video" /> </a>
                                ))}

                                {disney.map(movie => (
                                    <a href={movie.disney} target="_blank"> <img src="/images/disney.png" alt="Disney Plus" /> </a>
                                ))}

                                {hbo.map(movie => (
                                    <a href={movie.hbo} target="_blank"> <img src="/images/hbo.png" alt="HBO Plus" /> </a>
                                ))}

                                {youtube.map(movie => (
                                    <a href={movie.youtube} target="_blank"> <img src="/images/youtube.png" alt="Youtube" /> </a>

                                ))}
                            </div>

                            <div className='movie-background'> <img src={movie.background} alt="Minha Figura" /> </div>

                        </div>
                    ))}
                </div>
        );
    }
}