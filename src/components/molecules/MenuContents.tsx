import { Flex, Text } from "@chakra-ui/react";
import { memo } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { MenuButton } from "../atoms/button/MenuButton";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const MenuContents = memo(() => {
  const history = useHistory();
  const onRecent = () => {
    history.push("/home");
  };
  const onFollowPost = () => {
    history.push("/home/follow_post");
  };
  const onPopular = () => {
    history.push("/home/popular");
  };
  return (
    <Flex flexFlow="column" ml="20px" alignItems="start">
      <Link to="/home">
        <Text
          as="h1"
          fontSize="40px"
          color="green"
          fontWeight="bold"
          my="20px"
          ml="10px"
        >
          Bebop
        </Text>
      </Link>

      <MenuButton w="100%" onClick={onRecent}>
        最新の投稿
      </MenuButton>
      <MenuButton w="100%" onClick={onFollowPost}>
        フォロー
      </MenuButton>
      <MenuButton w="100%" onClick={onPopular}>
        人気の投稿
      </MenuButton>
      <Flex mt="300px" mx="auto">
        <PrimaryButton w="120px">投稿</PrimaryButton>
      </Flex>
    </Flex>
  );
});
