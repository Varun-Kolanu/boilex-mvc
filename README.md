![image](https://github.com/user-attachments/assets/d7faad89-ee16-44a0-9fd6-0def073e33b4)

# Boilerplate for Express apps following MVC

BoilEx-MVC is a CLI tool which helps users to spin up express apps in seconds, thus saving setup time.

## Why use it?:
- Easy to install and use
- Have the express server running in a few seconds
- MVC folder structure
- Useful middlewares, manual authentication already pre-loaded
- Mongoose setup

## Usage:
- Install the tool globally using `npm install -g boilex-mvc` and then run `boilex-mvc` in a folder you want to setup the server
- Or directly use the tool without installing, by running `npx boilex-mvc`

## Folder Structure of the generated architecture:

```
.
├── config/
│   ├── constants.js
│   └── database.js
├── controllers/
│   └── auth.js
├── middlewares/
│   ├── auth.js
│   └── error.js
├── models/
│   └── user.js
├── utils/
│   ├── sendJwt.js
│   └── utils.js
├── .env
├── .env.example
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── app.js
└── server.js
```

## Adapting to this architecture:

1. The manual authentication is setup already keeping two things in mind:
   - Authentication is used in most of the servers
   - As a sample, to create new functionality
2. To send a jwt to user in the body, use `sendJwt` function defined in `utils/sendJwt.js`
3. Error handling is done efficiently.
   - Just pass your controller function to `tryCatch` function defined in `utils/utils.js`.
   - Internal server errors are caught and informed to user with 500 status response using the `errorHandler` in `middlewares/error.js`
   - To send a custom error response, use
     ```bash
     import ErrorHandler from "../middlewares/error.js";
     
     ...
     return next(new ErrorHandler("your error message", your_status_code));
     ...
4. Use `isAuthenticated` function defined in `middlewares/auth.js` as a middleware in routes, where you need to check whether user is authenticated or not.
5. You can use your own method again, but this architecture is just given to ease things up in development process.

## Contributing:

- Fork the repo and clone your forked repo
- To run the cli, make a test repo, change into it and run the cli.js using `../cli.js` or to install the cli globally, use `npm link` and then run `boilex-mvc` from any folder.
- Issues and Pull requests are welcomed!


