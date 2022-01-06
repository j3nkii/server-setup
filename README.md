# Template for setting up Server.


## Run following in server terminal
- $ npm init --yes
- $ npm install express
- $ npm install nodemon

## Now set some settings
- add .gitignore file and add node_modules/
- go to package.json, locate "scripts" and add "start": "nodemon server/server.js"

## Notes
- In server side code, req, and res must be in order. (req, res)
- url's must be kabob case
- sending data from server needs to be wraped in an object
- routers use modules
- paths using routers stack on eachother inside server code.. (parameters)
- queryParams need to be in an array. must be in order, and use $1, $2 ... in the INSERT INTO or whatever is being used

## Error Handling
- catching and throwing
- use to prevent silent failing
- body parser placement matters