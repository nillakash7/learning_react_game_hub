import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardShadow = () => {
  return (
    <Card width="400px" borderRadius={10} overflow="hidden">
      <Skeleton height={200}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};
