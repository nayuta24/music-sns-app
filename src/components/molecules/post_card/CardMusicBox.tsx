import { Flex, Image, Box, Text } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  img: string;
  title: string;
  artist: string;
};

export const CardMusicBox: VFC<Props> = (props) => {
  const { img, title, artist } = props;

  return (
    <Flex
      w="30%"
      h="100%"
      py="50px"
      flexDirection="column"
      align="center"
      mr="auto"
    >
      <Image src={img} boxSize="150" />
      <Box mt="10px">
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm">{artist}</Text>
      </Box>
    </Flex>
  );
};
