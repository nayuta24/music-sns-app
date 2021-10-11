import { memo, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Box } from "@chakra-ui/react";
import axios from "axios";

import { homeState } from "../../../store/homeState";
import { PostCard } from "../../organisms/Home/post/PostCard";
import { PostsDataType } from "../../../type/api/PostsDataType";
import Posts from "../../../test_json/postsData.json";

export const Recent = memo(() => {
  const setTopic = useSetRecoilState(homeState);
  const [posts, setPosts] = useState<Array<PostsDataType>>([]);

  console.log(Posts);

  setTopic({ topic: "recent" });
  return (
    <Box>
      {Posts.map((obj) => (
        <PostCard post={Object.assign(obj)} /> // Object.assign(オブジェクト)で、オブジェクトのスプレッドを実現
      ))}
    </Box>
  );
});
