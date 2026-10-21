# Run inside your CampusPilot project folder (code from v0 + these files).
# Requires: git and GitHub CLI (https://cli.github.com), then `gh auth login` once.
git init
git add .
git commit -m "Initial commit: CampusPilot"
git branch -M main
gh repo create campuspilot --public --source=. --remote=origin --push `
  --description "AI-powered BTech study hub: auth, AI chatbot, backlog help, 40 subjects"
