import type { Issue } from "./formatIssues";

export function sortIssues(issues: Issue[], order: "asc" | "desc" = "asc"): Issue[] {
  const sorted = [...issues].sort((a, b) => a.path.join(".").localeCompare(b.path.join(".")));
  return order === "desc" ? sorted.reverse() : sorted;
}
