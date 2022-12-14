# BizAd

Business Advertising with React.

### Tech Stack
* Node.js
* Express.js
* MongoDB
* Mongoose
* nodemon
* React


## Prepare The Environment
1. Create a new MongoDB database with cards, services, servicesforusers and users collections
2. Clone project in vscode: `https://github.com/rivkacohe/BizAd.git`

## Project Installation
1. Install nodemon globally: `npm i -g nodemon` and update `package.json` accordingly.
2. Server:
    * Add configuration file: `config/dev.js` containing the database connection details.
    * Install dependencies for the Server:  
    `cd server`  
    `npm install`
    * Install the following packages: joi, bcrypt, jsonwebtoken:
    `npm i joi`
    `npm i bcrypt`
    `npm i jsonwebtoken`
3. Install dependencies for React client:  
    `npm install`
    * Install the following packages: bootstrap, bootstrap-icons, react-router-dom, formik 
    `npm i bootstrap bootstrap-icons`
    `npm i react-router-dom @types/react-router-dom`
    `npm install formik --save`

## Run The App
> Make sure mongo server is running.

1. Run the server - cd server, then:

- Windows: set DEBUG=meal-on-time:\*; & npm start
  or: DEBUG=biz-ad:\* npm start
- MacOS/Linux: DEBUG=biz-ad:\* npm start

2. Run the client:
   cd client
   npm start