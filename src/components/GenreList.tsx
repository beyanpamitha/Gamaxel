import useGenreUpdated from "../hooks/useGenreUpdated";

const GenreList = () => {
  //const { data } = useData<GenreUpdated>("/genres"); //We don't expose api data in a component like this in industry level project.

  const { data } = useGenreUpdated(); //usnig the updated hook to fetch genre data and hide api request logic from the component.

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}> {genre.name} </li>
      ))}
    </ul>
  );
};

export default GenreList;
