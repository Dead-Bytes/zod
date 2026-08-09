import type { Issue } from "./formatIssues";

export function filterByPath(issues: Issue[], pathPrefix: string, exact = false): Issue[] {
  return issues.filter((issue) => {
    const path = issue.path.join(".");
    return exact ? path === pathPrefix : path.startsWith(pathPrefix);
  });
}

export function hasAnyIssues(issues: Issue[]): boolean {
  return issues.length > 0;
}

export function filterByMessage(issues: Issue[], keyword: string, caseSensitive = false): Issue[] {
  return issues.filter((issue) =>
    caseSensitive
      ? issue.message.includes(keyword)
      : issue.message.toLowerCase().includes(keyword.toLowerCase())
  );
}
