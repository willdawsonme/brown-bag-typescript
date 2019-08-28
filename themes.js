import merge from "lodash.merge";
import { dark } from "mdx-deck/themes";
import CodeBlock from "./components/CodeBlock";

const theme = merge(
  {
    colors: {
      pre: "#999",
      code: "#777",
      background: "rgb(29, 31, 33)"
    }
  },
  {
    components: {
      pre: props => props.children,
      code: CodeBlock
    }
  }
);

export default [dark, theme];
