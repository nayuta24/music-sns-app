import { memo } from "react";
import { useSetRecoilState } from "recoil";
import { Box } from "@chakra-ui/react";
import { homeState } from "../../../store/homeState";
import { PostCard } from "../../organisms/Home/post/PostCard";

export const Recent = memo(() => {
  const setTopic = useSetRecoilState(homeState);
  setTopic({ topic: "recent" });
  return (
    <Box>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    </Box>
  );
});
