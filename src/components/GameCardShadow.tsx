import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardShadow = () => {
  return (
    <Card>
      <Skeleton height={200}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};
