import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" width={"300px"} />
      <CardBody>
        <SkeletonText noOfLines={3} gap={2} />
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
