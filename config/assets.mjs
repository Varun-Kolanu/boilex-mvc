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

export const questions = [
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
    },
    {
        type: 'input',
        name: 'author',
        message: 'Author:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'License:',
        default: defaultPackageJson.license
    },
    {
        type: 'input',
        name: 'keywords',
        message: 'Keywords (comma-separated):',
        filter: (input) => input.split(',').map(keyword => keyword.trim())
    }
];