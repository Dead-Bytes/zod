import type { Issue } from "./formatIssues";

export function countIssues(issues: Issue[]): number {
  const unique = new Set(issues.map((issue) => `${issue.path.join(".")}:${issue.message}`));
  return unique.size;
}
