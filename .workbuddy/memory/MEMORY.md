# 博客项目约定（D:/develop/blog）

## 技术栈

- **框架**：Astro 5.13.10 + 主题 **Fuwari**（github.com/saicaca/fuwari）
- **包管理器**：**必须用 pnpm 9.14.4**。`package.json` 里有 `preinstall: npx only-allow pnpm`，npm/yarn 会被直接拒绝
- **写作格式**：Markdown，文章在 `src/content/posts/`
- **部署目标**：静态输出到 `dist/`，可上 GitHub Pages / Vercel（0 成本）

## 常用命令

```bash
pnpm dev          # 本地预览 http://localhost:4321
pnpm new-post     # 新建文章
pnpm build        # 构建到 dist/
```

pnpm 已通过 `corepack enable pnpm` 启用为全局命令，版本由 `packageManager` 字段锁定为 9.14.4，无需再写 `npx -y pnpm@9.14.4`。

## 站点身份

| 项 | 值 |
|---|---|
| 昵称 | **Nu1lPointer** |
| GitHub | https://github.com/alkdsbf |
| 站点标题 | Nu1lPointer 的博客 |
| 副标题 | Web · CTF · 折腾记录 |
| 头像源图 | `C:\Users\lenovo\Downloads\20261021152828_144_2.jpg`（换头像后重跑 `node scripts/make-favicon.mjs`） |
| 主题色 | hue 250（青蓝），允许访客自选 |

## 关键文件

| 路径 | 作用 |
|---|---|
| `src/config.ts` | 站点名、副标题、语言、主题色、导航、作者信息 |
| `src/content/config.ts` | 文章 front-matter 的 schema（title/published/description/tags/category/draft） |
| `src/content/posts/` | 所有文章 |
| `astro.config.mjs` | base 路径、站点 URL（部署时必须改） |
| `dist/` | 构建产物，部署上传这个目录 |

## 环境坑（本机）

- **git 访问 GitHub 报 `CRYPT_E_NO_REVOCATION_CHECK`**：证书吊销检查失败。`git clone` 走不通，改用 `curl codeload.github.com/.../zip` 下载。若必须用 git，解 `git config --global http.schannelCheckRevoke false`
- **pnpm 默认 store 在 `D:\.pnpm-store` 会报 `ERR_PNPM_ENOENT`**：必须显式指定 `--store-dir D:/develop/.pnpm-store`
- Node 22.22.2（managed），Python 3.13

## 历史

- 2026-10-21：先用 Hexo 7.3 搭骨架，后按参考站切换到 Astro + Fuwari。Hexo 旧项目备份在 `D:/develop/hexo-backup`
