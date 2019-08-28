import { slides as intro } from "./slides/intro.mdx";
import { slides as api } from "./slides/api.mdx";
import { slides as react } from "./slides/react.mdx";
import { slides as typeDefinitions } from "./slides/type-definitions.mdx";
import { slides as outro } from "./slides/outro.mdx";

export { default as themes } from "./themes";

export const slides = [
  ...intro,
  ...api,
  ...react,
  ...typeDefinitions,
  ...outro
];
