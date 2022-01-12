import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  },
});

const config = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

export default config;
