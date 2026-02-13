import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  let files: string[];
  try {
    files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  } catch (err) {
    console.error(`[blog] Failed to read directory ${BLOG_DIR}:`, err);
    return [];
  }

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    return getPostBySlug(slug);
  });

  return posts
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title:
        typeof data.title === "string" && data.title.trim()
          ? data.title
          : slug,
      date:
        typeof data.date === "string" && data.date.trim() ? data.date : "",
      description:
        typeof data.description === "string" ? data.description : "",
      tags: Array.isArray(data.tags)
        ? data.tags.filter((t): t is string => typeof t === "string")
        : [],
      content,
    };
  } catch (err) {
    console.error(`[blog] Failed to read ${filePath}:`, err);
    return null;
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  try {
    return fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(/\.mdx$/, ""));
  } catch (err) {
    console.error(`[blog] Failed to read directory ${BLOG_DIR}:`, err);
    return [];
  }
}
