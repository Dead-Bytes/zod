import type { Issue } from "./formatIssues";

export function sortIssues(issues: Issue[]): Issue[] {
  return [...issues].sort((a, b) => a.path.join(".").localeCompare(b.path.join(".")));
}
