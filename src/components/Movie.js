import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ year, title, summary, poster }) {
  return (
    <Link
      to={{
        pathname: '/movie-detail',
        state: {
          year,
          title,
          summary,
          poster,
        },
      }}
    >
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
      <h1>{title}</h1>
      <p>{year}</p>
      <p>{summary}</p>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
