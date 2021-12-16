# Template for setting up Server.


# Run following in server terminal
- $ npm init --yes
- $ npm install express
- $ npm install nodemon

# Now set some settings
- add .gitignore file and add node_modules/
- go to package.json, locate "scripts" and add "start": "nodemon server/server.js"

# Notes
- In server side code, req, and res must be in order. (req, res)
- 