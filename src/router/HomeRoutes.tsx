import { Recent } from "../components/pages/Recent";
import { FollowPosts } from "../components/pages/FollowPosts";
import { Popular } from "../components/pages/Popular";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Recent />,
  },
  {
    path: "/follow_post",
    exact: false,
    children: <FollowPosts />,
  },
  {
    path: "/popular",
    exact: false,
    children: <Popular />,
  },
];
