import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../../config';
import FontAwsome from 'react-fontawesome';
import PropTypes from 'prop-types';
import MovieThumb from '../MovieThumb/MovieThumb';
import './MovieInfo.css';

const MovieInfo = (props) => {
    return (
        <div className="rmdb-movieinfo"
            style={{
                background: props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backrop_path}')`:`#000`
            }}
            >  
            <div className="rmdb-movieinfo-content">
                <div className="rmdb-movieinfo-thumb">
                    <MovieThumb
                        image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : './images/noimage.jpg' }
                        clickble = { false }
                        />
                    </div>    
                <div className="rmdb-movieinfo-text">
                    <h1>{props.movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{props.movie.overview}</p>
                    <h3>IMDB RAting</h3>
                    <div className="rmdb-rating">
                        <meter min="0" max="100" optimum="100" low="40" high="70" value={props.movie.vote_average * 10}></meter>
                            <p className="rmdb-score">{props.movie.vote_average}</p>
                    </div>
                    
                </div>  
                <FontAwsome className="fa-film"name="film" size="5x"/>
            </div>
        </div>
    )
}
MovieInfo.propTypes={
    directors: PropTypes.number,
    movie: PropTypes.string
}
export default MovieInfo;