import { VFC } from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

type Props = {
  title: string;
  body: string;
};

export const CardComment: VFC<Props> = (props) => {
  const { title, body } = props;

  return (
    <Box mt="30px" h="60%">
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="sm" mt="10px">
        {body}
      </Text>
    </Box>
  );
};
