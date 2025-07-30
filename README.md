
  

# A MERN stack app(Todo app) with React.js + node.js + express.js + mongodb with REST API

  


###  Front-End - React.js

###  Back-End - Node.js, Express.js & MongoDB Atlas

🖐 Hi there,  It's a full-stack app built in React.js for the frontend and Node.js for the backend. And I've used Mongodb's atlas as a cloud service provider to store data. This app is a simple TODO APP, this is just to showcase the basic working of a Full-stack application built in MERN. This app includes all the CRUD operations performed via exposed APIs. With the App's UI and it's endpoints, I have been able to perform tests (UI and APIs respectively)

  ## 📦packages used:
**Frontend -** 
 1. react-bootstrap : for frontend CSS framework

***Backend -*** 
 1. express-validator - Input validation
 2. mongoose - ODM
 3. express - node.js framework

## API Endpoints

    http://localhost:8080/get
    http://localhost:8080/get/${id}
    http://localhost:8080/post
    http://localhost:8080/delete/${id}
    http://localhost:8080/put/${id}
    http://localhost:8080/login
 



## 😀How to use this project

1. Well, first clone or download this repo.
2. Create a cluster in mongodb Atlas, and then create a collection, and get your access URL to your cluster's database 

## Environment Variables

Create a `.env` file in the root directory with the following: 
MONGODBURL=your_mongodb_connection_string

example formart: MONGODBURL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todo-db?retryWrites=true&w=majority

**Do not commit your `.env` file to version control.** It's already ignored via `.gitignore`.

3. In Root folder, Run `npm install` to install dependent packages for the Node.js server.
4. In Client folder, Run `npm install` to install dependent packages for the React app.
6. Now, you're ready to go!

## Running Tests
# API Tests
1. make sure backend server is running - npm start from root
2. cd to postman directory and run
 - npm install -g newman
 - npm run test:api
 - find report of the execution in postman/report.html which you can view in your browser

 # UI Tests
 1. Make sure both backend and frontend servers are running. 
 2. cd cypress and run either 
  - npx cypress run (headless mode)
  - npx cypress open

  ## GitHub Actions
- The project includes automated workflows:
    cypress.yml — runs Cypress tests.
    newman-tests.yml — runs API tests with Newman.

- These workflows are located under .github/workflows/.




