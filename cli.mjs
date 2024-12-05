#!/usr/bin/env node

import inquirer from "inquirer";
import { questions } from "./config/assets.mjs";
import { createPackageJson } from "./helpers/createPackage.mjs";
import { copyFolderSync } from "./helpers/copyBoilerplate.mjs";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { execSync } from "child_process";

const argv = process.argv.slice(2);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const source = join(__dirname, 'src');
const destination = process.cwd();

async function main() {
    try {
        let answers;
        if (argv.includes("-y") || argv.includes("--yes")) {
            createPackageJson(answers, true);
            answers = {}
        } else {
            answers = await inquirer.prompt(questions);
            createPackageJson(answers, false);
        }

        execSync('npm install express mongoose cors dotenv jsonwebtoken bcrypt npm install --save-dev nodemon prettier eslint-config-prettier eslint-plugin-prettier', { cwd: destination, stdio: 'inherit' });

        copyFolderSync(source, destination);
    } catch (err) {
        console.error('Error creating package.json:', err.message);
    }
}

main();
