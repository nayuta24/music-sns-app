import { Flex, IconButton, Text } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { BsShareFill } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { VFC } from "react";

type Props = {
  comment: number;
  like: number;
};

export const CardReactionButtons: VFC<Props> = (props) => {
  const { comment, like } = props;

  return (
    <Flex mt="5px">
      <Flex w="30%" mr="auto">
        <IconButton
          aria-label="comment"
          icon={<ChatIcon />}
          size="0px"
          color="gray"
          bg="none"
        />
        <Text fontSize="15px" color="gray" ml="5px">
          {comment}
        </Text>
      </Flex>
      <Flex w="30%" mr="auto">
        <IconButton
          aria-label="like"
          icon={<GoHeart size="26px" />}
          size="0px"
          color="gray"
          bg="none"
        />
        <Text fontSize="15px" color="gray" ml="5px">
          {like}
        </Text>
      </Flex>
      <Flex w="30%" ml="auto">
        <IconButton
          aria-label="like"
          icon={<BsShareFill />}
          size="0px"
          color="gray"
          bg="none"
        />
      </Flex>
    </Flex>
  );
};
