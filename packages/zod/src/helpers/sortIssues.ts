import type { Issue } from "./formatIssues";

export function sortIssues(issues: Issue[]): Issue[] {
  return [...issues].sort((a, b) => a.message.localeCompare(b.message));
}
