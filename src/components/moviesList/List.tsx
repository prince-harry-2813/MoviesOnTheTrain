import React from "react";

import GetMovies, { MovieModel } from "../../models/MovieModel";
import Item from "./Item";

const List: React.FC = (props) => {
  const movies: MovieModel[] = GetMovies();
  return (
    <div className="listContainer">
      {movies &&
        movies.map((movie: any) => <Item key={movie.id} props={movie} />)}
    </div>
  );
};

export default List;
