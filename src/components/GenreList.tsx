import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelecGenre: (genre: Genre) => void;
  sellectedGenre: Genre | null;
}

export const GenreList = ({ sellectedGenre, onSelecGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((gerne) => (
          <ListItem key={gerne.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageURL(gerne.image_background)}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                objectFit={"cover"}
                fontWeight={gerne.id === sellectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelecGenre(gerne)}
                fontSize="lg"
                variant="link"
              >
                {gerne.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
