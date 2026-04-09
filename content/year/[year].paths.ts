import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const POST_DIR = path.resolve(process.cwd(), "content/post");

function collectMarkdownFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) return collectMarkdownFiles(fullPath);
    return fullPath.endsWith(".md") ? [fullPath] : [];
  });
}

function extractYear(filePath: string): number | undefined {
  const source = readFileSync(filePath, "utf8");
  const frontmatter = /^---\s*[\r\n]+([\s\S]*?)\r?\n---/m.exec(source)?.[1];
  const year = /^year:\s*(\d{2})\s*$/m.exec(frontmatter ?? "")?.[1];
  return year ? Number(year) : undefined;
}

export const YEARS = Array.from(
  new Set(
    collectMarkdownFiles(POST_DIR)
      .map(extractYear)
      .filter((year): year is number => year !== undefined),
  ),
).sort((a, b) => a - b);

export default {
  paths() {
    return YEARS.map((year) => ({ params: { year: String(year) } }));
  },
};
