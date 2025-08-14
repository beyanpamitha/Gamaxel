import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  let color = score >= 90 ? "green" : score >= 80 ? "yellow" : "red";
  return (
    <Badge
      color={color}
      fontSize={"14px"}
      fontWeight={"bold"}
      paddingX={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
