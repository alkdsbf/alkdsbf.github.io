---
title: 博客开张：从一个 Hexo 站换成 Astro
published: 2026-10-21
description: 折腾了一下午的建站记录，顺便说明这个站怎么用。
tags: [随笔, 建站]
category: 杂谈
---

参考了三个别人的博客之后，最终选了 Fuwari 这套主题。这篇文章记一下为什么，以及以后怎么写新文章。

## 为什么换

原本已经用 Hexo 搭好了，但参考站里有个用 Astro + Fuwari 的，视觉完成度明显更高：卡片、封面图、深浅色切换、标签归档、全站搜索，全是自带的。

Hexo 那套没写任何内容，换过来成本几乎为零。

## 每天只用三条命令

```bash
pnpm dev        # 本地预览，http://localhost:4321
pnpm new-post   # 新建文章，自动生成文件名
pnpm build      # 生成静态文件到 dist/
```

预览开着的时候改文章，浏览器会自动刷新，不用重启。

## 文章放哪

所有文章都在 `src/content/posts/` 下，一个 `.md` 一个文章。文件头那段 front-matter 决定它怎么显示：

| 字段 | 作用 |
| --- | --- |
| `title` | 标题 |
| `published` | 发布日期，决定排序 |
| `description` | 首页卡片上的摘要 |
| `tags` | 标签，可以多个 |
| `category` | 分类，只能一个 |
| `draft` | 设成 `true` 就只在本地可见 |

## 图片

放 `src/content/posts/` 里和文章同级的文件夹，然后正常写相对路径引用。别用图床——图床关站那天，所有文章一起变红叉。

> 这个站现在是空的，只有两篇说明文。等有了十篇 writeup，它才像样。
