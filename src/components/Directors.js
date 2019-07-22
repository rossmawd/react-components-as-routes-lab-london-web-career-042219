import React from 'react';
import { directors } from '../data';

const Directors = (props) => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {

        return (
          <div>Name-{director.name};

            <ul>
              {director.movies.map(movie => <li> {movie}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
//make a new <div> for each director. The <div> should contain the director's name and an <ul> for each of their movies.