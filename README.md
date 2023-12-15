# Ecommerce Clothes Websites
https://cloths-ecommerces.netlify.app/
 I've crafted a cutting-edge eCommerce site leveraging Vue.js for a responsive interface, MongoDB for robust data storage, and Express.js on 
Node.js for a scalable backend. Harnessing the power of Vuex, our application boasts seamless state management for an unparalleled user experience.
The UI is not just functional but visually striking, featuring captivating animations that elevate the overall shopping experience. With a strong emphasis on security 
and personalized interactions, this project showcases my expertise in delivering top-notch web solutions. Ready to contribute innovation and technical excellence to your team.

https://cloths-ecommerces.netlify.app/

## 1. Setup

First, to setup all the directories run the following in the main directory:

`npm install`

`npm run setup`

The first command will install `cypress` and some small libraries needed for running the rest of the commands. The second will go into the `client` and `server` directories and set those up to be ran.

In the `client` and `server` directory there are two `.env.example` files. Create a copy and rename that to `.env`. Then follow the instructions in those files to fill in the right values.

To run the app in dev mode you can run the following command in the main directory:

`npm run dev`

## 2. Code structure

```
frontend
├── public
└── src
|   └── assets
|   └── components
|   └── router
|   └── store
|   └── view
|   app.vue
|   main.js

server
└── src
    └── controllers
    └── models
    └── routes
    index.js
```

### 2.1 Client structure

- `public` || public facing client code
- `components` || all of our shared components that are used over multiple pages
- `view` || the view components of our app, any routing will go between these components
- `view/components` || components used specifically on those pages
- `index.jsx` || the start point of the client



### 2.3 Server structure

- `controllers` || all of our controller functions that interact with the database
- `models` || all of our `mongoose` models will be placed here
- `routes` || code to match up the API with our controllers
- `index.js` || the start point of the server

## 3. Stack / external libraries

The base stack of the app is a MERN stack (Mongoose, Express, Vuejs, Node). Next to that we make use of the following extras:

### 3.1 Configuration libraries

- `dotenv` || To load the .env variables into the process environment. See [docs](https://www.npmjs.com/package/dotenv)
- `eslint` || To check our code. We have different configurations for frontend and backend. You can check out the configuration in the `.eslintrc.(c)js` files in the respective `client` and `server` folders. See [docs](https://eslint.org/)
- `prettier` || To automatically format our code. See [docs](https://prettier.io/)

For more information on how these work together including the automatic deployment to heroku, have a look at our detailed [DEV](./DEV.md) file.


### 3.3 Server-side libraries

- `nodemon` || To automatically restart the server when in development mode. See [docs](https://nodemon.io/)
- `cors` || To open up our API. See [docs](https://github.com/expressjs/cors#readme)
- `mongoose` || To add schemas to our database. See [docs](https://mongoosejs.com/)
