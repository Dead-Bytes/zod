import type { Issue } from "./formatIssues";

export function countIssues(issues: Issue[], pathPrefix?: string): number {
  if (!pathPrefix) {
    return issues.length;
  }
  return issues.filter((issue) => issue.path.join(".").startsWith(pathPrefix)).length;
}
