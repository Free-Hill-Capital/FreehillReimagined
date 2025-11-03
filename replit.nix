run = "npm run dev"
hidden = [".config", ".git", ".gitignore"]

[nix]
channel = "stable-22_11"

[deployment]
run = ["sh", "-c", "npm run build && npm start"]
deploymentTarget = "cloudrun"

[[ports]]
localPort = 7000
externalPort = 80
