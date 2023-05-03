import { Text, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { GenresItemShadow } from "./GenresItemShadow";

interface Props {
  onSelectGenres: (genresId: number) => void;
}

export const GenresList = ({ onSelectGenres }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <GenresItemShadow></GenresItemShadow>; //return <Spinner></Spinner>;
  return (
    <List>
      {data.map((item) => (
        <ListItem
          key={item.id}
          marginY={3}
          onClick={() => onSelectGenres(item.id)}
        >
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="5px"
              src={getCroppedImageUrl(item.image_background)}
            ></Image>
            <Text fontSize="lg">{item.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
