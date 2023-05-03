import {
  HStack,
  List,
  ListItem,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";

export const GenresItemShadow = () => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item} marginY={3}>
          <HStack>
            <SkeletonCircle size="10" />
            <SkeletonText width="100%"></SkeletonText>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
