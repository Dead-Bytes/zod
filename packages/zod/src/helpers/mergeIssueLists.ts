import type { Issue } from "./formatIssues";

export function mergeIssueLists(a: Issue[], b: Issue[], options: { dedupe?: boolean } = {}): Issue[] {
  const merged = [...a, ...b];
  if (!options.dedupe) {
    return merged;
  }
  const seen = new Set<string>();
  return merged.filter((issue) => {
    const key = `${issue.path.join(".")}:${issue.message}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

export function countAcrossLists(lists: Issue[][]): number {
  return lists.reduce((total, list) => total + list.length, 0);
}

export function dedupeIssues(issues: Issue[]): Issue[] {
  const sorted = [...issues].sort((a, b) => a.path.join(".").localeCompare(b.path.join(".")));
  const seen = new Set<string>();
  const result: Issue[] = [];
  for (const issue of sorted) {
    const key = `${issue.path.join(".")}:${issue.message}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push(issue);
    }
  }
  return result;
}
