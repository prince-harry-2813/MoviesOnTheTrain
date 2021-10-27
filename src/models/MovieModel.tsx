import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
export type MovieModel = {
  id: string;
  name?: string;
  year?: string;
  derector?: string;
  imageURL?: string;
  genres?: string[];
  summary?: string;
};
const regex: RegExp = /<(“[^”]*”|'[^’]*’|[^'”>])*>/g; // clean summery from tags

const GetMovies = (): MovieModel[] => {
  const [movies, setMovie] = useState<MovieModel[]>([]);

  const local = JSON.parse(localStorage.getItem("0") as string) as [];

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    axios
      .get("https://api.tvmaze.com/shows?id=0")
      .then((response: AxiosResponse<any>) => {
        const fromapi = [] as MovieModel[];
        (response.data as [any]).map((i) => {
          fromapi.push({
            id: i.id,
            name: i.name,
            year: (i.premiered as string).slice(0,4),
            imageURL: i.image.medium,
            derector: i.network ? i.network.name : "",
            genres: ((i.genres as string[]).map((element, ind) => {
             return element = ind >= 1 ? (element = " | " + element) : element;
            })),
            summary: (i.summary as string)
              .replaceAll(regex, "\n")
              .replace(i.name as string, ""),
          });
        });
        return setMovie(fromapi);
      })
      .catch((e: Error) => {
        console.error("ERROR! couldn't fetch data from DB", e.message);
      });
  };

  const addToRepo = (df: any[]) => {
    if (df) {
      return df.map((i) => {
        if (
          !movies.some((o) => {
            return o.id === i.id;
          })
        )
          setMovie([
            ...movies,
            {
              id: i.id,
              name: i.name,
              year: i.year,
              imageURL: i.image,
              genres: i.genres,
              summary: i.summary,
            },
          ]);
      });
    }
    console.log(df);
  };

  return movies;
};

export default GetMovies;
