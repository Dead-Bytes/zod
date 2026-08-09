import type { Issue } from "./formatIssues";

export function mergeIssueLists(...lists: Issue[][]): Issue[] {
  return lists.flat();
}

export function countAcrossLists(lists: Issue[][]): number {
  return lists.reduce((total, list) => total + list.length, 0);
}

export function dedupeIssues(
  issues: Issue[],
  keyFn: (issue: Issue) => string = (issue) => `${issue.path.join(".")}:${issue.message}`
): Issue[] {
  const seen = new Set<string>();
  const result: Issue[] = [];
  for (const issue of issues) {
    const key = keyFn(issue);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(issue);
    }
  }
  return result;
}
