import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import IMovie from "./Movie";

const regex: RegExp = /<(“[^”]*”|'[^’]*’|[^'”>])*>/g; // clean summery from tags

export const addToRepo = (nItem: IMovie) => {
  console.log(nItem);
  return;
};

const GetMovies = (): IMovie[] => {
  useEffect(() => {
    const fetchMovies = () => {
      axios
        .get("https://api.tvmaze.com/shows?id=0")
        .then((response: AxiosResponse<any>) => {
          const fromapi = [] as IMovie[];
          (response.data as [any]).map((i) => {
            fromapi.push({
              id: i.id,
              name: i.name,
              year: (i.premiered as string).slice(0, 4),
              imageURL: i.image.medium,
              derector: i.network ? i.network.name : "",
              genres: i.genres,
              summary: (i.summary as string)
                .replaceAll(regex, "\n")
                .replace(i.name as string, ""),
            });
          });
          setMovie(fromapi);
          return;
        })
        .catch((e: Error) => {
          console.error("ERROR! couldn't fetch data from DB", e.message);
        });
    };
    fetchMovies();

    return () => {};
  }, []);
  const local = JSON.parse(localStorage.getItem("0") as string) as [];
  console.log(local);
  const [movies, setMovie] = useState<IMovie[]>([]);

  return movies;
};

export default GetMovies;
