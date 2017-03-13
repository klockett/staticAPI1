#URL_SHORTENER -README-
##Installation
USING: node.js
install Brew (through Terminal)
nvm install node latest version
Installation: (through Terminal) *Key installs
- mkdir staticAPI1
- git init
- npm init (fill out the document info)
- atom ./ (thru atom you will see the package.json)

- atom ./ (thru atom you will see the package.json)
- npm install express --save
- touch .gitignore
- git add .giyignore
- git commit -m ''
- git add -A

- mkdir src
- touch src/server.js
- node ./src/server.js
- npm i -g nodemon (short cut for the server)
- mkdir routes
- touch routes/api.js
- mkdir src/models

- mkdir src/routes
- npm install body-parser --save
- type rs (to restart server)


- touch src/routes/index.js
- touch src/models/db.js

- mkdir src/routes/api

- touch src/routes/api/url.js

##Test
install Postman
- test http://localhost:3000/api/urls

##Example
<a href="http://imgur.com/flSNny4"><img src="http://i.imgur.com/flSNny4.png" title="source: imgur.com" /></a>

##Database
- under models folder created db.js, and a url.js files
- in terminal downloaded Sequelize (npm i --save sequelize)
- in terminal downloaded mysql (npm i --save mysql)
- in terminal download (dotenv) and create (.env file) for the database log-in
#mySQL
<a href="http://imgur.com/y65VCaV"><img src="http://i.imgur.com/y65VCaV.png" title="source: imgur.com" /></a>#server
- download brew install mysql
- through terminal to start mysql enter(mysql.server start or stop to end session)
##Test
install Postman
- test http://localhost:3000/api/urls

<a href="http://imgur.com/6xCgjB8"><img src="http://i.imgur.com/6xCgjB8.png" title="source: imgur.com" /></a>

##Utility Tool
- created lib fold  with a touching util.js file
- replaced my console.log() with util.debug() to log

#Examples
<a href="http://imgur.com/r20l0V1"><img src="http://i.imgur.com/r20l0V1.png" title="source: imgur.com" /></a>
<a href="http://imgur.com/mJfIxC2"><img src="http://i.imgur.com/mJfIxC2.png" title="source: imgur.com" /></a>
##Coding Styling Guide
- added eslintrc.json to root
- thru terminal add (npm i --save-dev --save eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react)
- added linter-eslint package
- thru terminal add (npm i --save-dev --save eslint-plugin-jsx-a11y)
- thru terminal (npm install --save chalk)
- note: eslint allowed me to bring some of the code to standard format, chalk allowed to use different coloring so I can seperated my output to my liking.


##Unit Test
- in terminal (npm install mocha --save-dev)
- in terminal (mkdir test also  touch test/__api.js)
- in terminal ( npm i -g mocha) to load globally
- in terminal (npm i --save-dev expect)
- in (npm i supertest --save-dev)
