# Social network for Community

## Technologies
- NodeJS
- MongoDB
- Express
- Typescript

## Command 
- npm init or yarn init
- git init
- git config --global user.email "phanhoangdl@gmail.com"
- git config --global user.name "Phan Hoang"
- git add *
- git commit -m "Initial commit"
- git config --global core.editor "'C:\Program Files\Notepad++\notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
- git remote add origin https://github.com/phanhoangdl/social.git
- git remote show origin
- git branch -M main
- git push -u origin main
- tsc --init // config typescript
- Tham khao: https://www.typescriptlang.org/tsconfig
  
  ## Tao du an voi express
  - yarn add express
  - yarn add @types/express --dev
  
  ## Run:
  - yarn add typescript nodemon ts-node --dev
  - Them package.json: 
    "scripts": {
      "server":"nodemon src/server.ts"
    },
  - Lenh chay: yarn server