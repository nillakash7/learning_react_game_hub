import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Box,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

export const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <Accordion>
      {data.map((item) => (
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {item.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
