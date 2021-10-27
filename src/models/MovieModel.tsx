import axios, { AxiosResponse } from "axios";
import { FunctionComponent, useEffect, useState } from "react";

import IMovie from "./Movie";

const regex: RegExp = /<(“[^”]*”|'[^’]*’|[^'”>])*>/g; // clean summery from tags

export const addToRepo = (nItem: IMovie) => {
  var flag = true;
  const prev = getLocal();
  const newArr = prev.map((i) => {
    if (i.id === nItem.id) {
      flag = false;
      return nItem;
    }
    return i;
  });
  if (flag) newArr.push(nItem);
  updateLocal(newArr);
  return;
};
const getLocal = () => {
  return JSON.parse(localStorage.getItem("0") as string) as IMovie[];
};

const updateLocal = (items: IMovie[]) => {
  localStorage.setItem("0", JSON.stringify(items));
};

const GetMovies = (): IMovie[] => {
  const [movies, setMovie] = useState<IMovie[]>([]);

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
              rating: (parseFloat(i.rating.average) / 2).toString(),
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
  const local = getLocal();

  if (local.length == 0) updateLocal(movies);
  return local;
};

export default GetMovies;
