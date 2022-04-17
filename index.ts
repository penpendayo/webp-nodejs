import { searchFiles } from "./serachFiles";
import { promises as fs } from "fs";
import sharp, { WebpOptions } from "sharp";

(async () => {
  const SERACH_TARGET_DIR = "./input";
  const imageFileInfos = await searchFiles(SERACH_TARGET_DIR);
  for (const { dirName, fileName, ext } of imageFileInfos) {
    const webpOption: WebpOptions = {};
    switch (ext) {
      case ".jpeg":
      case ".jpg":
        webpOption.lossless = false;
        break;
      case ".png":
        webpOption.nearLossless = true;
        break;
    }
    await sharp(`./${dirName}/${fileName}`)
      .webp(webpOption)
      .toFile(`./${dirName}/${fileName.split(".")[0]}.webp`);
    await fs.unlink(`./${dirName}/${fileName}`) //圧縮前の画像を削除したくない場合はコメントアウトする
  }
})();
