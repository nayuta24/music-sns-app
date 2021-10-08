import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { memo, ReactNode, VFC } from "react";

type Props = {
  display?: {};
  onClick: () => void;
};

export const HamburgerButton: VFC<Props> = memo((props) => {
  const { display, onClick } = props;
  return (
    <IconButton
      colorScheme="green"
      aria-label="Open menu"
      icon={<HamburgerIcon />}
      size="sm"
      ml="auto"
      display={display}
      onClick={onClick}
    />
  );
});
