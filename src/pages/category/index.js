import React, { Component } from 'react'
import api from '../../services/api'

import './styles.css';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'



export default class Category extends Component {
    state = {
        category: [],
        movies: []

    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/categories/${id}`);
        console.log(response);
        this.setState({ category: response.data });

        const res = await api.get(`/movies/categories/${id}`);
        console.log(response)
        this.setState({ movies: res.data });
    }

    render() {
        const { category } = this.state;
        const { movies } = this.state;
        
        return (
            <div>
                <div className='category-inner'>
                    {category.map(categories => (
                        <div className='category'>
                            <h1 className='movie-title-category'> {categories.name} </h1>
                            <div className='category-description'> {categories.description} </div>
                        </div>
                    ))}

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

                </div>
                            
            </div >
        );
    }
}