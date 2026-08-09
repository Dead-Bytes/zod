import type { Issue } from "./formatIssues";

export interface IssueSummary {
  total: number;
  paths: string[];
}

export function summarizeIssues(issues: Issue[]): IssueSummary {
  return {
    total: issues.length,
    paths: [...new Set(issues.map((issue) => issue.path.join(".")))],
  };
}
