import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

class Home extends React.Component {
  state = {
    isLoading: true,
    count: 0,
    moview: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );
    this.setState({ movies, isLoading: false });
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
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })
        )}
      </section>
    );
  }
}

export default Home;
