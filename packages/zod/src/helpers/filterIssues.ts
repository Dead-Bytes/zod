import type { Issue } from "./formatIssues";

export function filterByPath(issues: Issue[], pathPrefix: string): Issue[] {
  return issues.filter((issue) => issue.path.join(".").startsWith(pathPrefix));
}

export function hasAnyIssues(issues: Issue[]): boolean {
  return issues.length > 0;
}

export function filterByMessage(issues: Issue[], keyword: string): Issue[] {
  return issues.filter((issue) => issue.message.includes(keyword));
}
