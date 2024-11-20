npm init -y
npm install webpack webpack-cli --save-dev
npm install webpack-dev-server --save-dev
npx webpack --watch

создаем файлы webpack.configDev.js и webpack.configProd.js, прописываем параметры, в т.ч. HMR для dev
npm install -g json-server

создаем db.json
json-server --watch db.json

ставим линт через хук при pre-commit
npm set-script prepare "husky install" 
npm run prepare
npx husky add .husky/pre-commit "npm run lint"
