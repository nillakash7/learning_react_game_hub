import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { GenresItemShadow } from "./GenresItemShadow";

interface Props {
  onSelectGenres: (genres: Genres) => void;
  selectedGenres?: number | null;
}

export const GenresList = ({ onSelectGenres, selectedGenres }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <GenresItemShadow></GenresItemShadow>; //return <Spinner></Spinner>;
  return (
    <>
      <Heading marginBottom={3} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {data.map((item) => (
          <ListItem key={item.id} marginY={3}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="5px"
                objectFit="cover"
                src={getCroppedImageUrl(item.image_background)}
              ></Image>
              <Button
                variant="link"
                fontSize="lg"
                fontWeight={selectedGenres == item.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
                onClick={() => {
                  onSelectGenres(item);
                }}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
