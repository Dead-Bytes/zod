export interface Issue {
  path: (string | number)[];
  message: string;
}

export function formatIssues(issues: Issue[]): string[] {
  return issues.map((issue) => {
    const path = issue.path.join(".");
    return `${path}: ${issue.message}`;
  });
}
