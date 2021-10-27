import React from "react";

import  IMovie  from "../../models/Movie";
import GetMovies from "../../models/MovieModel";
import Item from "./Item";

const List: React.FC = (props) => {
  const movies: IMovie[] = GetMovies();
  return (
    <div className="listContainer">
      {movies &&
        movies.map((movie: any) => <Item key={movie.id} props={movie} />)}
    </div>
  );
};

export default List;
