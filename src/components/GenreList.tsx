import React from "react";
import useGenres from "../hooks/useGenre";

export const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <ul>
      {genres.map((gerne) => (
        <li key={gerne.id}>{gerne.name}</li>
      ))}
    </ul>
  );
};
