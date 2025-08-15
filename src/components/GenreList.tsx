import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenreUpdated, { type GenreUpdated } from "../hooks/useGenreUpdated";
import getOptimizedImageUrl from "../services/image-url";

interface GenreListProps {
  onSelectedGenre: (genre: GenreUpdated) => void;
}

const GenreList = ({ onSelectedGenre }: GenreListProps) => {
  //const { data } = useData<GenreUpdated>("/genres"); //We don't expose api data in a component like this in industry level project.

  const { data, loading, error } = useGenreUpdated(); //usnig the updated hook to fetch genre data and hide api request logic from the component.

  if (error) return null;
  if (loading) return <Spinner />;

  return (
    <List.Root listStyle={"none"}>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getOptimizedImageUrl(genre.image_background)}
            />
            <Button
              fontSize={"lg"}
              variant={"ghost"}
              onClick={() => onSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
