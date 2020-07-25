import React, { Component } from 'react';
import api from '../../services/api';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

import './styles.css'   
import './responsive.css'

import Banner from '../../components/Banner'
import SearchBar from '../../components/Search-bar'


export default class Main extends Component {
    state = {
        movies: []

    };


    async componentDidMount() {
        const response = await api.get(`/moviesmain`);
        console.log(response)
        this.setState({ movies: response.data });
    }



    render() {
        const { movies } = this.state;

        if (!movies) return null;

        return (
            <div>
                <Banner />
                <SearchBar />
                <div className="movie-list">
                    {movies.map(movie => (

                        <article key={movie.id}>
                            <div className="poster-box">
                                <Link to={`/movie/${movie.id}`}>
                                    <img src={movie.poster} alt="Minha Figura" />
                                    <div className="movie-info">
                                        <div className="movie-title"> {movie.name} </div>
                                        <div className="movie-genre"> {movie.genre} </div>
                                        <div className="movie-rating"> <FontAwesomeIcon icon={faStar} /> {movie.rating} </div>
                                    </div>
                                </Link>
                            </div>
                        </article>

                    ))}
                </div>
            </div >
        )
    }
}