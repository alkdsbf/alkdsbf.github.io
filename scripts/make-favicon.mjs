import sharp from "sharp";
import fs from "node:fs";

const SRC = "C:/Users/lenovo/Downloads/20261021152828_144_2.jpg";

fs.mkdirSync("src/assets/images", { recursive: true });
fs.mkdirSync("public/favicon", { recursive: true });

// 1. 原图直接作为侧边栏头像
fs.copyFileSync(SRC, "src/assets/images/avatar.jpg");

// 2. 裁成正方形，生成浏览器标签图标
await sharp(SRC)
	.resize(512, 512, { fit: "cover", position: "attention" })
	.png()
	.toFile("public/favicon/avatar.png");

const meta = await sharp(SRC).metadata();
console.log(`原图 ${meta.width}x${meta.height} -> 头像已就位，favicon 512x512 已生成`);
