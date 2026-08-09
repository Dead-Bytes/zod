import type { Issue } from "./formatIssues";

export interface IssueSummary {
  total: number;
  paths: string[];
  messages: string[];
}

export function summarizeIssues(issues: Issue[]): IssueSummary {
  const paths: string[] = [];
  const seen = new Set<string>();
  for (const issue of issues) {
    const path = issue.path.join(".");
    if (!seen.has(path)) {
      seen.add(path);
      paths.push(path);
    }
  }
  return {
    total: issues.length,
    paths,
    messages: issues.map((issue) => issue.message),
  };
}
