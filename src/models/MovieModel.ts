import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import IMovie from "./Movie";

const regex: RegExp = /<(“[^”]*”|'[^’]*’|[^'”>])*>/g; // clean summery from tags

export const updateToRepo = (nItem: IMovie) => {
  var flag = true;
  const prev = getLocalMovies();
  const newArr = prev.map((i) => {
    if (i.id === nItem.id) {
      flag = false;
      return nItem;
    }
    return i;
  });
  if (flag) newArr.push(nItem);
  setLocal(newArr);
  return;
};
const getLocalMovies = (): IMovie[] => {
  return JSON.parse(localStorage.getItem("Loc@!-M0vi95") as string);
};

const setLocal = (items: IMovie[]) => {
  localStorage.setItem("Loc@!-M0vi95", JSON.stringify(items));
};

const GetMovies = (): IMovie[] => {
  const [movies, setMovie] = useState<IMovie[]>([]);

  function fetchMovies() {
    axios
      .get("https://api.tvmaze.com/shows?id=0")
      .then((response: AxiosResponse<any>) => {
        const fromapi: IMovie[] = (response.data as [any]).map((i) => {
          return {
            id: i.id,
            name: i.name,
            year: (i.premiered as string).slice(0, 4),
            imageURL: i.image.medium,
            derector: i.network ? i.network.name : "",
            genres: i.genres,
            summary: (i.summary as string)
              .replaceAll(regex, "\n")
              .replace(i.name as string, ""),
            rating: (parseFloat(i.rating.average) / 2).toString(),
          };
        });
        setMovie(fromapi);
        return setMovie(fromapi);
      })
      .catch((e: Error) => {
        console.error("ERROR! couldn't fetch data from DB", e.message);
      });
  }

  useEffect(() => {
    fetchMovies();
    return () => {};
  }, []);

  var local: IMovie[] | undefined;
  local = getLocalMovies();

  if (local === null || local.length === 0) {
    setLocal(movies);
  }
  return local;
};

export default GetMovies;
