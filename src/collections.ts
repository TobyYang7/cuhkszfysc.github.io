import { type Page, data } from "./pages.data";

const collections = data.reduce(
  (acc, page) => {
    if (page.url.startsWith("/blog/")) acc.blogs.push(page);
    else if (page.url.startsWith("/docs/")) acc.docs.push(page);
    else if (page.metadata.type === "page") acc.pages.push(page);
    else acc.posts.push(page);
    return acc;
  },
  { blogs: [], docs: [], pages: [], posts: [] } as Record<
    "blogs" | "docs" | "pages" | "posts",
    Page[]
  >,
);

export const { blogs, docs, pages, posts } = collections;
