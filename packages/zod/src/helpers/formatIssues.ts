export interface Issue {
  path: (string | number)[];
  message: string;
}

export function formatIssues(issues: Issue[]): Record<string, string[]> {
  const grouped: Record<string, string[]> = {};
  for (const issue of issues) {
    const path = issue.path.join(".") || "(root)";
    if (!grouped[path]) {
      grouped[path] = [];
    }
    grouped[path].push(issue.message);
  }
  return grouped;
}
