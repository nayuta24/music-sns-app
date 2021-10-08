import { Button } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  w: string;
};

export const PrimaryButton: VFC<Props> = (props) => {
  const { children, w } = props;
  return (
    <Button
      colorScheme="green"
      w={w}
      _hover={{ opacity: 0.8, cursor: "pointer" }}
    >
      {children}
    </Button>
  );
};
