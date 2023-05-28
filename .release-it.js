module.exports = {
  "plugins": {
    "@release-it/conventional-changelog": {
      "infile": "CHANGELOG.md",
      "preset": {
        "name": "conventionalcommits",
        "types": [{
          "type": "feat",
          "section": "✨ Features | 新功能",
          "hidden": false
        },
        {
          "type": "fix",
          "section": "🐛 Bug Fixes | Bug 修复",
          "hidden": false
        },
        {
          "type": "init",
          "section": "🎉 Init | 初始化",
          "hidden": true
        },
        {
          "type": "docs",
          "section": "✏️ Documentation | 文档",
          "hidden": false
        },
        {
          "type": "style",
          "section": "💄 Styles | 风格",
          "hidden": true
        },
        {
          "type": "refactor",
          "section": "♻️ Code Refactoring | 代码重构",
          "hidden": true
        },
        {
          "type": "perf",
          "section": "⚡ Performance Improvements | 性能优化",
          "hidden": true
        },
        {
          "type": "test",
          "section": "✅ Tests | 测试",
          "hidden": true
        },
        {
          "type": "revert",
          "section": "⏪ Revert | 回退",
          "hidden": true
        },
        {
          "type": "build",
          "section": "📦‍ Build System | 打包构建",
          "hidden": true
        },
        {
          "type": "chore",
          "section": "🚀 Chore | 构建/工程依赖/工具",
          "hidden": true
        },
        {
          "type": "ci",
          "section": "👷 Continuous Integration | CI 配置",
          "hidden": true
        }
      ]
      },
      "header": "# 更新日志"
    }
  },
  "git": {
    "commitMessage": "chore: release v${version}",
    "requireBranch": "main"
  },
  "npm": {
    "publish": false
  },
}