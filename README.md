# Todo List App

![Application Preview](./screenshots/preview.jpg)

A simple Todo List Application made with MERN (MongoDB, Express.js, React.js and Node.js) stack along with Tailwind CSS for styling and Notyf for notifications.

## Table of Content

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisite](#prerequisites)
- [Installation](#installation)
- [Configurations](#configurations)
- [Start Development Server](#start-development-server)
- [Build and Start Production Server](#build-and-start-production-server)
- [License](#license)

## Features

- Add, Update and Delete Todos.
- Mark Todos as complete.
- Minimalist design made with Tailwind CSS.

## Technologies Used

- MongoDB: A NoSQL database used to store todos.
- Express: A web application framework for building backend APIs in Node.js HTTP server.
- React.js: A JavaScript library for building UI.
- Node.js: A JavaScript runtime used to build backend server as well as development setup for React.js.
- TailwindCSS: A utility-first CSS framework used for styling the application.
- Notyf: A JavaScript Library for displaying notifications on the UI.

## Prerequisites

- Make sure you have Node.js installed on your system. You can download it from https://nodejs.org/
- Make sure you have MongoDB Community Server installed on your system to host the database server on your system. You can download it from https://www.mongodb.com/
  > Alternatively you can use MongoDB Atlas to host the database server on the Cloud. You can set it up from https://www.mongodb.com/atlas/database

## Installation

Clone the repository

```
git clone https://github.com/Kunalpatil22/todo-list-app.git
```

Change into the directory

```
cd todo-list-app
```

Install server dependencies

```
npm install
```

Install client dependencies

```
cd ./client
npm install
```

## Configurations

Create a `.env` file in your root folder and define the following variables.

```
PORT=<your_desired_server_port_number>
MONGODB_URI=<your_mongodb_uri_string>
```

Create a `.env` file in your `client` folder and define the following variable.

```
API_PROXY_URL=<your_api_server_url>
```

> This will ensure that your client will use the above URL for making API requests. Usually, It will be your server URL.

## Start Development Server

Change into your root directory and run the following command to start the development server

```
npm run dev
```

## Build and Start Production Server

Change into `client` directory and run the following command to build application for deployment

```
npm run build
```

This will create a `build` folder with an optimized version of your React.js application in your `client` folder.

Change into `root` of you project and run the following command for starting the server for production

```
  npm start
```

This will start the server with the production build of your React application. You can choose any cloud platform for deploying your application.

## License

The project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for more details.

Feel free to customize and contribute to this README template to provide more information about the Todo List App.
