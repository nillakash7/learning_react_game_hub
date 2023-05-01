import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
export const GameCriticScore = ({ score }: Props) => {
  const colorScheme = score > 90 ? "green" : "red";
  return (
    <Badge
      fontSize="15px"
      paddingX={2}
      paddingY={1}
      borderRadius={5}
      variant="subtle"
      colorScheme={colorScheme}
    >
      {score}
    </Badge>
  );
};
