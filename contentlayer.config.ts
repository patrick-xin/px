import type { ComputedFields } from "contentlayer/source-files";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypePrettyCode from 'rehype-pretty-code';
import { rehypePrettyCodeOptions } from "./lib/rehype-pretty-code";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
  url: {
    type: "string",
    resolve: (post) => `/posts/${post._raw.flattenedPath}`,
  },
};

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatededAt: { type: "string", required: false },
    description: { type: "string", required: true },
    image: { type: "string", required: true },
    isPublished: { type: "boolean", required: true },
    toc: { type: "boolean", required: true },
    thumbnail: { type: "json", required: false },
    category: { type: "enum", required: true, options: ["web", "ai"] },
    tags: { type: "list", of: { type: "string" }, required: true },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: "content/posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      // @ts-ignore
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
    remarkPlugins: []
  }
});

export default contentLayerConfig;
