@echo off

REM 構建專案
call npm run build

REM 進入 build 目錄
cd build

REM 初始化 git 倉庫
git init

REM 添加所有文件
git add .

REM 提交更改
git commit -m "Deploy to GitHub Pages"

REM 添加遠程倉庫
git remote add origin https://github.com/Piler-Tam/Piler-Tam-software-developer-portfolio.git

REM 強制推送到 gh-pages 分支
git push -f origin master:gh-pages

REM 返回上級目錄
cd ..

echo Deployment completed!