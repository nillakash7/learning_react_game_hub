import useGenres from "../hooks/useGenres";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Box,
} from "@chakra-ui/react";

export const GenresList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <Accordion>
      {genres.map((genre) => (
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {genre.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
