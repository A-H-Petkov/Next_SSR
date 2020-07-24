import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const DetailsPanel = (props) => {

  const { closeDetails, movie } = props;
  console.log(props, 'detailsProps');

  return (
    <React.Fragment>
      <header className="App-header darker-back">
        <img src={movie.poster} alt="My_movies" className="app-logo details-poster" />
        <Button 
          className="close-modal-btn"
          title="close panel"
          onClick={closeDetails}
        >
          &#10005;
        </Button>
        <h4 className="details-title">{movie.title.toUpperCase()}</h4>
        <p className="color-sienna">{movie.genres.join(', ')}</p>
        <p className="detail-stats">
          <span>YEAR: {movie.year}</span>
          <span>RUNTIME {movie.runtime} min.</span>
          <span>RATING: 4.2/5</span>
        </p>
        <p className="details-overview">{movie.overview}</p>
        <div className="posters-panel"></div>
      </header>  
    </React.Fragment>    
  );
}

export default DetailsPanel;
