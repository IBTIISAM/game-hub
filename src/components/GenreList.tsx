import {
  Button,
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
}

export const GenreList = ({ onSelecGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
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
            <Button
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
  );
};
