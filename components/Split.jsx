import React from "react";
import Flex from "@mdx-deck/layouts/src/Flex";
import Box from "@mdx-deck/layouts/src/Box";

const Split = ({ children }) => {
  const [a, ...rest] = React.Children.toArray(children);
  return (
    <Flex
      css={{
        alignItems: "flex-start",
        height: "100%"
      }}
    >
      <Box width={1 / 2}>{a}</Box>
      <Box width={1 / 2}>{rest}</Box>
    </Flex>
  );
};

export default Split;
