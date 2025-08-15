import React from "react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genre } = useGenre();

  return (
    <ul>
      {genre.map((genre) => (
        <li key={genre.id}> {genre.name} </li>
      ))}
    </ul>
  );
};

export default GenreList;
