import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPostsProps } from "../utils/blogTypes";
import { FC } from "react";

const News: FC<BlogPostsProps> = ({ posts }) => {
  if (!posts) {
    return <div>Pas encore d&rsquo;actualités</div>;
  }
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <ul key={index}>
            <li>{post.frontMatter.title}</li>
          </ul>
        );
      })}
    </div>
  );
};
export default News;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "posts/news"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd() + "/posts/news", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
