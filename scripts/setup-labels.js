// Script to set up required labels for issue automation workflow
// Usage: node scripts/setup-labels.js <owner> <repo>

const labels = [
  // Category Labels
  { name: "bug", color: "d73a4a", description: "Something isn't working" },
  { name: "enhancement", color: "a2eeef", description: "New feature or request" },
  { name: "epic", color: "fbca04", description: "Large feature requiring multiple sub-tasks" },
  { name: "maintenance", color: "0052cc", description: "Maintenance and housekeeping tasks" },
  
  // Priority Labels
  { name: "priority-critical", color: "b60205", description: "Critical priority issue" },
  { name: "priority-high", color: "d93f0b", description: "High priority issue" },
  { name: "priority-medium", color: "fef2c0", description: "Medium priority issue" },
  { name: "priority-low", color: "0e8a16", description: "Low priority issue" },
  
  // Status Labels
  { name: "needs-triage", color: "d4c5f9", description: "Needs to be reviewed by maintainers" },
  { name: "needs-review", color: "cccccc", description: "Awaiting review from maintainers" },
  { name: "first-time-contributor", color: "7057ff", description: "Issue created by first-time contributor" }
];

if (require.main === module) {
  const [owner, repo] = process.argv.slice(2);
  if (!owner || !repo) {
    console.error("Usage: node scripts/setup-labels.js <owner> <repo>");
    process.exit(1);
  }
  
  console.log("Labels to create:");
  console.log(JSON.stringify(labels, null, 2));
  
  // Note: This would typically use the GitHub API to create labels
  // For demonstration, we're showing the structure needed
  console.log(`\nLabels should be created in repository: ${owner}/${repo}`);
}

module.exports = { labels };