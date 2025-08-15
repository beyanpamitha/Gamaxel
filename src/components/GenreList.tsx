import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenreUpdated from "../hooks/useGenreUpdated";
import getOptimizedImageUrl from "../services/image-url";

const GenreList = () => {
  //const { data } = useData<GenreUpdated>("/genres"); //We don't expose api data in a component like this in industry level project.

  const { data } = useGenreUpdated(); //usnig the updated hook to fetch genre data and hide api request logic from the component.

  return (
    <List.Root listStyle={"none"}>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={3}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getOptimizedImageUrl(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
