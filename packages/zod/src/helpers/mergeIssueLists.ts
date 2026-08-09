import type { Issue } from "./formatIssues";

export function mergeIssueLists(a: Issue[], b: Issue[]): Issue[] {
  return [...a, ...b];
}

export function countAcrossLists(lists: Issue[][]): number {
  return lists.reduce((total, list) => total + list.length, 0);
}

export function dedupeIssues(issues: Issue[]): Issue[] {
  const seen = new Set<string>();
  const result: Issue[] = [];
  for (const issue of issues) {
    const key = `${issue.path.join(".")}:${issue.message}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push(issue);
    }
  }
  return result;
}
