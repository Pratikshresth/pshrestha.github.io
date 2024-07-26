# Navigate to the repository directory
cd "E:\test\portfolio"

# Add all changes
git add .

# Commit changes with a message
git commit -m "Fix import paths for components"

# Fetch the main branch into a temporary branch named 'tmp'
git fetch origin main:tmp

# Rebase current branch onto 'tmp'
git rebase tmp

# Push the changes to the 'main' branch on the remote repository
git push origin HEAD:main

# Delete the temporary branch
git branch -D tmp

