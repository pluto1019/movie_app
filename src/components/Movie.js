import React from 'react';
import PropTypes from 'prop-types';

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div>
      <img src={poster} alt={title} />
      <h1>{title}</h1>
      <p>{year}</p>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
