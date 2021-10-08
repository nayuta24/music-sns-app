import { Box, Text, Flex, useDisclosure } from "@chakra-ui/react";
import { memo, ReactNode, useState, VFC } from "react";

import { HamburgerButton } from "../atoms/HamburgerButton";
import { MenuContents } from "../molecules/MenuContents";
import { MenuDrawer } from "../organisms/MenuDrawer";

type Props = {
  children: ReactNode;
};

export const HomeLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [topic, setTopic] = useState<"isRecent" | "isFollow" | "isPopular">(
    "isRecent"
  );

  return (
    // 余白を付ける
    <Box h="100vh" px={{ lg: "200", md: "none", sm: "none" }}>
      {/* 要素を横並びに */}
      <Flex spacing="none" align="center">
        {/* メニューバー */}
        <Box
          w="30%"
          h="100vh"
          display={{ lg: "inline", md: "none", sm: "none" }}
          pl="100px"
        >
          <MenuContents />
        </Box>
        {/* 投稿一覧 */}
        <Flex
          w={{ lg: "70%", md: "100%", sm: "100%" }}
          h="100vh"
          borderX="1px"
          borderColor="gray.200"
          flexDirection="column"
        >
          <Flex
            as="nav"
            w="100%"
            h="60px"
            borderBottom="1px"
            borderColor="gray.200"
            // textAlign="left"
            px="30px"
            pt="10px"
          >
            {/* ページタイトル */}
            <Text as="h1" color="gray.500" mr="auto" mt="8px">
              最新の投稿
            </Text>
            <HamburgerButton
              display={{ lg: "none", md: "inline", sm: "inline" }}
              onClick={onOpen}
            />
          </Flex>
          {/* 投稿一覧 */}
          <Box w="100%">{children}</Box>
        </Flex>
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
});
