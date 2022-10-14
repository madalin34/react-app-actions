// https://github.com/semantic-release/semantic-release
module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/madalin34/react-app-actions",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/github", {
        assets: [
            { path: "build.zip", label: "Build"},
            { path: "coverage.zip", label: "Coverage"}
        ]
    }],
  ],
};
