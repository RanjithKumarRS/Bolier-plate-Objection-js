const execSync = require("child_process").execSync;
const branch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
const pattern = "^(feature|bugfix|hotfix|release)/.+$";

if (["staging", "stage", "master", "main"].includes(branch)) return;

if (!branch.match(pattern)) {
  console.error(
    "Invalid branch name. Branch name should be in format [feature|bugfix|hotfix|release]/branch_name"
  );
  process.exit(1);
}
