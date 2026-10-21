---
title: CTF Writeup 模板：下次比赛直接照这个写
published: 2026-10-21
description: 一份可以直接抄的 writeup 结构，以及 Web 方向常见的切入点清单。
tags: [CTF, Web, 模板]
category: CTF
---

写 writeup 最大的阻力不是不会写，而是**不知道从哪下笔**。所以把结构先定死，比赛结束按格子填，半小时能出一篇。

## 骨架

```markdown
## 题目信息
- 名称 / 类型 / 靶机地址 / 考点

## 环境准备
复现要用的工具和版本

## 解题过程
### Step 1 先做什么
命令 + 预期输出 + 为什么这么做

## 关键 payload
最终起作用的那一段，单独贴出来

## 总结
这题考的是什么，下次怎么更快想到
```

## 一条硬规则

**每一步都要有"预期输出"**。只写"然后访问了一下"的 writeup，三个月后自己都看不懂。

:::note
写的时候假装读者是三个月后的自己——那时你已经忘了题目长什么样，只剩下这份文字。
:::

## Web 方向常见切入点

按排查顺序，从便宜到贵：

1. **看源码和注释** —— `view-source:`、`robots.txt`、`.git/`、备份文件 `www.zip`
2. **看响应头** —— `Server`、`X-Powered-By`、自定义头里常有提示
3. **看参数** —— URL 里的 `?id=`、`?file=`，每一个都是潜在注入点
4. **改身份** —— cookie、JWT、`X-Forwarded-For`
5. **想绕过** —— 大小写、编码、双写、截断

大部分新生赛题死在前三步。

## 一个最小复现

```bash
# 1. 探一下首页是什么
curl -sI http://target/ | grep -i server

# 2. 看有没有明显的信息泄露
curl -s http://target/robots.txt

# 3. 带参数试一下回显
curl -s "http://target/?id=1" | head -20
```

每一行都要观察输出和默认情况的差异，差异就是线索。
