import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import useData from "../hooks/useData";
import useGenres from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";

export const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((gerne) => (
        <ListItem key={gerne.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageURL(gerne.image_background)}
            ></Image>
            <Text fontSize="lg">{gerne.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
