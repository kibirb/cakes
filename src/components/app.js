import React, { Component } from 'react';
import MovieList from './movie-lists'
import MovieDetail from './movie-detail'

export default class App extends Component {
  render() {
    return (
      <div>
      	<MovieList />
      	<MovieDetail />
      </div>
    );
  }
}
