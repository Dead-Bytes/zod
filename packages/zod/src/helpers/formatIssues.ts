export interface Issue {
  path: (string | number)[];
  message: string;
}

export function formatIssues(issues: Issue[], separator = ": "): string[] {
  return issues.map((issue) => {
    const path = issue.path.length ? issue.path.join(".") : "(root)";
    return `${path}${separator}${issue.message}`;
  });
}
