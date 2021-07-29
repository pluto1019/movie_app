import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

class Home extends React.Component {
  state = {
    isLoading: true,
    count: 0,
    movies: [],
    api_key: 'edafd92e71cf23435b09bacb97f14b4d',
  };
  getMovies = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.state.api_key}`
    );

    this.setState({ movies: results, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className='container'>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                id={movie.id}
                year={movie.release_date}
                summary={movie.overview}
                poster={movie.poster_path}
              />
            );
          })
        )}
      </section>
    );
  }
}

export default Home;
