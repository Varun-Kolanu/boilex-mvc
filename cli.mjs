#!/usr/bin/env node

import inquirer from "inquirer";
import { createPackageJson } from "./helpers/createPackage.mjs";
import { copyFolderSync } from "./helpers/copyBoilerplate.mjs";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { execSync } from "child_process";
import figlet from "figlet";
import chalk from "chalk";
import { confirmQuestion, packageQuestions } from "./config/assets.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const source = join(__dirname, 'src');
const destination = process.cwd();

async function main() {
    try {
        console.log(figlet.textSync('BoilEx-MVC', { horizontalLayout: 'full' }));
        const yes = await inquirer.prompt(confirmQuestion);

        let answers;
        if (yes.confirm) {
            createPackageJson(answers, true);
            answers = {}
        } else {
            answers = await inquirer.prompt(packageQuestions);
            createPackageJson(answers, false);
        }

        console.log(chalk.blue("\nInstalling required dependencies...\n"));

        execSync('npm install express mongoose cors dotenv jsonwebtoken bcrypt && npm install --save-dev nodemon prettier eslint-config-prettier eslint-plugin-prettier', { cwd: destination, stdio: 'inherit' });

        copyFolderSync(source, destination);

        console.log(chalk.green("\nFollow the following steps to configure your project:\n"), `
1. Replace your environment variables in the .env
2. Run "npm run dev" to run the server
        `);
    } catch (err) {
        console.error('Error creating package.json:', err.message);
    }
}

main();
