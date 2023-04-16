import React from "react";
import useData from "../hooks/useData";
import useGenres from "../hooks/useGenre";

export const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((gerne) => (
        <li key={gerne.id}>{gerne.name}</li>
      ))}
    </ul>
  );
};
