import type { Issue } from "./formatIssues";

export function countIssues(issues: Issue[]): number {
  return issues.length;
}
