import { Flex, Box, IconButton } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRecoilValue } from "recoil";

import { HamburgerButton } from "../../atoms/button/HamburgerButton";
import { homeState } from "../../../store/homeState";
import { HomePostTitle } from "../../atoms/typography/HomePostTitle";
import { useHistory } from "react-router";

type Props = {
  children: ReactNode;
  onOpen: () => void;
};

export const HomePostBox: VFC<Props> = memo((props) => {
  const { children, onOpen } = props;
  const { topic } = useRecoilValue(homeState);
  const history = useHistory();

  const onBackHome = () => {
    history.push("/home");
  };

  return (
    <Flex
      w={{ base: "700px", md: "700px" }}
      h="100%"
      borderX={{ base: "none", md: "1px" }}
      borderColor={{ md: "gray.200" }}
      flexDirection="column"
    >
      <Flex
        as="nav"
        w="100%"
        borderBottom="1px"
        borderColor="gray.200"
        // textAlign="left"
        px="30px"
      >
        {/* ページタイトル */}
        <Box my="12px" h="40px">
          {topic === "recent" ? (
            <HomePostTitle>最新の投稿</HomePostTitle>
          ) : topic === "follow_post" ? (
            <HomePostTitle>フォロー</HomePostTitle>
          ) : topic === "popular" ? (
            <HomePostTitle>人気の投稿</HomePostTitle>
          ) : (
            <Flex>
              <IconButton
                icon={<ArrowBackIcon />}
                aria-label="Back home"
                bg="none"
                mr={2}
                fontSize="xl"
                onClick={onBackHome}
              />
              <HomePostTitle>スレッド</HomePostTitle>
            </Flex>
          )}
        </Box>

        <HamburgerButton
          display={{ base: "inline", md: "none" }}
          onClick={onOpen}
          ml="auto"
          my="auto"
          size="sm"
        />
      </Flex>
      {/* 投稿一覧 */}
      <Box
        h="100vh"
        w="100%"
        overflow="auto"
        flexDirection="column"
        align="center"
        gap="10px"
        pt="15px"
      >
        {children}
      </Box>
    </Flex>
  );
});
