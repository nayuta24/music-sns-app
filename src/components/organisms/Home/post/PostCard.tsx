import { memo } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { CardMusicBox } from "../../../molecules/post_card/CardMusicBox";
import { CardComment } from "../../../molecules/post_card/CardComment";
import { Rating } from "../../../atoms/button/Rating";
import { CardReactionButtons } from "../../../molecules/post_card/CardReactionButtons";
import { UserInfoBox } from "../../../molecules/UserInfoBox";
import { CardFrame } from "../../../atoms/frame/CardFrame";
import { useHistory } from "react-router";

export const PostCard = memo(() => {
  const history = useHistory();
  const onClickCard = () => {
    history.push("/home/post/1");
  };

  return (
    <CardFrame mb="10px" onClick={onClickCard}>
      {/* 曲情報 */}
      <CardMusicBox
        img="https://i.scdn.co/image/ab67616d00001e029259361b006ad3108801a541"
        title="時間がない"
        artist="キリンジ"
      />
      <Flex
        w="70%"
        h="100%"
        mr="auto"
        flexDirection="column"
        textAlign="left"
        ml="30px"
      >
        {/* コメント */}
        <CardComment
          title="キリンジ最高！"
          body="「愛をあるだけ、すべて」の中でも一番好きな曲です！
                  弓木さんのファンキーなカッティングと高樹さんのコーラスがたまりません！！
                  つい何度も、リピートして聞いてしまいま..."
        />
        <Flex>
          <Box w="50%">
            {/* 評価 */}
            <Rating />
            {/* 投稿へのコメント、いいねなど */}
            <CardReactionButtons comment_val={3} like_val={11} />
          </Box>
          {/* コメントしたユーザー */}
          <UserInfoBox
            img="https://source.unsplash.com/brFsZ7qszSY"
            name="中村 優太"
            user_title="学生"
            pl="30px"
            pt="20px"
          />
        </Flex>
      </Flex>
    </CardFrame>
  );
});
