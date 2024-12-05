import path from "path";

export const defaultPackageJson = {
    "name": "my-app",
    "version": "1.0.0",
    "main": "server.js",
    "type": "module",
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": ""
}

export const packageQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: path.basename(process.cwd())
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description:'
    }
];

export const confirmQuestion = [
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Do you want to spin up the project using default configuration?',
        default: true
    }
]