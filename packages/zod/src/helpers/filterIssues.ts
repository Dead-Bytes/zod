import type { Issue } from "./formatIssues";

export function filterByPath(issues: Issue[], pathPrefixes: string[]): Issue[] {
  return issues.filter((issue) => {
    const path = issue.path.join(".");
    return pathPrefixes.some((prefix) => path.startsWith(prefix));
  });
}

export function hasAnyIssues(issues: Issue[]): boolean {
  return issues.length > 0;
}

export function filterByMessage(issues: Issue[], pattern: RegExp): Issue[] {
  return issues.filter((issue) => pattern.test(issue.message));
}
