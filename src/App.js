import React, { useState } from 'react';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews);

  const addReview = review => {
    setReviews([...reviews, review]);
  };

  return (
    <div>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <Stars rating={movie.rating} />
      <ReviewList reviews={reviews} />
      <ReviewForm addReview={addReview} />
    </div>
  );
};

const Stars = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i}>⭐️</span>);
    } else {
      stars.push(<span key={i}>☆</span>);
    }
  }
  return <div>{stars}</div>;
};

const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </ul>
  );
};

const Review = ({ review }) => {
  return <li>{review}</li>;
};

const ReviewForm = ({ addReview }) => {
  const [review, setReview] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addReview(review);
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={review} onChange={e => setReview(e.target.value)} />
      <button type="submit">Submit Review</button>
    </form>
  );
};

const App = () => {
  const movies = [
    {
      title: 'The Shawshank Redemption',
      image:
        'https://m.media-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
      synopsis:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      rating: 5,
      reviews: [
        'An incredible movie, one of the best I have ever seen',
        'A must-watch for anyone who loves a good story',
        'A true classic in every sense of the word'
      ]
    },
    {
      title: 'The Dark Knight',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
        synopsis:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
        rating: 4.5,
        reviews: [
        'One of the best superhero movies of all time',
        'Joker is an unforgettable character',
        'A true masterpiece in every sense of the word'
        ]
        }
        ];
        
        return (
        <div>
        <h1>Movie Ratings and Reviews</h1>
        <MovieList movies={movies} />
        </div>
        );
        };
        
        export default App;

